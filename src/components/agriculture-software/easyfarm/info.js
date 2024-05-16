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
            <h3>What is EasyFarm ?</h3>
            <p>
              EasyFarm is a pioneering farm and ranch management tool that has
              redefined record-keeping in agriculture since its inception in
              1993. With over 30 years of proven excellence, this software
              offers unparalleled price-performance value. It simplifies farm
              accounting through a real-time, single-entry input approach,
              eliminating the need for month-end closures or transaction
              postings. EasyFarm effortlessly manages diverse aspects of
              farming, including crops, livestock, machinery, and inventory,
              with easy-to-use screens and powerful reports. Experience the
              efficiency of EasyFarm – a comprehensive, fully supported solution
              that streamlines bookwork, saving farmers valuable time.
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
