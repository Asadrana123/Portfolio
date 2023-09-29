import React from "react";
import Image from "next/image";
import chatapp from "../public/assets/projects/chatpp.png";
import social from "../public/assets/projects/social.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase tracking-widest text-xl text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Chat App" backgroundImg={chatapp} Url="https://chatappfrontend-phi.vercel.app" />
          <ProjectItem title="Social Media" backgroundImg={social} Url="https://social-media-bwsp.vercel.app/" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
