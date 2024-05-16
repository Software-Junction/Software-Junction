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
            <h3>What is Meri Dairy ?</h3>
            <p>
              Meri Dairy is a dairy management software available for mobile and
              computer platforms. It facilitates easy and secure daily milk
              entries, allowing users to manage shifts, morning, and evening
              entries either by customer ID or name. The software offers
              customizable rate charts based on Fat and SNF, supports multiple
              languages, and ensures data security through AWS Cloud servers.
              With features like customer management, sell-purchase records, and
              a user-friendly payment register, Meri Dairy provides a complete
              solution for milk collection centers, dairy plants, and milk
              delivery services. The software is available for download on
              Windows, iOS, and Android platforms, with pricing plans catering
              to various durations and support levels.
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
