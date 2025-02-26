import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { BsFileEarmarkPerson } from "react-icons/bs";

import {  pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";


pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const pdfPath = "/resume_aarya.pdf";

  const handleDownload = () => {
    window.location.href = pdfPath;
  };

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Col md={12} className="text-center">
          <div className="resume-box">
            <BsFileEarmarkPerson className="resume-icon" />
            <h1>
              <strong className="purple"> My Resume</strong>
            </h1>
            <p className="resume-description">
              Take a look at my professional experience and skills
            </p>
            <Button
              variant="primary"
              onClick={handleDownload}
              className="resume-button"
            >
              <AiOutlineDownload /> View Resume
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeNew;
