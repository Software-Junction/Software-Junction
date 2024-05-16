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
            <h3>What is Horizon ERP ?</h3>
            <p>
              Horizon Tech Solutions, accessible at
              www.horizontechsolutions.co.in, is a leading technology company
              with a decade of experience in ERP solutions. They offer Horizon
              ERP, the finest ready-to-use GST billing and accounting software
              for small businesses in India. This user-friendly software
              streamlines back-end processes, such as billing, invoicing, and
              inventory management, allowing businesses in distribution, retail,
              and manufacturing to focus on revenue generation. Horizon ERP
              follows best technological practices and simplifies GST return
              filing, making it an invaluable tool for small enterprises. It
              provides full control and adapts seamlessly to existing business
              management systems.
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
