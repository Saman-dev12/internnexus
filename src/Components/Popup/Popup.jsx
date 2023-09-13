import React from "react";
// import classes from "./Popup.module.css";
import popup from "../../assets/popup.PNG";
import popup2 from "../../assets/popup2.PNG";
import popup3 from "../../assets/popup3.PNG";
import popup4 from "../../assets/popup4.PNG";
import Modal from "../Modal/Modal";
import Corousel from "../Corousel/Corousel";

function Popup(props) {
  const data = [{
    key : 1,
    photo : popup,
    date : 'Sep 24, 2023',
    duration : '2 Hours',
    name : 'CloudOps Mastery',
    types : ['Google Cloud Platform(GCP)','AWS','Microsoft Azure Cloud'],
  },
   {
    key : 2,
    photo : popup2,
    date : 'Sep 23, 2023',
    duration : '2 Hours',
    name : 'AngularJS Unleashed',
    types : ['Angular'],
  }, {
    key : 3,
    photo : popup3,
    date : 'Sep 17, 2023',
    duration : '2 Hours',
    name : 'Getting Started with Node.js',
    types : ['NodeJS'],
  }, {
    key : 4,
    photo : popup4,
    date : 'Sep 16, 2023',
    duration : '2 Hours',
    name : 'ReactJs Unleashed',
    types : ['ReactJS'],
  }
];

  const random = Math.floor(Math.random()*3);
  // console.log(random);

  const handleClose = () => {
    props.onClick(false);
  };

  return (
    <Modal onClick={handleClose}>
      <Corousel key={data.id} data = {data[random]} handleClose = {handleClose}/>    
    </Modal>
  );
}

export default Popup;
