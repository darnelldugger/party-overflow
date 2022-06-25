import React from "react"
import "../../styles/Header.css"

const Header = (props) => {
  return (
    <>
      <div className="hidden-container">
        <div className="header">
          <h3>Recent Posts</h3>
          <button>Back</button>
        </div>
      </div>
      <div className="spacing-block" />
    </>
  )
}

export default Header