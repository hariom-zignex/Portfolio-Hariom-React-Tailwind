import React from 'react'
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiPostgresql,SiGithub,SiGmail,SiSpringboot,SiDjango } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://github.com/hariom575" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
            </span>
            <span className="bannerIcon">
            <a href="mailto:mewadahariom2000gmail.com">
              <SiGmail /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/hariom-mewada-799207193/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST WEB STACK
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiPostgresql />
            </span>
            <span className="bannerIcon">
              <SiSpringboot />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiDjango />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media