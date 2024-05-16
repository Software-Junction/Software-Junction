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
            <h3>What is Taskworld ?</h3>
            <p>
              Taskworld is a project management platform designed for seamless
              collaboration across teams and departments, from entrepreneurs to
              enterprise-level businesses. With features like Projects & Boards,
              Tasks & Notes, and integrated Chat & Feedback, it ensures
              efficient organization and communication. The platform offers
              multiple views, GDPR compliance, remote readiness, and enhanced
              data security. Trusted by industry leaders, Taskworld facilitates
              visualizing projects, breaking them down for better organization,
              and keeping a bird's-eye view over everything. Recognized for its
              user-friendliness, it has earned awards for Best Usability and
              High Performer. The software supports asynchronous work and is
              backed by award-winning customer care.
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
