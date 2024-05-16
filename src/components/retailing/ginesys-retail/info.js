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
            <h3>What is Ginesys Retail ERP ?</h3>
            <p>
              Ginesys Retail ERP is a and flexible cloud-based software designed
              specifically for the retail value chain. It offers a modular and
              scalable solution to cater to various business needs, including
              procurement, inventory management, sales and distribution,
              warehouse automation, accounting, custom reporting, production,
              secondary sales tracking, and audit logs. With features like
              offline and online cloud POS, business intelligence, and seamless
              integrations, Ginesys ensures a streamlined retail management
              experience. Its cloud computing advantage eliminates the need for
              infrastructure management, enhances security, and provides 24/7
              access, making it an ideal choice for business owners seeking a
              ready-to-use, minimal customization, and zero IT management ERP
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
