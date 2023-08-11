import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Information Technology"
            subTitle="Shree Govindram Seksariya Institute of technology and science Indore(M.P.) (2019 - 2023)"
            result="7.6 CGP"
            des="Studied IT related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, Compiler Design etc."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Sahara Public School Kalapipal (M.P.) (2016 - 2018)"
            result="89.80%"
            des="Studied in this school from 11th to 12th std. HSC Subjects: PCM, English,Hindi, Physical Education. "
          />
          <ResumeCard
            title="Primary & Secondary School Education"
            subTitle="St. Alphonsa High School Akodia (M.P.) (2005 - 2016)"
            result="94.50% "
            des="Studied in this school from Nursery to 10th std. SSC Subjects: English, Hindi, Maths, Science, Social Sciences."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Coding Courses</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Web Development Tutorial By GeekyS  hows"
            subTitle="Youtube "
            result="Online"
            des="Learnt Django ,JavaScript stack and made various project using the skills in this course. Check out my Github for project info !"
          />
          <ResumeCard
            title=" Data Structure And Algorithms"
            subTitle="Udemey"
            result="Online"
            des="Learnt and practiced various Data Structures and Algorithms."
          />
          <ResumeCard
            title="Spring Boot"
            subTitle="GeeksForGeeks"
            result="Online"
            des=" Learnt how to create REST APIS ,CRUD Operation,DBMS concepts. "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education