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
            <h3>What is Mag+ ?</h3>
            <p>
              Mag+ is a digital magazine publishing software and online platform
              that empowers businesses to effortlessly create, manage, and
              publish interactive content across various channels. With a
              user-friendly drag-and-drop editor, it enables swift and unique
              content creation, enhancing brand identity and catering to diverse
              enterprise needs. Mag+'s advanced content management system
              centralizes content control, fostering efficient teamwork and
              collaboration. The software excels in performance tracking,
              providing insightful analytics for downloads, page views, and
              more, facilitating informed decision-making. Trusted by renowned
              brands globally, Mag+ offers flexible solutions for marketing,
              sales enablement, product catalogs, corporate communications, and
              magazines, boosting productivity through streamlined workflows.
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
