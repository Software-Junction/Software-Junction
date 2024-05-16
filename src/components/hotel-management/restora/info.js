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
            <h3>What is Restora POS ?</h3>
            <p>
              Restora POS is a restaurant management software designed to
              elevate food service businesses to new heights. Offering a
              cloud-based POS system with responsive support, it seamlessly
              integrates with websites and apps, enhancing online visibility and
              brand image. With features like digitalized restaurant management,
              efficient billing, online food ordering, and cloud kitchen
              support, Restora POS ensures a smooth, user-friendly experience.
              From contactless payments to human resource management, it covers
              all facets of restaurant operations, providing a world-class
              solution tailored to various food service types.
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
