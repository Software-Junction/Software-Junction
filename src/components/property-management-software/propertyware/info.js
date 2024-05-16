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
            <h3>What is Propertyware ?</h3>
            <p>
              Propertyware is a customizable property management software
              designed for Single Family rental property management companies.
              With powerful features such as custom dashboards, unlimited
              reports, and a self-service owner portal, it offers insights
              critical for monitoring business performance and impressing owners
              and investors. The software stands out with unmatched industry
              customization, enabling the development of unique workflows and
              automatic processes to provide superior service to both property
              owners and tenants. Its open platform simplifies management
              through data access and two-way data exchange (Open API), allowing
              seamless integration with chosen software systems for increased
              efficiency. Propertyware offers a clear pricing structure with
              options to suit varying business needs.
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
