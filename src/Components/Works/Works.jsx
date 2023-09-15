import React from 'react'
import classes from "./Works.module.css"
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {styles} from "../../styles"
import { textVariant } from '../../utils/motion'
import step1 from "../../assets/Works/step1.svg"
import step2 from "../../assets/Works/step2.png"
import step3 from "../../assets/Works/step3.png"
import step4 from "../../assets/Works/step4.png"

const ExperienceCard = ({experience}) =>{
    return (<VerticalTimelineElement
    contentStyle={{background:"#1d1836",color:"#fff"}}
    contentArrowStyle = {{borderRight:"7px solid #232631"}}
    iconStyle={{background:experience.iconBg}}
    icon={
        <div className='flex justify-center items-center w-full h-full'>
            <img src={experience.icon} alt={experience.head} className="w-[60%] h-[60%] object-contain"/>
        </div>
    }

    >
        <div>
            <h3 className='text-white text-[24px] font-bold'>{experience.head}</h3>
            <p className='text-secondary text-[16px] font-semifold' style={{margin:0}}>{experience.para}</p>
        </div>
    </VerticalTimelineElement>
    )
}

function Works() {

    const experiences = [
        {
            head : "Sign up for InternNexus",
            para : "Enroll in InternNexus and have your activity analyzed by AI to receive relevant content recommendations.",
            step : "STEP 1",
            name : "REGISTRATION",
            icon : step1,
            iconBg: "#383E56",
        },
        {
            head : "Discover various activities",
            para : "InternNexus provides users with the opportunity to enroll in live webinars, read blogs and articles, watch videos, and receive assessment points to improve their ranking on the platform and redeem offers. The platform also offers technical support.",
            step : "STEP 2",
            name : "ACTIVITY",
            icon : step2,
            iconBg: "#E6DEDD",
        },
        {
            head : "User profile analysis system driven by AI",
            para : "Our AI-based system evaluates daily user activity and offers customized internship opportunities for immediate application.",
            step : "STEP 3",
            name : "ANALYSE",
            icon : step3,
            iconBg: "#383E56",
        },
        {
            head : "Internship Availabilities",
            para : "InternNexus tracks your activity and AI-powered analysis provides insights to potential hiring companies after applying for an internship.",
            step : "STEP 4",
            name : "INTERNSHIPS",
            icon : step4,
            iconBg: "#E6DEDD",
        }
    ]

  return (
    <div className={classes.works}>
     <motion.div variants={textVariant()} >
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2  className={ `${styles.sectionHeadText} text-center pt-20`}>How Internnexus Works</h2>
     </motion.div> 
     <div className={`mt-20 flex flex-col`}>
        <VerticalTimeline>
            {experiences.map((experience,index)=>{
                return (
                    <ExperienceCard key={index} experience={experience}/>
                )
            })}
        </VerticalTimeline>
     </div>
    </div>
  )
}

export default Works
