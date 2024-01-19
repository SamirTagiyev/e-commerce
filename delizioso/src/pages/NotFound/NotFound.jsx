import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { NavLink } from "react-router-dom"
import style from "./not_found.module.scss";

import Error from "./error.svg";

const NotFound = () => {
  return (
    <Wrapper>
      <img className={style.error} src={Error} alt="error" />
      <NavLink to="/">
        <Button className={style.btn}> Go Back</Button>
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`

export default NotFound
