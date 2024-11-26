import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
    <Jumbotron
      fluid
      id="about"
      style={{
        backgroundColor: '#f8f9fa',
        padding: '50px 20px',
        marginTop: '100px', // Adds space between the header and About section
      }}
    >
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col
            md={10}
            sm={12}
            className="mt-3"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Col
              md={4}
              xs={12}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <img
                className="portrait"
                src="./assets/armaan.jpeg"
                alt="Armaan Dhanda"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  marginBottom: '15px',
                }}
              />
              <h3 style={{ textAlign: 'center', marginBottom: '5px' }}>
                Armaan Dhanda
              </h3>
              <h4 style={{ textAlign: 'center', color: '#6c757d' }}>
                Ex Software Developer @ AMEX
              </h4>
              <ul
                className="social-links"
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: 0,
                  marginTop: '10px',
                  gap: '20px', // Space between icons
                }}
              >
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/armaandhanda"
                    title="GitHub"
                    style={{ fontSize: '2rem', color: '#333' }} // Larger icon
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/armaan-dhanda-ucla/"
                    title="LinkedIn"
                    style={{ fontSize: '2rem', color: '#0077b5' }} // Larger icon with LinkedIn color
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={8} xs={12}>
              <h1>About</h1>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>
                I am a current graduate of Master of Science in Business Analytics from{' '}
                <a
                  href="https://www.ucla.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#007bff' }}
                >
                  UCLA
                </a>, with a focus on Data Science and Machine Learning. With hands-on experience from top companies like{' '}
                <a
                  href="https://www.disney.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#007bff' }}
                >
                  Walt Disney
                </a> and{' '}
                <a
                  href="https://www.americanexpress.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#007bff' }}
                >
                  American Express
                </a>, I have developed strong expertise in machine learning, data engineering, and predictive modeling. My technical skills span programming languages such as Python, R, and SQL, as well as tools like Tableau, PowerBI, Snowflake, and AWS.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>
                I have a deep interest in using data-driven insights to solve complex business problems, optimize processes, and create impactful solutions. My work has involved deploying machine learning models for payment prediction, automating data pipelines for real-time monitoring, and designing dashboards that guide executive decision-making. I am passionate about applying machine learning and data analytics to improve business outcomes and contribute to the success of dynamic teams.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>
                Outside of work and academics, I enjoy staying active through running and sports, and I am constantly seeking new challenges to grow both professionally and personally.
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default About
