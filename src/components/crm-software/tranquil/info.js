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
            <h3>What is Tranquil CRM ?</h3>
            <p>
              Transform your sales approach with Tranquil CRM, a specialized
              ERP-based solution designed exclusively for the dynamics of the
              Indian sales landscape. This powerful tool integrates seamlessly
              with lead management, offering a pathway to automate sales
              processes and elevate overall organizational efficiency. With a
              focus on centralizing information, Tranquil CRM becomes the nerve
              center for project details, marketing collateral, and customer
              interactions, accessible through both desktop and mobile
              applications. Realize the potential of real-time tracking,
              communication tools, and automated workflows, ensuring your team
              excels in timely follow-ups and personalized engagements. Embrace
              Tranquil CRM for its cloud-based functionality, advanced
              analytics, marketing automation, and strategic drip campaigns,
              revolutionizing your sales strategy.
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
