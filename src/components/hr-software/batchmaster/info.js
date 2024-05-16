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
            <h3>What is BatchMaster HERD ?</h3>
            <p>
              BatchMaster HERD is a HRMS and Payroll Management Software
              designed to automate and optimize various HR processes. From
              payroll and attendance to performance appraisals and recruitment,
              HERD offers a 360-degree solution for diverse industries. It
              enables efficient human resources management by saving employee
              information, automating payroll processing, setting attendance
              policies, and conducting performance appraisals. With easy
              integration options, cloud availability, and a user-friendly
              interface, HERD facilitates remote access for employees, fostering
              collaboration and reducing costs. The software empowers
              organizations with in-depth analytics for data-driven insights,
              enhancing overall productivity and decision-making in the
              workplace.
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
