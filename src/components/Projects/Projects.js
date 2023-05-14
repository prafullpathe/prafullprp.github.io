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
           
            {/*covid-19*/}
            <Col md={6} className="project-card">
              <ProjectCard
                isBlog={false}
                title=" Detection of COVID 19 by studying chest x-ray images in keras"
                tool=" CNN, keras, python, js"
                description=" detect COVID-19 in by using X-ray image dataset using Keras, TensorFlow, and Deep Learning."
                // link="https://github.com/SachinMasai/bigbasket"
                // demoLink="https://magenta-pavlova-41c54f.netlify.app/"
              />
            </Col>


    {/* IOT*/}
    <Col md={6} className="project-card">
              <ProjectCard
                isBlog={false}
                title=" IOT based home automation"
                tool=" IOT"
                description="Automation of all the electric board and switches with the help of IOT.Used devices are Node mcu Esp8266, 5V relay etc"
                // link="https://github.com/SachinMasai/bigbasket"
                // demoLink="https://magenta-pavlova-41c54f.netlify.app/"
              />
            </Col>

 {/*DP*/}
    <Col md={6} className="project-card">
              <ProjectCard
                isBlog={false}
                title=" DataPower OpenShift Container platform"
                tool="openshift, kubernetes"
                description="Deployed the DataPower middleware to work in redhat OpenShift container platform"
                // link="https://github.com/SachinMasai/bigbasket"
                // demoLink="https://magenta-pavlova-41c54f.netlify.app/"
              />
            </Col>
{/fertilizer*/}
    <Col md={6} className="project-card">
              <ProjectCard
                isBlog={false}
                title=" Automatic fertilizer maker"
                tool="IOT"
                description="A low-cost automatic fertilizer maker from waste. Created using IOT (node mcu, relay and components),worked on solar light and energy efficient"
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
