import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import workerSrc from "pdfjs-dist/build/pdf.worker.min.js?url"; // Correct Worker Import

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const pdfPath = "/resume_aarya.pdf"; // Ensure the PDF is in the public folder

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* Download Button */}
      <Row className="justify-content-center my-3">
        <Button
          variant="primary"
          href={pdfPath}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload /> &nbsp;Download CV
        </Button>
      </Row>

      {/* PDF Viewer */}
      <Row className="justify-content-center">
        <Document file={pdfPath} onLoadError={console.error}>
          <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.7} />
        </Document>
      </Row>

      {/* Download Button (Repeated) */}
      <Row className="justify-content-center my-3">
        <Button
          variant="primary"
          href={pdfPath}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload /> &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
