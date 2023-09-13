import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Header.module.css";
import frontImage from "../../assets/image1.png";

function Header() {
  return (
    <div className={classes.header}>
      <Navbar />
      <section className={classes["left-sec"]}>
        <div className={classes["header-heading"]}>
          From zero experince to your{" "}
          <span className={classes.headSpan}>Dream job</span>
        </div>
        <div className={classes["header-para"]}>
          Helping students and recent graduates start their career. Enabling
          skills development in a live environment, making students industry
          ready.
        </div>
        <button className={`${classes["kickStartBtn"]} ${classes['buttonClass']}`}>
          Kick Start Your Career <i className="ri-arrow-right-double-line"></i>
        </button>
      </section>
      <section className={classes["right-sec"]}>
        <img className={classes.frontImage} src={frontImage} alt="" />
      </section>
    </div>
  );
}

export default Header;
