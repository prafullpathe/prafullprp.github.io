import React from "react";
import { SiVisualstudiocode,SiSpringsecurity,SiSuse, SiPostman,SiGrafana, SiSplunk } 
from "react-icons/si";

import { DiGit,DiGoogleCloudPlatform } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai"
function Toolstack() {
  return (
    <div className="skillContainer">
      <div className="tech-icons">
        <SiSpringsecurity /><p>Sysdig</p>
      </div>
        <div className="tech-icons">
                <DiGoogleCloudPlatform/><p>DPOD</p>
            </div>

      <div className="tech-icons">
        <SiGrafana /><p>Grafana</p>
      </div>
      <div className="tech-icons">
        <SiSuse /><p>
          Suse
        </p>
      </div>
      <div className="tech-icons">
        <SiSplunk /><p>Splunk</p>
      </div>
      <div className="tech-icons">
        <SiVisualstudiocode /><p>VSCode</p>
      </div>
      <div className="tech-icons">
        <SiPostman /><p>Postman</p>
      </div>
      <div className="tech-icons">
        <AiFillGithub /><p>GitHub</p>
      </div>

      
      <div className="tech-icons">
        <DiGit /><p>Git</p>
      </div>
      </div>
 
  );
}

export default Toolstack;
