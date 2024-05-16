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
            <h3>What is 4QT Real Estate ERP ?</h3>
            <p>
              4QT Real Estate ERP is a , cloud-based or on-campus software
              solution tailored for the real estate industry, encompassing plot,
              villa, and high-rise developers. Established in 2001, 4QT is a
              leading provider of web software, offering advanced features such
              as CRM, billing and sales management, construction procurement,
              project planning, human resources, financial accounting, and
              facilities management. This innovative solution, REALBOOST™,
              empowers real estate developers, builders, agents, and property
              managers to efficiently manage large-scale projects across India,
              ensuring seamless lead management, post-sales customer care, and
              end-to-end project oversight.
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
