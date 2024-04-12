import React from 'react'
import Sidenav from "../Sidenav/Sidenav"
import Content from "../Content/Content"
import "./MainContent.scss"

function MainContent() {
  return (
    <div className="maincontent">
      <Sidenav/>
      <Content/>
    </div>
  )
}

export default MainContent