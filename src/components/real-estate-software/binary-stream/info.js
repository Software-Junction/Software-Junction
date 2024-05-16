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
            <h3>What is Binary Stream ?</h3>
            <p>
              Binary Stream offers a ERP solution, seamlessly integrated with
              Microsoft Dynamics platforms such as Dynamics 365 Finance and
              Operations, Dynamics 365 Business Central, and Dynamics GP.
              Specializing in real estate and property management, their
              software enables efficient handling of complex lease scenarios,
              tenant and landlord requirements, and diversified operations. With
              a focus on multi-entity management, the system provides
              centralized processing, robust reporting, and real-time resource
              management across various locations. Additionally, Binary Stream's
              Subscription Billing Suite automates invoice creation and
              distribution, ensuring timely payments and detailed financial
              insights. The purpose-built Dynamics GP Utilities further
              streamline document delivery and processing overhead. Contact
              Binary Stream for a cost-effective digital transformation tailored
              to your business needs.
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
