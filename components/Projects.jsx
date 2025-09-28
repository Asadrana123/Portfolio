import React from "react";
import chatapp from "../public/assets/projects/chatpp.png";
import social from "../public/assets/projects/social.png";
import ProjectItem from "./ProjectItem";
import ScreenSurfer from "../public/assets/projects/ScreenSurfer.png"
const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase tracking-widest text-xl text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Chat App" backgroundImg={chatapp} Url="https://github.com/Asadrana123/social-media" />
          <ProjectItem title="Social Media" backgroundImg={social} Url="https://linkup-bwsp.vercel.app/" />
          {/* <ProjectItem title="Screen Surfer" backgroundImg={ScreenSurfer} Url="https://screen-surfer.vercel.app/" /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
