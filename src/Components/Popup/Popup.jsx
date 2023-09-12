import React, { Fragment } from "react";
import classes from "./Popup.module.css";
import popup from "../../assets/popup.PNG";
import popup2 from "../../assets/popup2.PNG";
import popup3 from "../../assets/popup3.PNG";
import popup4 from "../../assets/popup4.PNG";
import Modal from "../Modal/Modal";

function Popup(props) {
  const data = [{
    id : 1,
    photo : popup,
    date : 'Sep 24, 2023',
    duration : '2 Hours',
    name : 'CloudOps Mastery',
    types : ['Google Cloud Platform(GCP)','AWS','Microsoft Azure Cloud'],
  },
  //  {
  //   id : 2,
  //   photo : popup2,
  //   date : 'Sep 23, 2023',
  //   duration : '2 Hours',
  //   name : 'AngularJS Unleashed',
  //   types : ['Angular'],
  // }, {
  //   id : 3,
  //   photo : popup3,
  //   date : 'Sep 17, 2023',
  //   duration : '2 Hours',
  //   name : 'Getting Started with Node.js',
  //   types : ['NodeJS'],
  // }, {
  //   id : 4,
  //   photo : popup4,
  //   date : 'Sep 16, 2023',
  //   duration : '2 Hours',
  //   name : 'ReactJs Unleashed',
  //   types : ['ReactJS'],
  // }
];

  const random = Math.floor(Math.random()*3);
  console.log(random);

  const handleClose = () => {
    props.onClick(false);
  };

  return (
    <Modal onClick={handleClose}>
    <u>
        <h1 className="text-center pb-2">Upcoming Webinars...</h1>
      </u>
      <hr />
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
      
      {data.map((item)=>{
        return (
        <div className="carousel-inner">
          <div className="carousel-item d-flex ">
          
          
            <img src={item.photo} className="d-block pb-2" alt="" />
            <div className={classes.allData}>
            <div className={classes.dandt}>
            <span className={classes.date}><i class="ri-calendar-line"></i> {item.date}</span>
            <span className={classes.duration}><i class="ri-time-line"></i> {item.duration}</span>
          </div>
          <div className={classes.headandtype}>
            <h3 className={classes.webinarHeading}>{item.name}</h3>
            <ul className={classes.types}>
             {item.types.map((type)=>{
              return (<li>{type}</li>)
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
        )
      })}
        <button
          type="button"
          onClick={handleClose}
          className={`btn-close ${classes.close}`}
          aria-label="Close"
        ></button>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
        
    </Modal>
  );
}

export default Popup;
