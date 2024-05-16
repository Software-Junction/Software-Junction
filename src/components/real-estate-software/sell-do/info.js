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
            <h3>What is Sell.Do ?</h3>
            <p>
              Sell.Do is India's premier Integrated Real Estate CRM Solution,
              boasting 15+ years of industry expertise. Trusted by over 1000
              brands, including industry leaders like Casagrand, Ansal Housing,
              and Hiranandani, Sell.Do has managed 50 million+ leads and
              facilitated 450 million+ customer interactions in the real estate
              CRM industry. With USD 25 billion+ worth of real estate inventory
              sold, Sell.Do offers a fully functional system in just 7 days, ISO
              27001 compliance, and seamless integrations. Recognized with
              multiple awards, Sell.Do empowers real estate businesses through
              features like lead and inventory management, marketing automation,
              team collaboration, performance metrics, and online selling of
              properties.
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
