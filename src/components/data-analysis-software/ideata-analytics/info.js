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
            <h3>What is Ideata Analytics ?</h3>
            <p>
              Ideata Analytics is a transformative software solution that
              empowers businesses to thrive in the digital era. By leveraging
              cutting-edge technologies such as cloud, AI, and data analytics,
              it enables companies to unlock untapped value, streamline
              processes, and drive innovation. With a focus on resilience and
              integration, Ideata Analytics helps businesses navigate industry
              complexities and achieve strategic objectives. Its comprehensive
              suite of services includes consulting, digital transformation,
              enterprise solutions, and AI capabilities, tailored to meet the
              diverse needs of modern enterprises. Positioned as catalysts for
              digital evolution, Ideata Analytics partners with leading tech
              giants like Google, AWS, and IBM to deliver exceptional results
              and craft digital success stories.
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
