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
            <h3>What is AgriWebb ?</h3>
            <p>
              AgriWebb is a Livestock Management Software designed to propel
              your farm towards success. This all-in-one solution simplifies
              ranch management, offering features like ranch mapping, individual
              and herd management, grazing insights, inventory management, and
              task management. With offline functionality, it ensures seamless
              operation anywhere. AgriWebb empowers farmers to enhance
              productivity through record-keeping, gain instant insights into
              profitability, and promote sustainability by providing detailed
              grazing analytics. Trusted by 16,000 farmers worldwide, it
              streamlines operations, increases team productivity, and
              contributes to the long-term success of your farming enterprise.
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
