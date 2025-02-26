import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import PropTypes from "prop-types";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-card-img-container">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <div className="project-card-overlay"></div>
      </div>
      <Card.Body>
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text className="project-card-description">
          {props.description}
        </Card.Text>
        <div className="project-card-buttons">
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
            className="project-card-btn"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {/* {/* {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="project-card-btn"
            // > */}
            {/* //   <CgWebsite /> &nbsp;
            //   {"Demo"}
            // </Button> */}
          
        </div>
      </Card.Body>
    </Card>
  );
}

ProjectCards.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
  isBlog: PropTypes.bool,
  // demoLink: PropTypes.string,
};

export default ProjectCards;
