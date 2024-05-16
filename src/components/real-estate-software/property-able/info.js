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
            <h3>What is Property Able ?</h3>
            <p>
              Property Able is a Real Estate Agency Management Software designed
              for medium and large consultants and agents. This web-based
              application streamlines day-to-day operations, offering features
              such as multi-channel inquiries, inventory management, property
              search, and customer demand-supply matching. With user-friendly
              interfaces, it enhances efficiency, allowing real estate
              professionals to boost margins, increase revenues, and ensure
              customer satisfaction. CloudSteer's Property Able revolutionizes
              the real estate business, providing a comprehensive solution for
              agents and developers to manage tasks seamlessly and maximize
              success.
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
