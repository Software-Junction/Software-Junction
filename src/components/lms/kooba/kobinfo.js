import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Kobinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is KOOB Library ?</h3>
            <p>
              KOOBA™ is an all-encompassing web-based Library Automation
              Software featuring Barcode and RFID capabilities. It ensures
              real-time access to comprehensive book and member data, seamlessly
              syncing with Android and iOS mobile apps. With functionalities
              such as multi-location library management, hierarchy controls, and
              streamlined membership processes, KOOBA™ simplifies library
              operations. Its robust features include efficient book
              acquisition, barcode-enabled issue/return, and management tools
              for inactive members and refunds. Offering 100% security and
              real-time accessibility, KOOBA™ supports mobile library
              operations, making it a reliable choice for efficient and
              on-the-go library management.
            </p>
            <div
              className={`${styles["kob-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["kob-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Kobinfo;
