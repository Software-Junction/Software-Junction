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
            <h3>What is MyHotelLine ?</h3>
            <p>
              Vyapar is an advanced accounting software tailored for the
              hospitality industry, offering a comprehensive solution for
              billing, estimates, invoicing, and financial management.
              Specifically designed to address challenges faced by the
              hospitality sector, Vyapar streamlines accounting processes by
              managing cash flow, tracking income and expenses, and providing
              real-time financial analysis. With features such as expense
              management, inventory control, fixed asset management, and
              accounts receivable/payable, Vyapar ensures accurate and efficient
              financial record-keeping for hotel businesses. The software's
              user-friendly interface, automated functions, and real-time
              accessibility make it an essential tool for optimizing costs,
              managing records, and making strategic decisions in the dynamic
              hospitality environment.
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
