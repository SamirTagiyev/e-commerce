// // OpeningMenu.jsx
// import React, { useState } from "react"
// import "./opening_menu.scss"// Import your CSS for styling
// import { style } from "./style.module.scss";
// import { NavLink } from "react-router-dom"


// function OpeningMenu({ toggleMenu }) {
//   const [isOpen, setIsOpen] = useState(false)

// const handleToggleMenu = () => {
//   setIsOpen(!isOpen)
//   toggleMenu() // Call the toggleMenu function from props
// }

//   return (
//     <div className={`opening-menu ${isOpen ? "open" : ""}`}>
//       <nav>
//         <ul>
//           <li className="link">
//             <NavLink to="/">Home </NavLink>
//           </li>

//           <li className="link">
//             <NavLink to="/menu">Menu </NavLink>
//           </li>

//           <li className="link">
//             <NavLink to="/about"> About&nbsp;us </NavLink>
//           </li>

//           <li className="link">
//             <NavLink to="/order">Order&nbsp;online </NavLink>
//           </li>

//           <li className="link">
//             <NavLink to="/reservation">Reservation </NavLink>
//           </li>

//           <li className="link">
//             <NavLink to="/contact">Contact&nbsp;us </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default OpeningMenu
