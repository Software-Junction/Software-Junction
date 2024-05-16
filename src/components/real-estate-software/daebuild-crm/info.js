import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Info = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is DaeBuild CRM ?</h3>
            <p>
              DaeBuild CRM is a Real Estate CRM software designed for builders,
              offering end-to-end pre-sales and post-sales automation. This
              versatile solution, accessible via web and mobile apps on both iOS
              and Android platforms, facilitates efficient lead management,
              cloud telephony integration, sales tracking, customer accounts
              management, customer interactions, document management, and
              marketing through email, SMS, and more. With over 1500 projects
              implemented across India, DaeBuild CRM ensures seamless processes
              such as auto-invoicing, legal document generation, and 3-tier
              payment reminders. The platform also includes modules for staff,
              broker, and inventory management, providing a centralized hub for
              real estate developers to enhance customer engagement and build
              lasting relationships.
            </p>
            <div
              className={`${styles["priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
            >
              <h5>Pricing Plans :</h5>
              <p>
                <Link href="#idpricing">View Detailed pricing</Link>
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <Image
              src="/images/astralss.png"
              alt="astralss"
              height="10"
              width="600"
              className={styles["info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Info;
