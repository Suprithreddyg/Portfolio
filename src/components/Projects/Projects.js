import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import JobProtal from "../../Assets/Projects/JobPortal.png"
import Authentication from "../../Assets/Projects/Authentication.png"
import TextSummarizer from "../../Assets/Projects/TextSummarizer.png"
import roadAccident from "../../Assets/Projects/roadAccident.jpeg"
import nodes3 from "../../Assets/Projects/nodes3.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Some of my recent Works
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Authentication}
              isBlog={false}
              title="Authentication App"
              description="I have built a react native app cross-platform which works on both android and ios. 
              Here i have implemented whole authentication for the app, where the user can sing in, sign up and Users can also reset their passwords using Forgot password."
              ghLink="https://github.com/Suprithreddyg/AuthenticationExpoApp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nodes3}
              isBlog={false}
              title="Code for connecting Node, React and AWS S3 "
              description="This is a bit of code which used for multiple applications for connecting Node React and AWS for storing objects or files in AWS S3 bucket."
              ghLink="https://github.com/Suprithreddyg/Node-and-Mongo-and-S3.git"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JobProtal}
              isBlog={false}
              title="Job Portal"
              description="This is a Job Portal which was created for both job seekers and the recruiters, 
              where recruiter handle their job postings and check the details of the applicants who applied to the jobs"
              ghLink="https://github.com/suprithreddy267/JobSearch"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextSummarizer}
              isBlog={true}
              title="Text Summarization and Essay Grading"
              description="My UnderGrad Major Project where the Text Summarization was 
              built upon T5 Architecture and 
              Essay Grading was implemented using NLP Techniques. Flask Server was used to build the front-end  portal."
              demoLink="https://drive.google.com/drive/folders/1lnJL8wLI5bIlvhMYH9ZsgHvaLWZ76BPD?usp=sharing"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={roadAccident}
              isBlog={false}
              title="Machine Learning Project for Road Accident Severity Detection"
              description="Developed an ML Model for detecting the Road Accident Severity Prediction using around 39 multiple factors considering road conditions, weather conditions, vehicle conditions and many more factors."
              ghLink="https://github.com/Suprithreddyg/ML-Project-SuprithReddyGovind"              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
