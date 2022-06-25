import React from "react"
import { useNavigate } from "react-router-dom"
import "../../styles/Header.css"

const Header = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="hidden-container">
        <div className="header">
          <h3>{props.title}</h3>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
      <div className="spacing-block" />
    </>
  )
}

export default Header