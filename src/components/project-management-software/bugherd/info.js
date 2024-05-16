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
            <h3>What is BugHerd ?</h3>
            <p>
              BugHerd is a bug tracking tool and visual feedback software
              designed for website development teams. With features like pinned
              feedback on webpages, BugHerd simplifies bug reporting and
              streamlines collaboration for developers, designers, project
              managers, and clients. The tool centralizes feedback on a task
              management board, complete with metadata such as browser details
              and screen resolution. Offering integrations with popular project
              management tools and receiving acclaim from over 10,000 companies
              worldwide, BugHerd enhances efficiency, saving time and money in
              the website development process.
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
