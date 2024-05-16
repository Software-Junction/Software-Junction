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
            <h3>What is RetailGraph ?</h3>
            <p>
              SwilERP, formerly known as RetailGraph, is a comprehensive
              business management software that seamlessly combines the trusted
              features of RetailGraph with new enhancements. This rebranded
              solution offers desktop applications such as SwilERP and Unisolve
              software, along with mobile apps like SwilPOS, SwilSORT,
              SwilDISPATCH, and SwilMart Ecomm. Additionally, web-based
              applications include Swil Cloud-based software and Swil Admin.
              SwilERP ensures a smooth transition for valued customers,
              providing a range of tools for various business needs, from
              point-of-sale solutions to cloud-based management, supported by a
              dedicated customer support system and a wealth of resources
              through its website.
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
