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
            <h3>What is Hipar ?</h3>
            <p>
              Hipar is a full-service hotel management software designed for
              seamless operations in the hospitality industry. With unparalleled
              expertise, Hipar offers a comprehensive suite of information
              management systems tailored for hotels, restaurants, clubs, and
              resorts. Accessible anytime, anywhere, the software ensures fast
              and reliable front desk operations, reservations, inventory
              management, and accounts. Hipar stands out for its user-friendly
              interface, 24/7 customer support, and global presence. Elevate
              your business with smarter, faster, and easier transactions,
              connecting with Hipar through email and phone for efficient hotel
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
