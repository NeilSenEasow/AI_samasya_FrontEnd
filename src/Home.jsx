import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";  // Assuming the NavBar component is available

function HomePage() {
  return (
    <div>
      <NavBar />
      {/* Hero Section */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "100px 0" }}>
        <Container className="text-center">
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Welcome to HearMe</h1>
          <p style={{ fontSize: "1.25rem", marginBottom: "40px" }}>
            Empowering communication through technology. We provide audio and sign language translation solutions.
          </p>
          <Button variant="primary" size="lg" href="#services">
            Explore Our Services
          </Button>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <Container>
          <Row>
            <Col md={6}>
              <h2>About HearMe</h2>
              <p>
                HearMe is dedicated to bridging the communication gap for the hearing impaired. We use cutting-edge
                technologies to help people with sign language and audio-based communication challenges.
              </p>
            </Col>
            <Col md={6}>
              <img src="https://via.placeholder.com/500" alt="About Us" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: "60px 0", backgroundColor: "#f1f1f1" }}>
        <Container>
          <h2 className="text-center" style={{ marginBottom: "40px" }}>Our Services</h2>
          <Row>
            <Col md={4}>
              <div className="service-box" style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "10px" }}>
                <h4>Sign Language Detection</h4>
                <p>Real-time detection and translation of sign language to text and audio.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-box" style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "10px" }}>
                <h4>PDF Summarization</h4>
                <p>Upload documents and get an AI-generated summary in seconds.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-box" style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "10px" }}>
                <h4>Speech-to-Text</h4>
                <p>Convert spoken words to text with high accuracy in real-time.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section style={{ padding: "60px 0", backgroundColor: "#007bff", color: "#fff" }}>
        <Container className="text-center">
          <h2 style={{ marginBottom: "20px" }}>Join Us Today</h2>
          <p style={{ marginBottom: "30px" }}>
            Sign up now and start benefiting from our inclusive communication technology.
          </p>
          <Button variant="light" size="lg" href="#signup">
            Get Started
          </Button>
        </Container>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#343a40", color: "#fff", padding: "40px 0" }}>
        <Container className="text-center">
          <p>&copy; 2024 HearMe. All Rights Reserved.</p>
          <p>
            <a href="#terms" style={{ color: "#fff", marginRight: "10px" }}>Terms of Service</a> | 
            <a href="#privacy" style={{ color: "#fff", marginLeft: "10px" }}>Privacy Policy</a>
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default HomePage;
