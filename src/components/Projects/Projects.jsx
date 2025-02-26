
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import image from "../../Assets/Projects/img1.jpg";
import image1 from "../../Assets/Projects/img2.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I have worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Prediction - Diabetes"
              description="A smart prediction system for Diabetes and Blood Pressure analysis."
              ghLink="https://github.com/kansaraaarya/prediction-Diabetes-blood-pressure-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image1}
              isBlog={false}
              title="Fashion Fusion"
              description="A fashion customization platform where users can choose patterns, colors, and designs."
              ghLink="https://github.com/kansaraaarya/"
              // Replace with actual GitHub repo
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
