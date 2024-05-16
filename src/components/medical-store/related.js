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
                
                <Button variant="outline-primary">Ayurvedic Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Dental Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Doctor Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Eye Protection Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Hospice Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Hospital ERP Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} mt-3`}>Long Term Care Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Medical Imaging Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>MR Reporting Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Mental Health Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Nursing Home Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} mt-3`}>Pediatric Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Veterinary Software</Button>
                
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Related
