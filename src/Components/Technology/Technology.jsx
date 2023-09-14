import React, { Fragment } from 'react'
import classes from "./Technology.module.css"
import Angular from '../../assets/Technology/angularsvg.svg'
import node from '../../assets/Technology/node-js.svg'
import react from '../../assets/Technology/reactjs.svg'
import mongodb from '../../assets/Technology/mongodbsvg.png'
import python from '../../assets/Technology/python.svg'
import github from '../../assets/Technology/github.png'
import unity from '../../assets/Technology/unity.png'
import docker from '../../assets/Technology/docker.png'
import azure from '../../assets/Technology/Microsoft_Azure_Logo.svg.png'
import kubernetes from '../../assets/Technology/kuber.png'
import burp from '../../assets/Technology/burp.png'
import metasploit from '../../assets/Technology/metasploit_logo.png'

function Technology() {
  return (
    <Fragment>
        <div className={`row ${classes.technologies}`}>
            <div className={`${classes.headBox}`}>
                <h2><b>Learn The <span className={classes.trending}>Trending</span> Technology</b></h2><br/>
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 col ${classes.box}`}>
                <img src={Angular} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 col ${classes.box}`}>
                <img src={node} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 col ${classes.box}`}>
                <img  src={react} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 col ${classes.box}`}>
                <img   src={mongodb} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 col ${classes.box}`}>
                <img src={python} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 col ${classes.box}`}>
                <img src={github} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 col ${classes.box}`}>
                <img src={unity} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 col ${classes.box}`}>
                <img  src={docker} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 col ${classes.box}`}>
                <img  src={azure} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 col ${classes.box}`}>
                <img  src={kubernetes} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 col ${classes.box}`}>
                <img  src={burp} alt="" />
            </div>
            <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 col ${classes.box}`}>
                <img  src={metasploit} alt="" />
            </div>
        </div>
    </Fragment>
  )
}

export default Technology
