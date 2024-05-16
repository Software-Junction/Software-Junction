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
            <h3>What is Contractor Foreman ?</h3>
            <p>
              Contractor Foreman is a affordable construction management
              software designed to streamline project management for contractors
              worldwide. Packed with 35+ powerful features, it offers tools for
              project management, financial tracking, people management, and
              document organization. Forbes has recognized it for its
              exceptional ease of use. With capabilities ranging from Gantt
              scheduling to real-time cost tracking, the software caters to both
              experts and novices. It boasts a user-friendly interface
              accessible on tablets, phones, and computers. Pricing starts at
              $49/month, and the platform provides a 30-day free trial.
              Contractor Foreman is lauded for its integration with popular
              tools like QuickBooks, Google Calendar, and Outlook 365, making it
              a top choice for construction professionals globally.
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
