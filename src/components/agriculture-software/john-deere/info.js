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
            <h3>What is John Deere ?</h3>
            <p>
              John Deere's Precision Agriculture Solution, AutoTrac™, is a
              groundbreaking automated vehicle guidance system, enhancing
              farming efficiency in India. Integrating advanced technology with
              power, John Deere offers a range of tractors from 28 HP to 75 HP,
              backed by a 5-year warranty. The Precision Ag system includes
              components like the Display Gen - 4, Steering ATU 300, and
              Receiver StarFire™ 6000. Complemented by the customizable John
              Deere combine harvester featuring a 100 HP engine and the
              innovative SynchroSmart feature, this solution elevates
              agricultural practices. Explore a comprehensive selection of
              tractor implements designed for diverse farming needs, ensuring
              optimal performance and productivity.
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
