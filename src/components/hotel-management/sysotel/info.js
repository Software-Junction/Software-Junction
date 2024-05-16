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
            <h3>What is SYSOTEL.AI ?</h3>
            <p>
              SYSOTEL.AI is India's pioneering Revenue & Yield Automation
              System, revolutionizing the hospitality sector. This innovative
              AI/ML-based platform offers a comprehensive single sign-on
              solution for hoteliers, addressing challenges and enabling a
              15-20% increase in topline, 12-18% optimization of the bottom
              line, and improved operational efficiency. With seamless
              integration, real-time data insights, and a user-friendly
              interface, SYSOTEL.AI empowers businesses to streamline
              operations, boost revenue through intelligent booking engines, and
              strategically optimize profitability through advanced solutions.
              Trusted by a diverse clientele, SYSOTEL.AI shapes the future of
              hospitality with powerful collaborations and unmatched technology
              in the realms of PMS, channel management, payment gateways, OTAs,
              and meta search.
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
