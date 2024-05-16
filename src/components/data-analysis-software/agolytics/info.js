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
            <h3>What is Algolytics ?</h3>
            <p>
              Algolytics offers solutions and products aimed at empowering
              businesses with data-driven insights. Their Algoline suite
              encompasses innovative tools like AlgoMaps for Location
              Intelligence, Algoline for real-time customer scoring, and
              Customer Intelligence for precise targeting. With a focus on
              advanced data mining, machine learning, and stream data
              processing, Algolytics provides high-end tools such as
              AdvancedMiner and Scoring.One, enabling businesses to derive
              maximum value from their data. Through case studies featuring
              reputable clients like PGE and DHL Parcel, Algolytics demonstrates
              its expertise in driving business growth and efficiency through
              innovative applications of data analytics.
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
