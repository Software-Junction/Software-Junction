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
            <h3>What is Visual Chemist Store ?</h3>
            <p>
              Visual Chemist Store is a software solution designed to meet the
              specific needs of over 20,000 retailers in India and abroad. This
              user-friendly system offers features such as accounting, billing,
              inventory management, order processing, barcoding, and more. With
              a master database for products and suppliers, easy order
              processing, and mobile app integration, Retail108 streamlines
              operations and enhances customer engagement. The software also
              includes modules for commission management, CRM, production
              planning, GST reporting, expiry management, and detailed
              accounting, providing a complete solution for retail businesses in
              the pharmaceutical and medical sectors.
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
