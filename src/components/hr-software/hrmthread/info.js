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
            <h3>What is HRMThread ?</h3>
            <p>
              HRMThread is a web-based Payroll and HR software solution for
              businesses in India, relied upon by over 5000 users. Offering
              unparalleled convenience, it simplifies complex tasks, providing
              swift access to payroll and employee databases. With optimized
              features like Mobile App accessibility, robust Payroll management,
              comprehensive Time & Attendance tracking, Leave management,
              efficient Claim & Reimbursement monitoring, and simplified TDS &
              Tax Planner, HRMThread stands out. It introduces a progressive
              payslip delivery system on WhatsApp, emphasizing transparency,
              efficiency, and eco-friendly practices. Recognized by the World
              HRD Congress, HRMThread is the preferred choice for businesses
              seeking streamlined HR and payroll operations.
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
