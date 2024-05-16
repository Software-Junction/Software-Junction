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
            <h3>What is Macadamia Management System ?</h3>
            <p>
              Macadamia Management System is a specialized software designed for
              efficient macadamia farming. Tailored for Windows (compatible with
              Parallels for Mac), it seamlessly integrates with an innovative
              in-field weighing device, Weigh Track, to automate data collection
              of harvested nuts. This comprehensive system analyzes block
              records, soil analyses, and weather data, providing insightful
              production and quality graphs. With features like detailed field
              information, soil analysis, inventory management, and
              compatibility with Global GAP standards, it ensures accurate
              recording of farming operations. Trusted by farmers and
              consultants for over 32 years, it stands out as an easy-to-use,
              up-to-date solution with seamless integration to streamline
              agricultural administration.
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
