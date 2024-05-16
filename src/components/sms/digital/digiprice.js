import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
const Digiprice = ({styles}) => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>Digital School Web Solution Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['dig-price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Best Plan<br/><br/>&#8377; 20000</h5>
                    <p>Onetime</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>School Software</li>
                        <li>Dynamic Website</li>
                        <li>Attendance System with SMS</li>
                        <li>BULK SMS with filter</li>
                        <li>Result with BARCode</li>
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm'>Free Trail</Button>
                    </div>
                </div>
            </Col>
            
           
          
        </Row>
      </Container>
    </>
  )
}

export default Digiprice
