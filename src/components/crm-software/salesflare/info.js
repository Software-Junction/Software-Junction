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
            <h3>What is Salesflare ?</h3>
            <p>
              Salesflare is a user-friendly CRM designed for small and
              medium-sized B2B businesses. Streamlining the sales process, it
              automates tasks like updating contact information, enriching data
              from public sources, and syncing emails, meetings, and calls. With
              features such as automated reminders, visual sales pipelines, and
              shared communications, Salesflare ensures efficient follow-ups and
              collaborative customer management. It integrates seamlessly with
              popular platforms like Gmail, Microsoft 365, LinkedIn, and Zapier,
              providing a comprehensive solution to boost sales productivity.
              Award-winning and highly praised for its intuitive and time-saving
              capabilities, Salesflare is a go-to CRM for teams looking to
              enhance their sales strategies effortlessly.
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
