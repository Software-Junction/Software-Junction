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
            <h3>What is Ameyo ?</h3>
            <p>
              Ameyo is an AI-powered Cloud Customer Engagement Platform that
              offers a suite of solutions for sales, service, and collections.
              It includes enterprise contact center solutions, remote call
              center solutions, omnichannel helpdesk, video contact center,
              WhatsApp Business API, communication platform integration, and
              more. Ameyo has been recognized for its leadership in customer
              experience and contact center solutions, receiving awards such as
              an honorable mention in the Gartner Magic Quadrant and the Frost &
              Sullivan Asia Pacific CCI Leadership Award. With features like
              interactive voice response, CRM integration, auto dialer, and
              extensive resources like ebooks and case studies, Ameyo empowers
              businesses to enhance customer experience and streamline
              operations.
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
