import React from 'react'
import logo from "../Images/logo.svg"

function NavBar() {
    const data =[
        {id:0, href: "#home", text:"Home"},
        {id:1, href: "#about", text:"About"},
        {id:2, href: "#services", text:"Services"},
        {id:3, href: "#tours", text:"Tours"}
    ];
    const socialData = [
        {href:"https://www.facebook.com", className:"fab fa-facebook"},
        {href:"https://www.twitter.com", className:"fab fa-twitter"},
        {href:"https://www.squarespace.com", className:"fab fa-squarespace"}
    ]

  return (    
    <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} className="nav-logo" alt="Backroads" />
                <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
            </div>

            {/* <!-- left this comment on purpose --> */}

            <ul className="nav-links" id="nav-links">
                {data.map((mapData)=>{
                    return(
                        <li key={mapData.id}> <a href={mapData.href} className="nav-link"> {mapData.text} </a></li>
                    )
                })}
            </ul>

            <ul className="nav-icons">
                {socialData.map((link)=>{
                    return(
                     <li>
                        <a href={link.href}  className="nav-icon">
                        <i className={link.className}></i></a>
                    </li>
                    )
                })}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar