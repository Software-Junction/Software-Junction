import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";


const Related = ({styles}) => {
  return (
    <>
      <section className={`${styles['related-categories']} mt-5 pb-5`}>
        <Container>
            <Row>
                <Col lg={12}>
                    <h3>Related Categories</h3>
                </Col>
                <Col lg={12} className='mt-4'>
                
                <Button variant="outline-primary">HR Compliance Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Job Shop Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>PTO Tracking Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Relocation Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Talent Acquisition Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Whistleblowing Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} mt-3`}>Video Interview Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Applicant Tracking System</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Background Check Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Contact Tracing System</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Employee Database Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} mt-3`}>Employee Portal Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>HR Mobile Apps Software</Button>
                
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Related
