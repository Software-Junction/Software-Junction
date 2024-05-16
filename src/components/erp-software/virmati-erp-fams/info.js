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
            <h3>What is Viramati's ERP-FAMS ?</h3>
            <p>
              Viramati's ERP-FAMS, a cutting-edge Enterprise Resource Planning
              solution designed to streamline and enhance your business
              processes. With a user-friendly interface and robust
              functionality, ERP-FAMS empowers organizations to manage finances,
              automate workflows, and optimize resource utilization seamlessly.
              Tailored to meet diverse industry needs, this software offers
              real-time insights, fostering informed decision-making. Unlock
              efficiency and elevate your business operations with Viramati's
              ERP-FAMS, where innovation meets reliability.
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
