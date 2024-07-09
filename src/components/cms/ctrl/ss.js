import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Ss = ({styles}) => {
  return (
    <>
      <Container>
            <Row>
                <Col lg={12}>
                    <h3>ScreenShots</h3>
                </Col>
                <Col lg={4}>
                <Image
                src="/images/ctrlss.png"
                alt="ctrl"
                height="10"
                width="400"
                layout='responsive'
               
                className={styles["info-img"]}
              />
                </Col>

                {/* <Col lg={4}>
                <Image
                src="/images/eduss1.jpg"
                alt="eduss1"
                height="10"
                width="200"
                className={`${styles["info-img1"]} me-3`}
              />
              <Image
                src="/images/eduss2.jpg"
                alt="eduss2"
                height="10"
                width="200"
                className={styles["info-img1"]}
              />
                </Col>

                <Col lg={4}>
                <Image
                src="/images/eduss3.jpg"
                alt="eduss3"
                height="10"
                width="200"
                className={`${styles["info-img1"]} me-3`}
              />
              <Image
                src="/images/eduss4.jpg"
                alt="eduss4"
                height="10"
                width="200"
                className={styles["info-img1"]}
              /> 
                </Col> */}
            </Row>
        </Container>
    </>
  )
}

export default Ss
