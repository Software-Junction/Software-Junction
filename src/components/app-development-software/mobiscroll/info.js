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
            <h3>What is Mobiscroll ?</h3>
            <p>
              Mobiscroll is a UI components suite designed for effortless
              calendaring and scheduling experiences. Offering responsive tools
              with easy setup, it stands out from the drawbacks of DIY
              approaches, open-source plugins, and complex commercial libraries.
              With features like date/time pickers, booking calendars, event
              calendars, pickers/dropdowns, and form components, Mobiscroll
              streamlines development for various frameworks like jQuery,
              Angular, React, and Vue. Its user-friendly design, backed by
              strong technical support, sets it apart as a polished,
              mobile-friendly solution trusted by over 7,700 companies for
              efficient UI development.
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
