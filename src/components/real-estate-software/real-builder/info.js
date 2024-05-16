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
            <h3>What is Real Builder by Dataman ?</h3>
            <p>
              Real Builder by Dataman is a ERP solution tailored for the real
              estate industry, offering a user-friendly interface for seamless
              project management. Trusted by over 100 real estate developers,
              builders, brokers, and agents, it streamlines tasks from planning
              to reporting. With 25 years of experience, Real Builder stands out
              for its stability, security, and customization, empowering users
              with modules such as Real Estate ERP, Sales/Billing, Procurement,
              Construction, Financial Accounting, Payroll, and Inventory. The
              software's key features include improved client records, CRM
              capabilities, and advanced reporting, making it an essential tool
              for efficient and successful construction management.
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
