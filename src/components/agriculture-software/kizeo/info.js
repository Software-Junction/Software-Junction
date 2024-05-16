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
            <h3>What is Kizeo Forms ?</h3>
            <p>
              Kizeo Forms is a mobile forms application designed to streamline
              and automate various activities across industries. Comprising an
              intuitive drag-and-drop online form builder and a mobile
              application, it empowers users to transform paper documents into
              digital equivalents effortlessly. With features like custom
              workflows, data sharing, and seamless integration, Kizeo Forms
              facilitates efficient data collection, automates processes, and
              enhances overall productivity. The mobile application enables
              users to create, customize, and act on forms, offering benefits
              such as time savings, increased efficiency, and improved
              responsiveness. Trusted by professionals globally, it caters to
              diverse sectors, offering industry-specific solutions for tasks
              ranging from audits and security reports to timesheets and
              invoices.
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
