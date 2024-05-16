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
            <h3>What is Expand smERP ?</h3>
            <p>
              Expand smERP is a fully customizable ERP solution designed for
              manufacturers and exporters in India. With features like
              production planning, vendor management, and barcode scanning, it
              streamlines operations, reduces costs by up to 30%, and enhances
              productivity. Its mobile ERP functionality ensures efficiency on
              the go, while seamless integration with eCommerce platforms,
              marketplaces, logistics, and payment systems makes it a
              comprehensive business management tool. Trusted by clients
              nationwide, Expand smERP offers 24/7 support, multiple language
              options, and robust security measures, ensuring seamless
              operations and business growth.
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
