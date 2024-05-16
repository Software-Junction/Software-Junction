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
            <h3>What is Oracle NetSuite ERP ?</h3>
            <p>
              NetSuite's ERP software is a comprehensive solution designed to
              streamline and enhance your business operations. With a focus on
              efficiency and scalability, NetSuite ERP offers a unified platform
              for financial management, order management, procurement, and more.
              It empowers businesses to gain real-time insights, improve
              decision-making, and optimize resource utilization. This
              cloud-based ERP system provides a flexible and customizable
              approach to address the unique needs of various industries, making
              it an ideal choice for companies seeking to elevate their
              productivity and competitiveness. Discover how NetSuite ERP can
              help your organization achieve greater success in managing
              critical aspects of your business.
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
