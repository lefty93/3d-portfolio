import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { styles } from "../styles"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { link, github } from '../assets'


const ProjectCard = ({ index, name, description, tags, image, source_code_link, webpage_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt className="sm:w-[360px] w-full p-5 shadow-card bg-tertiary rounded-2xl" options={{ max: 45, scale: 1, speed: 450 }}>

        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="object-cover w-full h-full rounded-2xl" />
        </div>

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div onClick={() => window.open(source_code_link, "_blank")} className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient">
            <img src={github} alt="github" className="object-contain w-1/2 h-1/2" />
          </div>
          <div onClick={() => window.open(webpage_link, "_blank")} className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient">
            <img src={link} alt="link" className="object-contain w-1/2 h-1/2" />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="font-bold text-white text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <p className={`text-[14px] ${tag.color}`} key={tag.name}>#{tag.name}</p>
          ))}
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>MY WORK</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="flex flex-wrap mt-20 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")