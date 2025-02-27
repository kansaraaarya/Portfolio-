
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar1.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* Left Side: About Text */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span>LET ME INTRODUCE MYSELF</span>
            </h1>
            <p className="home-about-body">
              I fell in love with programming, and I have at least learned
              something, I think… 🤷‍♂️
              <br />
              <br />
              <i>
                <b> React, Python, Node, JavaScript </b>
              </i>
              <br />
              <br />
              My field of interest is building new &nbsp;
              <i>
                <b> Web Technologies and Products </b>
              </i>
             
              
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b> Node.js </b> and
              <i>
                <b> Modern JavaScript Libraries and Frameworks </b>
              </i>
              &nbsp; like
              <i>
                <b>  React.js and Next.js </b>
              </i>.
            </p>
          </Col>

          {/* Right Side: Avatar Image */}
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar1" />
            </Tilt>
          </Col>
        </Row>

        {/* Social Media Links Section */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="text-color">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kansaraaarya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aarya-kansara/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/aarya_kansara"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
