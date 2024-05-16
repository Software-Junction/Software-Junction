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
            <h3>What is Zoho CRM ?</h3>
            <p>
              Zoho CRM, hailed as the world's favorite CRM and proudly made in
              India, has once again been recognized as a Visionary in the 2023
              Gartner Magic Quadrant for Sales Force Automation Platforms.
              Trusted by over 250,000 businesses globally, Zoho CRM stands out
              for its sensational yet affordable software, offering features
              like omnichannel presence, workflow automation, deep analytics,
              and extensive customization. With accolades such as winning the
              highest score in CRM Watchlist 2022, Zoho CRM is not just a CRM;
              it's a comprehensive solution for building lasting customer
              relationships, ensuring maximum productivity, and achieving
              business success.
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
