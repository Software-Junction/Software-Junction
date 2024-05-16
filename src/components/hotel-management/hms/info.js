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
            <h3>What is The Hotel Management Software ?</h3>
            <p>
              The Hotel Management Software by Truelogics Infotech Pvt. Ltd. is
              a comprehensive and user-friendly solution designed for the
              hospitality industry. It offers a 24/7 support system, catering to
              hotels, chain outlets, guest houses, motels, resorts, sweet shops,
              bakeries, and related services. With modules for restaurant, club,
              bar, banquet, spa, salon, and more, the cloud-based ERP system
              streamlines operations, including front office management,
              reservation tracking, inventory control, and accounting. The
              software stands out with its true booking engine, CRM integration,
              and channel manager for efficient guest bookings and feedback
              management. The product ensures data security, easy configuration,
              and 24x7 technical support, making it a reliable choice for
              businesses in the hospitality sector.
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
