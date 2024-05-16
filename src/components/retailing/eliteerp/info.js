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
            <h3>What is eLiteERP ?</h3>
            <p>
              eLiteERP is a windows-based ERP solution tailored for Micro and
              Small enterprises seeking a cost-effective transition from manual
              processes to an integrated business solution. With multi-location
              and multi-currency support, it facilitates global business
              operations. The user-friendly software, built on the latest
              Microsoft .NET platform, integrates modules like Financial
              Accounting, Sales and Distribution, and Procurement. eLiteERP
              ensures 360° development, control, and operational efficiency,
              offering an oomph factor for businesses to smoothly navigate and
              succeed in the dynamic modern business landscape. Trusted by
              various industries, it is a smart choice for streamlining business
              functionalities and achieving optimal performance.
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
