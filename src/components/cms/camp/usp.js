import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../camp/camp.module.scss'

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of CampSteer</h3>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Transformative Academic Experience</h5>
              <br />
              <p>
                <strong>Interactive Online Lectures :</strong> Engage students
                with seamless live teaching through an integrated Zoom
                interface.
                <br />
                <br />
                <strong>Online Exams - MCQs & Theory :</strong> Conduct exams
                conveniently with a variety of question formats.
                <br />
                <br />
                <strong>E-Payment System for Fees :</strong> Ensure hassle-free
                fee transactions through an integrated payment gateway and
                Electronic Clearing Service (ECS).
                <br />
                <br />
                <strong>Student CRM System :</strong> Streamline interactions
                and queries with a robust Customer Relationship Management
                system.
                <br />
                <br />
                <strong>Business Operations Software :</strong> Enhance overall
                efficiency in school management operations.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Effortless Online Teaching</h5>
              <br />
              <p>
                <strong>Integrated Zoom :</strong> Provide a secure and
                user-friendly interface for teachers to conduct online classes
                effortlessly.
                <br />
                <br />
                <strong>Secure Communication :</strong> Enjoy enhanced
                communication for a seamless online teaching experience.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Seamless Fee Management</h5>
              <br />
              <p>
                <strong>Payment Gateway & ECS Integration :</strong> Enable
                transparent and efficient fee collection through online payment
                and ECS functionality.
                <br />
                <br />
                <strong>Online Fee Management :</strong> Easily manage fees and
                transactions for both educational institutions and students.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Efficient Assessment and Progress Tracking</h5>
              <br />
              <p>
                <strong>Online Practice Tests :</strong> Conduct practice tests
                for various competitive exams, including JEE Mains, JEE Advance,
                BITS, MHCET, and NEET patterns.
                <br />
                <br />
                <strong>Online Assignments :</strong> Assign and review tasks
                efficiently through the platform.
                <br />
                <br />
                <strong>Performance Tracking :</strong> Monitor and analyze
                student progress with intuitive reports and charts.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Innovative Features</h5>
              <br />
              <p>
                <strong>Video & Digital Library :</strong> Record and make
                lectures available for students to access at their convenience.
                <br />
                <br />
                <strong>Integrated SMS Gateway :</strong> Quickly and easily
                send SMS notifications to students and parents.
                <br />
                <br />
                <strong>Staff Management :</strong> Streamline staff attendance,
                payroll, and access entitlement through a secure login facility.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Comprehensive Support</h5>
              <br />
              <p>
                <strong>Notice Board & Real-Time Notifications :</strong> Keep
                students and professors informed with on-demand notifications.
                <br />
                <br />
                <strong>Bio-Metric Integration :</strong> Automate student and
                staff attendance with biometric device integration.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Trusted by Coaching Institutes</h5>
              <br />
              <p>
                The platform is trusted by coaching institutes, reflecting its
                reliability and effectiveness in the educational sector.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Usp;
