import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/praful_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <div className="resume-background activeNavlink" id="scrollResume">
      {/* <Particle2 /> */}
      <Container fluid className="resume-section">
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
          <Row className="resume">
            {/* <Col md={6} className="resume-left">
              <h3 className="resume-title">Trainee</h3>
            

             
            </Col> */}
            <Col md={6} className="resume-right">
              <h3 className="resume-title">Education</h3>
                
              <Resumecontent
                title="Bachelor of Engineering | CSE 2021 |"
                // date="2022 – Present"
                
                content={[
                  "From -Priyadarshini Indira Gandhi College of Engineering, Nagpur",
                  "Date - 2019 - 2021",
                  "CGPA - 9.3"
                ]}
              />

        
              <Resumecontent
                title="HSC"
                // date="2019 - 2022"
                content={[
                 
                  "Government School for Excellence, Chhindwara M.P",
                  "PCM 2017",
                  "80.33%"
                ]}
              />

       
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Resume;
