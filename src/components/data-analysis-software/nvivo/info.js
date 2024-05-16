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
            <h3>What is NVivo ?</h3>
            <p>
              NVivo is a leading qualitative data analysis software offering
              AI-powered autocoding, sentiment analysis, and user-driven machine
              learning. It facilitates rapid thematic analysis, enhances team
              collaboration with real-time sharing, and streamlines
              transcription processes. NVivo 14 empowers researchers to uncover
              richer insights, make robust conclusions, and deliver
              comprehensive findings efficiently. With features like integration
              with Citavi and free integrations for apps like SurveyMonkey,
              NVivo 14 ensures a seamless and productive research experience for
              individuals and teams across various industries.
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
