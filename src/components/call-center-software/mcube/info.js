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
            <h3>What is MCUBE ?</h3>
            <p>
              MCUBE is a cloud telephony service that revolutionizes business
              communication. It offers advanced solutions like IVR, call
              recording, and CRM integration, enhancing customer service and
              operational efficiency. With high reliability, security, and
              compliance features, MCUBE ensures seamless and cost-effective
              communication. Its user-friendly interface, zero capital
              investment, and simplified integration make it the preferred
              choice for businesses of all sizes. Trusted by leading companies
              worldwide, MCUBE empowers businesses to drive growth, improve
              efficiencies, and deliver exceptional customer experiences.
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
