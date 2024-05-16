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
            <h3>What is Frontdesk Anywhere ?</h3>
            <p>
              Frontdesk Anywhere is an award-winning, cloud-based Hotel
              Management Software that revolutionizes the hospitality industry.
              It offers a comprehensive suite of solutions, including a Property
              Management System (PMS), Channel Manager, Booking Engine, Revenue
              Management, and Payment Processing. This user-friendly platform
              allows hoteliers to effortlessly manage operations, customize
              profiles, implement powerful rate management, and engage with
              guests through personalized messages. With a mobile-friendly
              booking engine and connectivity to over 350 major distribution
              channels, Frontdesk Anywhere empowers hotels to reduce costs,
              streamline operations, and increase revenue, making it a trusted
              choice for hotels in over 35 countries.
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
