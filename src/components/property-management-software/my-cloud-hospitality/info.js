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
            <h3>What is mycloud Hospitality ?</h3>
            <p>
              mycloud Hospitality is a leading cloud-based hotel management
              software developed by Prologic First, an award-winning hospitality
              software company. With over 15 years of industry expertise,
              mycloud offers a feature-rich and customizable solution for hotels
              worldwide. This all-in-one platform automates hotel operations,
              including contactless check-in, check-out, and dining services,
              ensuring efficiency and profitability. With zero upfront fees, a
              4-hour PMS live setup, and 24/7 guaranteed support, mycloud is
              trusted by over 2000 hotels across 40+ countries. Its secure and
              GDPR-compliant system, along with a flexible cancellation policy,
              makes it a preferred choice for hoteliers seeking a seamless and
              reliable technology solution.
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
