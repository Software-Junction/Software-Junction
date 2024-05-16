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
            <h3>What is AGRIVI's Farm Management Software ?</h3>
            <p>
              AGRIVI's Farm Management Software is a digital agriculture
              solution empowering growers and stakeholders across the agrifood
              value chain. It offers data-driven insights, real-time analytics,
              and decision-making support for farms of varying sizes, enterprise
              farms, cooperatives, and food & beverage companies. The platform
              includes modules like Farm Insights for small-to-mid sized
              production, Farm Enterprise for large operations, and Agriculture
              Supply Chain for vertically integrated management. Trusted by
              Fortune 500 companies, AGRIVI's software facilitates
              sustainability goals, enhances productivity, and optimizes
              resource use, making it a crucial tool for informed and efficient
              farming decisions.
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
