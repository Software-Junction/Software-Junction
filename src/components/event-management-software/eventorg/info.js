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
            <h3>What is EventOrg ?</h3>
            <p>
              EventOrg is a event management software that streamlines the
              organizing process for any event, offering a user-friendly
              platform without requiring development efforts. Its enchanting
              features include promotional tools, paperless operations for
              eco-conscious organizers, and a multi-event app for customized
              branding. The platform accommodates various event types, equipped
              with flexible modules, an easy-to-use CMS, and features delighting
              attendees, such as an extensive agenda, virtual conference
              capabilities, live Q&A sessions, digital badges, and interactive
              engagement tools. EventOrg ensures efficient event management with
              its comprehensive suite of features, making planning and execution
              seamless for organizers worldwide.
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
