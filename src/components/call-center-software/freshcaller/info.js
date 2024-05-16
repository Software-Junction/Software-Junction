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
            <h3>What is Freshcaller ?</h3>
            <p>
              Freshcaller is a cloud-based contact center solution designed to
              streamline customer interactions through intuitive voice AI
              capabilities. With features like advanced inbound routing,
              AI-powered voice bots, and seamless integration with Freshdesk, it
              enables businesses to provide exceptional customer service
              effortlessly. Its scalable and remote-ready platform empowers
              teams to collaborate effectively, monitor performance in
              real-time, and optimize operations for maximum efficiency. By
              offering personalized voice interactions, call recordings, and
              omnichannel service options, Freshcaller helps businesses enhance
              customer satisfaction and drive growth.
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
