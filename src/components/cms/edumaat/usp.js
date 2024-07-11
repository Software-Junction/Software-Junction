import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../edumaat/edumaat.module.scss";

const uspData = [
  {
    title: "Tailored Customization",
    content: `
      <strong>USP : </strong>"Your Institution, Your Rules"
      <br /><br />
      <strong>Description : </strong> Edumaat offers unparalleled
      customization, ensuring that the software adapts to the unique
      needs of each institution. From functionalities to modules, it's
      a solution designed to fit, not force.
    `
  },
  {
    title: "Global Accessibility",
    content: `
      <strong>USP : </strong>"Speak Your Language"
      <br /><br />
      <strong>Description : </strong> With support for
      <span style=\"color:#f95738 ;\"><strong> 100+</strong></span>
      languages, Edumaat is not bound by language barriers. It allows users to
      interact in their local language, making it truly accessible and
      user-friendly across diverse regions.
    `
  },
  {
    title: "Top-Notch AWS Hosting",
    content: `
      <strong>USP : </strong>"Powering Institutions with AWS Precision"
      <br /><br />
      <strong>Description : </strong>Edumaat chooses Amazon Web
      Service (AWS) for hosting, ensuring institutions leverage one of
      the world's fastest and most reliable server infrastructures,
      offering unparalleled speed and performance.
    `
  },
  {
    title: "Centralized Management Hub",
    content: `
      <strong>USP : </strong>"All-in-One Institute Management"
      <br /><br />
      <strong>Description : </strong>Edumaat simplifies management
      processes by providing a centralized hub. It's the one-stop
      solution for accreditation, budgeting, timely reminders, and
      customizable reports, enabling faster and informed
      decision-making.
    `
  },
  {
    title: "Engaging Faculty Experience",
    content: `
      <strong>USP : </strong>"Empower, Collaborate, Motivate"
      <br /><br />
      <strong>Description : </strong>Edumaat prioritizes faculty
      engagement. From dynamic logins based on roles to performance
      dashboards and collaborative features, it enhances the overall
      faculty experience, making administrative tasks simpler and more
      engaging.
    `
  },
  {
    title: "Empowering Students and Parents",
    content: `
      <strong>USP : </strong>"Always Connected, Always Updated"
      <br /><br />
      <strong>Description : </strong>Edumaat's student and parent
      features empower them with tools for online fee payments, grade
      book downloads, performance tracking, and constant
      communication. It ensures a seamless connection between the
      institution and its stakeholders.
    `
  },
  {
    title: "Risk-Free Exploration",
    content: `
      <strong>USP : </strong>"Try Before You Decide"
      <br /><br />
      <strong>Description : </strong>Edumaat offers a
      one-month free trial, allowing institutions to explore its
      capabilities without financial commitment. It's a testament to
      confidence in the product's effectiveness and an invitation to
      experience its features firsthand.
    `
  }
];

const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of EDUMAAT</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                <h5>{item.title}</h5>
                <br />
                {renderHTML(item.content)}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Usp;
