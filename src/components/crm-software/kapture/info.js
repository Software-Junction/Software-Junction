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
            <h3>What is Kapture CRM ?</h3>
            <p>
              Elevate your customer experience to new heights with Kapture CRM –
              the forefront AI-driven platform tailored for enterprises across
              diverse industries like Retail, BFSI, Consumer Durables, and
              Travel. Boasting built-in customizations and unmatched
              flexibility, Kapture stands as the go-to CX partner for major
              businesses. Praised by over 1000 enterprises, it optimizes contact
              center efficiency and cost-effectiveness. Empowering both support
              teams and customers, Kapture features an intelligent Agent
              Assistant Bot, a comprehensive Customer 360 View, and robust
              Knowledge Management. Utilizing generative AI, it ensures
              hyper-personalized support, delivering unique resolutions based on
              individual customer profiles. With seamless automation,
              hassle-free migration, and top-tier security measures, Kapture CRM
              is the ultimate choice for businesses aiming to revolutionize
              their customer interactions.
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
