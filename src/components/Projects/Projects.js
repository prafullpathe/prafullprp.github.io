import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
//  import basket from "../../Assets/Projects/bigbasket.png";



function Projects() {
  return (
    <div className="project-background activeNavlink" id="scrollProjects">
      {/* <Particle2 /> */}
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           
            {/* Home-Automamtio -------------------------------------------------------------------*/}
            <Col md={6} className="project-card">
              <ProjectCard
                isBlog={false}
                title="Home Automation"
                tool=" IOT"
                description="Home automation by iot help with nodemcu and 5v relay"
                // link="https://github.com/SachinMasai/bigbasket"
                // demoLink="https://magenta-pavlova-41c54f.netlify.app/"
              />
            </Col>


    {/* Automatic Fertilizer maker -------------------------------------------------------------------*/}
    <Col md={6} className="project-card">
              <ProjectCard
                isBlog={false}
                title="Automatic Fertilizer Maker"
                tool=" IOT"
                description="Associated with Priyadarshini Indira Gandhi College of Engineering, Hingna Road"
                // link="https://github.com/SachinMasai/bigbasket"
                // demoLink="https://magenta-pavlova-41c54f.netlify.app/"
              />
            </Col>





        

          </Row>
        </Container>
      </Container>

    </div>
  );
}

export default Projects;
