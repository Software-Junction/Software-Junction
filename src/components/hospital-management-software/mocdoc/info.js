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
            <h3>What is MocDoc ?</h3>
            <p>
              MocDoc is a comprehensive Hospital Management System (HMS) and
              Professional Network that operates on a SaaS-based platform. It
              serves as an integrated solution for healthcare institutions
              globally, connecting all departments seamlessly. MocDoc ensures
              accurate reporting, quality control, and effective time
              management, contributing to enhanced productivity. Notable
              features include advanced appointment scheduling, technically
              advanced solutions, and integration capabilities with LIS, PACS,
              and EMR systems. With a decade-long presence in the healthcare
              industry, MocDoc stands out for its customization and integration
              expertise, offering tailored solutions for hospitals, clinics,
              labs, and pharmacies. Trusted for its reliable support and
              advanced functionalities, MocDoc is a cost-effective choice for
              healthcare professionals.
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
