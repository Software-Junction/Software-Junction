import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../matrix/matrix.module.scss'

const uspData = [
  {
    title: "Transformative Academic Experience",
    content: `
      <strong>Interactive Online Lectures</strong> : Engage students
      with seamless live teaching through an integrated Zoom interface.<br /><br />
      <strong>Online Exams - MCQs & Theory</strong> : Conduct exams
      conveniently with a variety of question formats.<br /><br />
      <strong>E-Payment System for Fees</strong> : Ensure hassle-free
      fee transactions through an integrated payment gateway and
      Electronic Clearing Service (ECS).<br /><br />
      <strong>Student CRM System</strong> : Streamline interactions
      and queries with a robust Customer Relationship Management
      system.<br /><br />
      <strong>Business Operations Software</strong> : Enhance overall
      efficiency in school management operations.
    `,
  },
  {
    title: "Effortless Online Teaching",
    content: `
      <strong>Integrated Zoom</strong> : Provide a secure and
      user-friendly interface for teachers to conduct online classes
      effortlessly.<br /><br />
      <strong>Secure Communication</strong> : Enjoy enhanced
      communication for a seamless online teaching experience.
    `,
  },
  {
    title: "Seamless Fee Management",
    content: `
      <strong>Payment Gateway & ECS Integration</strong> : Enable
      transparent and efficient fee collection through online payment
      and ECS functionality.<br /><br />
      <strong>Online Fee Management</strong> : Easily manage fees and
      transactions for both educational institutions and students.
    `,
  },
  {
    title: "Efficient Assessment and Progress Tracking",
    content: `
      <strong>Online Practice Tests</strong> : Conduct practice tests
      for various competitive exams, including JEE Mains, JEE Advance,
      BITS, MHCET, and NEET patterns.<br /><br />
      <strong>Online Assignments</strong> : Assign and review tasks
      efficiently through the platform.<br /><br />
      <strong>Performance Tracking</strong> : Monitor and analyze
      student progress with intuitive reports and charts.
    `,
  },
  {
    title: "Innovative Features",
    content: `
      <strong>Video & Digital Library</strong> : Record and make
      lectures available for students to access at their convenience.<br /><br />
      <strong>Integrated SMS Gateway</strong> : Quickly and easily
      send SMS notifications to students and parents.<br /><br />
      <strong>Staff Management</strong> : Streamline staff attendance,
      payroll, and access entitlement through a secure login facility.
    `,
  },
  {
    title: "Comprehensive Support",
    content: `
      <strong>Notice Board & Real-Time Notifications</strong> : Keep
      students and professors informed with on-demand notifications.<br /><br />
      <strong>Bio-Metric Integration</strong> : Automate student and
      staff attendance with biometric device integration.
    `,
  },
  {
    title: "Trusted by Coaching Institutes",
    content: `
      The platform is trusted by coaching institutes, reflecting its
      reliability and effectiveness in the educational sector.
    `,
  },
];

const renderHTML = (rawHTML) => {
  return React.createElement("div", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Class Matrix</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                <h5>{item.title}</h5>
                <br />
                {renderHTML(
                  item.content.replace(
                    /([\w\s&-]+)(\s*:)/g,
                    '<strong>$1</strong>$2'
                  )
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Usp;
