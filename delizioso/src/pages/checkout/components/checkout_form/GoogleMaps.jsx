import React, { useState, useCallback, useEffect } from "react"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"
import { useDispatch } from "react-redux"
import { setAddress } from "../../../../control/addressReducer"

const containerStyle = {
  width: "100%",
  height: "220px"
}

const center = {
  lat: 40.4060260333048,
  lng: 49.8484015561843
}

function GoogleMaps({ setValue }) {
  const dispatch = useDispatch()
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
  })

  const [map, setMap] = useState(null)
  const [markerPosition, setMarkerPosition] = useState(center)

  const onLoad = useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback() {
    setMap(null)
  }, [])

  const onMarkerClick = (event) => {
    let lat = event.latLng.lat()
    let lng = event.latLng.lng()

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${
        import.meta.env.VITE_GOOGLE_MAP_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedAddress = data.results[0].formatted_address
        //  console.log(formattedAddress)
        //  dispatch(setAddress(formattedAddress))
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    // Update marker position when geolocation changes
    window.navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      setMarkerPosition({ lat, lng });
      console.log(lat, lng)
    })
  }, [])

  useEffect(() => {
    // Update map bounds when marker position changes
    if (map) {
      map.panTo(markerPosition)
    }
  }, [map, markerPosition])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}
      mapTypeId="satellite"
    >
      <Marker
        position={markerPosition}
        onClick={onMarkerClick}
        draggable={true}
        onDragEnd={async (e) => {
          const newLng = e.latLng.lng()
          const newLat = e.latLng.lat()
          setMarkerPosition({ lat: newLat, lng: newLng })
          onMarkerClick(e);
          console.log('DRAG END')
          const data = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${newLat},${newLng}&key=${
              import.meta.env.VITE_GOOGLE_MAP_API_KEY
            }`
          )
            .then((response) => response.json())
            .catch((error) => console.log(error));
          console.log(data.results[0].formatted_address);
          setValue("address", data.results[0].formatted_address);
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(GoogleMaps)
