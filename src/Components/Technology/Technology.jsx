import React, { Fragment } from 'react'
import classes from "./Technology.module.css"
import Tech from '../Tech/Tech'

function Technology() {
  return (
    <Fragment>
        <div className={`row ${classes.technologies}`}>
            <div className={`${classes.headBox}`}>
                <h2><b>Learn The <span className={classes.trending}>Trending</span> Technology</b></h2><br/>
            </div>
            <Tech/>
            {/* <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-12 ${classes.box}`}>
                <img src={Angular} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-12 ${classes.box}`}>
                <img src={node} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-12 ${classes.box}`}>
                <img  src={react} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-12 ${classes.box}`}>
                <img   src={mongodb} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-12 ${classes.box}`}>
                <img src={python} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-12 ${classes.box}`}>
                <img src={github} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-12 ${classes.box}`}>
                <img src={unity} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-12 ${classes.box}`}>
                <img  src={docker} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-12 ${classes.box}`}>
                <img  src={azure} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-12 ${classes.box}`}>
                <img  src={kubernetes} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-12 ${classes.box}`}>
                <img  src={burp} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-12 ${classes.box}`}>
                <img  src={metasploit} alt="" />
            </div> */}
        </div>
    </Fragment>
  )
}

export default Technology
