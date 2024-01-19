import React from "react"
import PropTypes from "prop-types"

const Overlay = ({ onClick }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.1)"
      }}
      onClick={onClick}
    />
  )
}

Overlay.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Overlay

