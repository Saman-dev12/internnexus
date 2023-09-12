import React from 'react'
import classes from "./Navbar.module.css"
import logo from "../../assets/logo.png"

function Navbar() {
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <img className={classes.image} src={logo} alt="logo" />
      </div>
      <div className={classes.allItems}>
        <ul className={classes.navItems}>
          <li className={classes.item}><a href='/'><i class="ri-home-fill"></i> Home</a></li>
          <li className={classes.item}><a href='/'><i class="ri-slideshow-2-fill"></i> Webinar</a></li>
          <li className={classes.item}><a href='/'><i class="ri-calendar-event-fill"></i> Event</a></li>
          <li className={classes.item}><a href='/'><i class="ri-chat-2-fill"></i> Blog</a></li>
          <li className={classes.item}><a href='/'><i class="ri-tools-fill"></i> Resource</a></li>
        </ul>
      </div>
      <div className={classes.loginButton}>
        <button className={classes.loginBtn}>Login <i class="ri-login-box-fill"></i></button>
      </div>
    </div>
  )
}

export default Navbar
