import React from 'react'
import Title from '../layouts/Title'
import { codeChefImg, codeForcesImg, LeetCodeImg} from "../../assets/index";
import CodingCard from './CodingCard';
import { SiCodeforces,SiCodechef,SiLeetcode } from "react-icons/si";

const Codings = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my Competetive Coding Profiles"
          des="My Coding Profiles"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <CodingCard
          title="Codeforces"
          des="I am Specialist on CodeForces with max ratting of 1426. I have solved around 800 problems on this platform."
          src={codeForcesImg}
          coding_profile_link="https://codeforces.com/profile/Harry__9522"
          icon={<SiCodeforces/>}
        />
        <CodingCard
          title="LeetCode"
          des="I am Knight on LeetCode with max ratting of 1860 . I have solved around 600 problems on this platform."
          src={LeetCodeImg}
          coding_profile_link="https://leetcode.com/mewadahariom2000/"
          icon={<SiLeetcode/>}
        />
        <CodingCard
          title="CodeChef"
          des="I am 5* Coder on CodeChef. I have solved around 200+ problems on this platform."
          src={codeChefImg}
          coding_profile_link="https://www.codechef.com/users/harry____9522"
          icon={<SiCodechef/>}
        />
      </div>
    </section>
  );
}

export default Codings