import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Eduusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of EDUMAAT</h3>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["edu-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Tailored Customization</h5>
              <br />
              <p>
                <strong>USP : </strong>"Your Institution, Your Rules"
              </p>
              <p>
                <strong>Description : </strong> Edumaat offers unparalleled
                customization, ensuring that the software adapts to the unique
                needs of each institution. From functionalities to modules, it's
                a solution designed to fit, not force.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["edu-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Global Accessibility</h5>
              <br />
              <p>
                <strong>USP : </strong>"Speak Your Language"
              </p>
              <p>
                <strong>Description : </strong> With support for
                <span style={{ color: "#FC5185 " }}>
                  <strong> 100+ languages</strong>
                </span>
                , Edumaat is not bound by language barriers. It allows users to
                interact in their local language, making it truly accessible and
                user-friendly across diverse regions.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["edu-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Top-Notch AWS Hosting</h5><br/>
              <p>
                <strong>USP : </strong>"Powering Institutions with AWS
                Precision"
              </p>
              <p>
                <strong>Description : </strong>Edumaat chooses Amazon Web
                Service (AWS) for hosting, ensuring institutions leverage one of
                the world's fastest and most reliable server infrastructures,
                offering unparalleled speed and performance.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["edu-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Centralized Management Hub</h5><br/>
              <p>
                <strong>USP : </strong>"All-in-One Institute Management"
              </p>
              <p>
                <strong>Description : </strong>Edumaat simplifies management
                processes by providing a centralized hub. It's the one-stop
                solution for accreditation, budgeting, timely reminders, and
                customizable reports, enabling faster and informed
                decision-making.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["edu-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Engaging Faculty Experience</h5><br/>
              <p>
                <strong>USP : </strong>"Empower, Collaborate, Motivate"
              </p>
              <p>
                <strong>Description : </strong>Edumaat prioritizes faculty
                engagement. From dynamic logins based on roles to performance
                dashboards and collaborative features, it enhances the overall
                faculty experience, making administrative tasks simpler and more
                engaging.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["edu-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Empowering Students and Parents</h5><br/>
              <p>
                <strong>USP : </strong>"Always Connected, Always Updated"
              </p>
              <p>
                <strong>Description : </strong>Edumaat's student and parent
                features empower them with tools for online fee payments, grade
                book downloads, performance tracking, and constant
                communication. It ensures a seamless connection between the
                institution and its stakeholders.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["edu-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Risk-Free Exploration</h5><br/>
              <p>
                <strong>USP : </strong>"Try Before You Decide"
              </p>
              <p>
                <strong>Description : </strong>Edumaat offers a
                one-month free trial, allowing institutions to explore its
                capabilities without financial commitment. It's a testament to
                confidence in the product's effectiveness and an invitation to
                experience its features firsthand.
              </p>
            </div>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export default Eduusp;
