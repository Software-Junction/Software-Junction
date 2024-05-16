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
            <h3>What is KWHotel ?</h3>
            <p>
              KWHotel, an innovative hotel management solution designed to
              elevate your hospitality business to new heights. Trusted by over
              5,000 hoteliers across 160 countries and available in 21
              languages, KWHotel goes beyond traditional management software.
              With both desktop and web-based options, it offers features like
              reservation handling, pricing policy management, and invoicing.
              From rental management for apartments to a camping module with
              graphical representation, KWHotel ensures seamless operations.
              Stay ahead with online booking engines, channel management, and
              integrations like credit card services and SMS marketing.
              Experience a comprehensive tool tailored for the modern hotelier,
              committed to optimizing efficiency, reducing costs, and adapting
              to industry challenges. Take advantage of a free hotel audit,
              offering over 60 professional tips to navigate the complexities of
              the pandemic landscape. Welcome to a new era of hotel management
              with KWHotel—where innovation meets hospitality.
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
