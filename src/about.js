import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
  faMediumM,
  faGoogle,
  faResearchgate,
  faOrcid
} from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
    <Jumbotron fluid id='about'>
      <Container fluid>
        <Row className='justify-content-md-center'>
          <Col md={10} sm={12} className='mt-3'>
            <Row>
              <Col md={4} xs={12}>
                <div style={{ display: 'block' }}>
                  <img className='portrait' src='./assets/armaan.jpeg' alt='Samarth Batra' />
                  <h3 className='text-center'>Armaan Dhanda</h3>
                  <h4 className='text-center'>Ex Software Developer @ AMEX</h4>
                  <ul className='social-links text-center'>
                    <li><a target='_blank' rel='noopener noreferrer' href='https://github.com/armaandhanda' title='GitHub'><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/armaan-dhanda-ucla/' title='LinkedIn'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                  </ul>
                </div>
              </Col>
              <Col md={8} xs={12}>
                <h1>About</h1>
                <p className='lead'>
  I am currently pursuing a Master of Science in Business Analytics at{' '}
  <a href='https://www.ucla.edu/' target='_blank' rel='noopener noreferrer'>
    UCLA
  </a>, with a focus on Data Science and Machine Learning. With hands-on experience from top companies like{' '}
  <a href='https://www.disney.com/' target='_blank' rel='noopener noreferrer'>
    Walt Disney
  </a> and{' '}
  <a href='https://www.americanexpress.com/' target='_blank' rel='noopener noreferrer'>
    American Express
  </a>, I have developed strong expertise in machine learning, data engineering, and predictive modeling. My technical skills span programming languages such as Python, R, and SQL, as well as tools like Tableau, PowerBI, Snowflake, and AWS.
</p>
<p className='lead'>
  I have a deep interest in using data-driven insights to solve complex business problems, optimize processes, and create impactful solutions. My work has involved deploying machine learning models for payment prediction, automating data pipelines for real-time monitoring, and designing dashboards that guide executive decision-making. I am passionate about applying machine learning and data analytics to improve business outcomes and contribute to the success of dynamic teams.
</p>
<p className='lead'>
  Outside of work and academics, I enjoy staying active through running and sports, and I am constantly seeking new challenges to grow both professionally and personally.
</p>


              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}
export default About
