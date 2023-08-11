import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="5* on CodeChef"
            subTitle="Achieved 5* ratting on CodeChef with max rating of 2025"
            result="max rating 2025"
            des="5* coder on CodeChef and solved 250+ DSA problems on CodeChef."
          />
          <ResumeCard
            title="Specialist on CodeForces"
            subTitle="Achieved Specialist tag on CodeForces with max rating of 1427"
            result="max rating 1427"
            des="Solved 750 + DSA problems on CodeForces"
          />
          <ResumeCard
            title="JEE Main"
            subTitle="Ranked in top 3 percentile in JEE Main"
            result="97.5 percentile "
            des="Appeared for JEE in 2019"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="GATE"
            subTitle="Secured 1100 rank"
            result="Gate Score 626"
            des="Appeared for GATE in 2022 .secured 1100 rank out of 8ok participant."
          />
          <ResumeCard
            title="Data Structure and Algorithms"
            subTitle="Solved 1500+ DSA problems"
            result=""
            des="Solved 1500+ DSA problems on various coding platform like codeforces,leetcode,codechef,GFG,CSES"
          />
          <ResumeCard
            title="LeetCode"
            subTitle="Achieved Knight Badge on LeetCode."
            result="max rating 1876."
            des="Solved 650+ Question on LeetCode."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
