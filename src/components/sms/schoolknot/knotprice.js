import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
const Knotprice = ({styles}) => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>SchoolKnot Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['knt-price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Productivity<br/><br/>&#8377; 10</h5>
                    <p>Studen/ Month</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Events and Holidays</li>
                        <li>Fee Management</li>
                        <li>Exams and Progress Report</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['knt-price-btn']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
            
            
           
          
        </Row>
      </Container>
    </>
  )
}

export default Knotprice
