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
            <h3>What is Qandle ?</h3>
            <p>
              Qandle is an all-in-one HR management software solution,
              recognized among the top 20 globally. With 40+ modules and a
              mobile-first approach, it simplifies processes from recruitment to
              analytics. The software's customizable design, quick
              implementation (within 2 weeks), and robust customer support
              ensure a seamless experience. Qandle boasts a 4.4 app rating and
              high user acceptance, making it a go-to choice for over 1,000
              clients and 5,50,000 users across 35+ industries. It prioritizes
              employee well-being, offering smart integrations, and has been
              featured in the press for its efficiency.
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
