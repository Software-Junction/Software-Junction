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
            <h3>What is Xperts Hotel ?</h3>
            <p>
              Xperts Hotel is a Hotel Management software designed and
              implemented by Experts IN Solutions. This world-class software
              offers modules for Reception/Front Desk, Housekeeping/Hospitality,
              Restaurant/Room Service, and Back Office/Inventory, seamlessly
              integrated to meet diverse hospitality needs. Tailored for hotels,
              restaurants, resorts, and serviced apartments, Xperts Hotel
              ensures efficient operations with features like room availability
              tracking, billing, inventory management, and role-based security.
              Its user-friendly interface and external device integration,
              coupled with services like software consulting and application
              maintenance, make Xperts Hotel a powerful solution for businesses
              in the competitive hospitality industry
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
