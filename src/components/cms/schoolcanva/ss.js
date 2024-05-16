import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";

const Ss = ({styles}) => {
  return (
    <>
      <section className={`${styles['ss']} mt-5`}>
        <Container>
            <Row>
                <Col lg={12}>
                    <h3>ScreenShots</h3>
                </Col>
                <Col lg={4}>
                <Image
                src="/images/schoolss.png"
                alt="ss"
                height="10"
                width="400"
                className={styles["info-img"]}
              />
                </Col>

                <Col lg={4}>
                <Image
                src="/images/schoolss.png"
                alt="ss"
                height="10"
                width="300"
                className={styles["info-img"]}
              />
              <Image
                src="/images/schoolss.png"
                alt="ss"
                height="10"
                width="300"
                className={styles["info-img"]}
              />
                </Col>

                <Col lg={4}>
                <Image
                src="/images/schoolss.png"
                alt="ss"
                height="10"
                width="300"
                className={styles["info-img"]}
              />
              <Image
                src="/images/schoolss.png"
                alt="ss"
                height="10"
                width="300"
                className={styles["info-img"]}
              /> 
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Ss
