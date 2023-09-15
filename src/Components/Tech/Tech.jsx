import React from "react";
import {BallCanvas} from "../../Canvas"
import html from "../../assets/tech/html.png"
import css from "../../assets/tech/css.png"
import docker from "../../assets/tech/docker.png"
import figma from "../../assets/tech/figma.png"
import git from "../../assets/tech/git.png"
import javascript from "../../assets/tech/javascript.png"
import mongodb from "../../assets/tech/mongodb.png"
import nodejs from "../../assets/tech/nodejs.png"
import reactjs from "../../assets/tech/reactjs.png"
import redux from "../../assets/tech/redux.png"
import tailwind from "../../assets/tech/tailwind.png"
import threejs from "../../assets/tech/threejs.svg"
import typescript from "../../assets/tech/typescript.png"
import classes from "./Tech.module.css"
import { SectionWrapper } from "../../hoc";

const Tech = () => {

    const technologies = [
        {
          name: "HTML 5",
          icon: html,
        },
        {
          name: "CSS 3",
          icon: css,
        },
        {
          name: "JavaScript",
          icon: javascript,
        },
        {
          name: "TypeScript",
          icon: typescript,
        },
        {
          name: "React JS",
          icon: reactjs,
        },
        {
          name: "Redux Toolkit",
          icon: redux,
        },
        {
          name: "Tailwind CSS",
          icon: tailwind,
        },
        {
          name: "Node JS",
          icon: nodejs,
        },
        {
          name: "MongoDB",
          icon: mongodb,
        },
        {
          name: "Three JS",
          icon: threejs,
        },
        {
          name: "git",
          icon: git,
        },
        {
          name: "figma",
          icon: figma,
        },
        {
          name: "docker",
          icon: docker,
        },
      ];

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className={`w-28 h-28 ${classes.hover}`} key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech,"tech");