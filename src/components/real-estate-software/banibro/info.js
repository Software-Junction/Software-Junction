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
            <h3>What is Banibro Solutions ?</h3>
            <p>
              Banibro Solutions offers Odoo ERP, a customizable business
              management solution. With a successful 10-year track record,
              Banibro specializes in rapid Odoo ERP implementation, providing a
              user-friendly interface, enhanced mobility, and tailored
              customization options. The software includes advanced CRM
              integration, seamless business automation modules like Odoo CRM,
              Invoicing, and Sales, empowering businesses with faster
              time-to-market, domain expertise, and excellent client
              experiences. Banibro's approach involves thorough requirements
              understanding, documentation, solutioning, communication,
              training, testing, UAT, and go-live support. Clients praise the
              product for its transformative impact on various industries.
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
