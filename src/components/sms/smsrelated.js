import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";


const Smsrelated = ({styles}) => {
  return (
    <>
      <section className={`${styles['related-categories']} mt-5 pb-5`}>
        <Container>
            <Row>
                <Col lg={12}>
                    <h3>Related Categories</h3>
                </Col>
                <Col lg={12} className='mt-4'>
                
                <Button variant="outline-primary">Learning Management Software (LMS)</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>School Management Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Assessment Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Library Management Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>OMR Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} mt-3`}>Online Exam Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>E-Learning Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Coaching Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Student Management Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Virtual Classroom Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} mt-3`}>Child Care Management Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Student Information System</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Refrence Management Software</Button>
                
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Smsrelated
