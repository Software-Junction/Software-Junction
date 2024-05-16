import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";

const Mminav = ({styles}) => {
  return (
    <>
       <Container>
          <Row>
            <Col lg={12}>
              <Button variant="outline-dark" className={`${styles['mmi-nav-btn']} mt-3`} href="#idinfo">
                Product Information
              </Button>
              <Button
                variant="outline-dark"
                className={`${styles['mmi-nav-btn']} ms-4 mt-3`}
                href="#idfeature"
              >
                Features
              </Button>
              <Button
                variant="outline-dark"
                className={`${styles['mmi-nav-btn']} ms-4 mt-3`}
                href="#idusp"
              >
                USP
              </Button>
              <Button
                variant="outline-dark"
                className={`${styles['mmi-nav-btn']} ms-4 mt-3`}
                href="#idreview"
              >
                Reviews
              </Button>
              {/* <Button
                variant="outline-dark"
                className={`${styles['nav-btn']} ms-4 mt-3`}
                href="#idoverview"
              >
                Overview
              </Button> */}
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default Mminav
