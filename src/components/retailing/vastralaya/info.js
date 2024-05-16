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
            <h3>What is Vastralaya ?</h3>
            <p>
              Vastralaya is a premier garment and apparel management software,
              offering a comprehensive CRM + ERP solution tailored for global
              retailers and wholesalers. This web-based solution seamlessly
              integrates organizational systems, ensuring error-free
              transactions and streamlined production processes. With modules
              for sales, billing, inventory, and more, Vastralaya centralizes
              operations for efficient management and increased profitability in
              the textile manufacturing sector. Its user-friendly interface,
              combined with features like customized invoice printing, barcode
              scanning, and graphical reports, makes it a top choice for
              enhancing business operations in the fashion and apparel industry.
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
