import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "Competitive Programmer.","Tech Enthusiast."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Hola Amingos 👀🙋‍♂️  </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Hariom Mewada</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        "I am a passionate Full Stack developer using Spring Boot,Django and React and machine learning enthusiast. With a strong foundation in web development and a keen eye for data, I create innovative solutions that bridge technology and user experience.I am Competitive Programmer with keen interest in Data Structure and Algorithms and various field of Computer Science Engineering."
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner