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
            <h3>What is ERPNext ?</h3>
            <p>
              ERPNext is a open-source ERP solution offering versatile tools for
              businesses worldwide. With its robust features ranging from
              financial accounting to CRM and HR management, it empowers
              organizations to streamline operations efficiently. Trusted by
              over 10,000 companies globally, ERPNext ensures seamless
              integration with favorite apps and provides certified consultancy
              for successful implementations. Experience its power with a
              hassle-free 14-day trial and witness how it revolutionizes
              business management. Built on Frappe, it epitomizes simplicity,
              power, and innovation in ERP solutions.
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
