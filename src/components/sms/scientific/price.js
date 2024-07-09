import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({styles}) => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>Scientific Study's School Management Software Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Cloud<br/><br/>&#8377; 15</h5>
                    <p>Student/Month</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>All features</li>
                       
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
          
            
           
          
        </Row>
      </Container>
    </>
  )
}

export default Price
