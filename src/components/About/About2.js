import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={12} className="home-about-description">
                        <h1 style={{ fontSize: "3em" }}>
                            <span className="purple">“About  me” </span>
                        </h1>
                        <p className="home-about-body">
                            <span className="myabout first-about">
                            Software Engineer who graduated in CSE and had some experience
                             in web and security . Skilled in Java, Internet of Things, MongoDB,
                              Python (Programming Language), and JavaScript. Strong engineering
                               professional with a Bachelor of Engineering - BE focused in 
                               Computer Science from Rashtrasant Tukadoji Maharaj Nagpur
                                University.
                            </span>0
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About2;
