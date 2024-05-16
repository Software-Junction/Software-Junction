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
            <h3>What is Vtiger CRM ?</h3>
            <p>
              Vtiger CRM, a leading AI-powered solution, seamlessly integrates
              marketing, sales, and support teams through its unified platform,
              fostering collaboration and maximizing customer engagement. With
              its user-friendly interface and easy customization, Vtiger offers
              a 360-degree view of customer data, empowering businesses of all
              sizes. The affordable and adaptable CRM solution includes advanced
              features such as lead generation optimization, intelligent sales
              automation, and comprehensive customer support. Trusted by over
              300,000 companies globally, Vtiger is recognized as a proven
              leader in the industry, with accolades from Gartner and other
              review sites, ensuring data security compliance and a seamless
              customer journey.
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
