import React, { Fragment } from "react";
import classes from "./Corousel.module.css";

function Corousel(props) {
  const data = props.data;
  return (
    <Fragment>
      <u>
        <h1 className="text-center pb-2">Upcoming Webinars...</h1>
      </u>
      <hr />
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active d-flex">
            <img src={data.photo} className="d-block" alt="..." />
            <div className={classes.allData}>
              <div className={classes.dandt}>
                <span className={classes.date}>
                  <i className="ri-calendar-line"></i> {data.date}
                </span>
                <span className={classes.duration}>
                  <i className="ri-time-line"></i> {data.duration}
                </span>
              </div>
              <div className={classes.headandtype}>
                <h3 className={classes.webinarHeading}>{data.name}</h3>
                <ul className={classes.types}>
                  {data.types.map((type) => {
                    return <li key={type}>{type}</li>;
                  })}
                </ul>
              </div>
              <div className={classes.btnandfree}>
                <button className={classes.exploreBtn}>Explore Webinar</button>
                <span className={classes.free}>Free</span>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={props.handleClose}
          className={`btn-close ${classes.close}`}
          aria-label="Close"
        ></button>
        
      </div>
    </Fragment>
  );
}

export default Corousel;
