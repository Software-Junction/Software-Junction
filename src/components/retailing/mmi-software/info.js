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
            <h3>What is MMI Softwares Pvt. Ltd ?</h3>
            <p>
              MMI Softwares Pvt. Ltd. offers a software solution designed for a
              range of businesses, including departmental stores, electronic
              showrooms, garments showrooms, hardware tiles and sanitary
              showrooms, as well as any retail showroom and manufacturing units.
              This versatile software encompasses modules for website design and
              development, mobile app development, digital marketing, and social
              media marketing. With a user-friendly interface, MMI Software
              streamlines operations, making it the ideal choice for diverse
              businesses looking to enhance their online presence, manage
              inventory, and optimize overall efficiency. Take advantage of
              MMI's tailored solutions to transform your business processes and
              stay ahead in the digital landscape.
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
