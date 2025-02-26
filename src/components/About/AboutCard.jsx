
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: "2.1", marginBottom: "20px" }}>
            Hi Everyone, I am <span className="text-color">Aarya Kansara </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I&apos;m wrapping up my final year at Gandhinagar University,
            <br />
            on the verge of earning my degree and stepping into the world of endless possibilities!
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul style={{ paddingLeft: "20px", gap: "10px" }}>
            <li className="about-activity" style={{ marginBottom: "10px" }}>
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity" style={{ marginBottom: "10px" }}>
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity" style={{ marginBottom: "10px" }}>
              <ImPointRight /> Travelling
            </li>
          </ul>

          
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
