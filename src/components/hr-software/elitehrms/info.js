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
            <h3>What is eliteHRMS ?</h3>
            <p>
              eliteHRMS is a proven and tested Human Resource Management System
              catering to various industries, including IT/ITES, Production, and
              Food and Beverage. This system ensures seamless HR operations by
              simplifying employee movements and maintaining a robust database.
              With a focus on user-friendly functionality, eliteHRMS stands out
              for its dynamic HR reports, alleviating the longstanding
              challenges associated with report generation. It offers a powerful
              solution for payroll and statutory compliance, particularly
              beneficial as employee numbers increase. The software includes a
              feature-rich Employee Self Service (ESS) and Manager Self Service
              (MSS), enhancing operational efficiency and providing quick
              resolutions to employee needs. Moreover, eliteHRMS is accessible
              on mobile devices, facilitating on-the-go monitoring and approvals
              for effective management services.
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
