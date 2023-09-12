import React from "react"
import "./Header.css"
import Default from "./Default"
import Entered from "./Entered"

function Header({ isUserLoggedIn }) {

  return (
    <>
      {!isUserLoggedIn ? (
          <Default/>
      ) : (
        <Entered/>
      )}
    </>
  )
}

export default Header
