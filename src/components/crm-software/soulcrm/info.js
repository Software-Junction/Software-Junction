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
            <h3>What is SoulCRM ?</h3>
            <p>
              SoulCRM is an all-in-one CRM solution tailored for Indian
              businesses, offering seamless organization, sales growth, and
              exceptional support. With features spanning marketing, sales,
              support, inventory, purchase, accounting, and reporting, SoulCRM
              stands out as a cloud-based application that streamlines processes
              and boosts efficiency. Trusted by over 1,000 businesses, it
              facilitates lead management, customizable email campaigns, and
              insightful reporting, ensuring a comprehensive approach to
              customer relationship management. Accessible from anywhere,
              SoulCRM simplifies data management, saving time and enhancing
              decision-making for businesses of all sizes. Request a free trial
              today and experience the SoulCRM way of accelerating your business
              success.
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
