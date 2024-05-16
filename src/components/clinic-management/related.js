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
                
                <Button variant="outline-primary">Social CRM Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Nonprofit CRM Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Home Builder CRM Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Customer Feedback Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Customer Database Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} mt-3`}>Client Onboarding Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Client Management Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Zoho Partner</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Online CRM Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Mac CRM Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Loyalty Management System</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} mt-3`}>Customer Data Platform</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Churn Prediction Software</Button>
                
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Related
