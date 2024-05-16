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
                
                <Button variant="outline-primary">Fund Accounting Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Payroll Accounting Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>QuickBooks Partner</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Online Accounting Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4`}>Nonprofit Accounting Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} mt-3`}>Lease Accounting Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Account Planning Tools</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} me-4 ms-4 mt-3`}>Accounts Receivable Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms- mt-3`}>Tally Mobile Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Accounts Payable Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} mt-3`}>Account Planning Tools</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Call Accounting Software</Button>
                <Button variant="outline-primary" className={`${styles['cat-btn1']} ms-4 mt-3`}>Crypto Accounting Software</Button>
                
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Related
