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
            <h3>What is Picatic E-Ticket ?</h3>
            <p>
              Picatic E-Ticket, Inc. is a online event ticketing platform
              established in 2012. Specializing in marketing and advertising,
              the company offers eMarketing/Digital Marketing solutions with a
              focus on AdTech and E-commerce verticals. With notable investors
              such as BDC Capital, Highline VC, and Sequoia Capital, Picatic has
              successfully raised undisclosed amounts through completed seed
              deals dating back to 2012. The platform facilitates ticket sales,
              event promotion, and event space management, catering to a diverse
              range of clients in the dynamic realm of online events.
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
