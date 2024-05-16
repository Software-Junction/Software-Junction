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
            <h3>What is NetSuite CRM ?</h3>
            <p>
              NetSuite CRM is a Customer Relationship Management (CRM) solution
              by Oracle that consolidates interactions with customers, partners,
              and suppliers in one unified platform. Offering traditional CRM
              features such as sales force automation, marketing automation, and
              customer service management, NetSuite CRM goes beyond by
              seamlessly managing quotes, commissions, sales forecasts, and
              partner relationships. With a 360-degree customer view, it enables
              sales, marketing, and support teams to deliver consistent and
              relevant experiences. The platform's benefits include a single
              data source, improved sales performance, effective campaign
              management, and increased customer satisfaction. NetSuite CRM
              addresses challenges like multiple data sources and poor
              visibility into lead and sales activity, providing a streamlined
              and efficient solution for businesses of all sizes.
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
