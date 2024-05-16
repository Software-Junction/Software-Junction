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
            <h3>What is Cheerze Connect ?</h3>
            <p>
              Cheerze Connect is a cutting-edge, cloud-based Hotel Management
              System designed for diverse properties worldwide, with a proven
              track record spanning 20+ countries and 750+ establishments. This
              360° smart solution enhances operational efficiency, boosts
              revenue, and streamlines customer interactions for mid-size
              hoteliers, resorts, and restaurants. Notable features include
              user-defined reporting, commission-free bookings, 24x7 support,
              and a unique pay-as-you-go model for occupied rooms. With a robust
              reputation and accolades, Cheerze Connect stands out for its
              customization, third-party integrations, and recognition by
              industry experts, making it a preferred choice for seamless hotel
              management.
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
