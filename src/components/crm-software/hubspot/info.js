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
            <h3>What is HubSpot CRM ?</h3>
            <p>
              HubSpot CRM offers a free solution for teams, providing essential
              tools for Sales Leaders, Salespeople, Marketers, Customer Service
              Teams, Operations Managers, and Business Owners. With a
              user-friendly interface, it enables real-time tracking and
              analysis of sales activities, offering insights into productivity
              and individual performance. The platform supports unlimited data
              and up to 1,000,000 contacts, ensuring scalability for teams of
              any size. From an award-winning meeting scheduler to an AI-driven
              email writer, HubSpot CRM streamlines processes, enhances
              collaboration, and facilitates seamless communication, making it
              an indispensable asset for businesses seeking an efficient CRM
              solution.
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
