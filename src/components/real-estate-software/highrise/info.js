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
            <h3>What is Highrise ERP ?</h3>
            <p>
              Highrise ERP is a specialized construction and real estate
              management software designed for the Indian market. This
              integrated solution covers a wide range of functions, including
              accounts and finance management, sales and CRM, project budgeting
              and management, procurement, inventory control, HR management, and
              more. It facilitates centralized document management, accurate
              project planning, and real-time data availability, making the
              organization more homogeneous. Available through licensing, annual
              subscription, or SaaS, Highrise ERP can be hosted on on-campus
              servers or in the cloud. The software streamlines processes from
              engineering and material management to contract, marketing, and
              financial accounts, enhancing efficiency and project control for
              construction companies.
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
