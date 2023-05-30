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
                                My name is Prafull and I'm a software engineer with passion for solving complex problems and creating innovative solutions.
                                I graduated in 2021 with a degree in computer science and engineering and have since gained valuable experience working with cutting edge 
                                technologies like datapower and google cloud. I also familier with java and IOT but I'm always eeager to learn new skills to expand my knowledge and stay up-to-date in
this ever-evolving field. I invite here to explore my portfolio.
                            </span>0
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About2;
