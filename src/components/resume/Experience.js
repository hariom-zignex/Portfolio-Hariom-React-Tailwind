import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 20XX</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Associat Software Engineer"
            subTitle="Zignex - (Jan 2023 - Present)"
            result="India"
            des="I am working here as backend developer.Developed rest APIS,Worked with front end team to for integration testing,worked on develping imports,generating excels ,grpc calls,data queries.Technology used - Spring Boot,Postresql,AWS,Docker,Rest,PostMan,Jira."
          />
          <ResumeCard
            title="Backend Developer Intern"
            subTitle="Ridecell - (April 2022 - Dec 2022) [9 months] "
            result="India"
            des="I worked here in backend and QA Automation team.Worked on creating rest APIS,writing unit test cases for APIS,Added validation to existing APIS.written testcases for QA Automation.Technology used - Django,PostgreSQ,Python,Pytest,Appium,Postman,Sumologic."
          />
          <ResumeCard
            title="Backend Developer Intern"
            subTitle="DescoverAI - (Feb-2022 - March-2022)  [2 months]"
            result="India"
            des="Developed Whatsapp using python,openAI Apis and Twillo,Developed character ai chat bot app in which user can chat with various god's character like ram,hanuman,etc using python,flask,openAI. Mode of work: Remote."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
