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
            <h3>What is EventPro ?</h3>
            <p>
              EventPro is a versatile event management software designed to meet
              the diverse needs of professionals in various industries.
              Seamlessly integrating modules for venue booking, event planning,
              catering management, and more, EventPro offers a customizable
              solution to create an all-in-one system tailored to individual
              organizational requirements. With powerful features such as
              booking wizards, shared calendars, catering and beverage
              management, staffing, CRM, and online booking capabilities,
              EventPro streamlines the entire event lifecycle, from initial
              planning to post-event analysis. Whether deployed on-premises or
              in the cloud, EventPro provides a flexible solution for optimizing
              venue use, enhancing services, and adding value to events,
              ultimately saving time and boosting productivity.
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
