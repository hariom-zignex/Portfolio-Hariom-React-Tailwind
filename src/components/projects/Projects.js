import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="ShoppingLy-X"
          des=" This is a project which deals with online selling and purchasing of project .This Project was build in Django,Javascript,HTML,CSS."
          src={projectOne}
          githubLink="https://github.com/hariom575/shoppinglyxr"
          websiteLink="https://github.com/hariom575/shoppinglyx"
        />
        <ProjectsCard
          title="E-Wallet App"
          des=" This is is e-wallet app which deals with online transaction.User can send and recieve money.Technology used - SpringBoot,React,Mysql"
          src={projectTwo}
          githubLink="https://github.com/hariom575/e-wallet"
          websiteLink="https://github.com/hariom575/e-wallet"
        />
        <ProjectsCard
          title="Polling Website"
          des=" This is a polling website .User can create poll and other user can vote on the poll .Technology used - Spring Boot,React,JWTAuth,MySQL"
          src={projectThree}
          githubLink="https://github.com/hariom575/polling-APP"
          websiteLink="https://github.com/hariom575/polling-APP"
        />
      </div>
    </section>
  );
}

export default Projects