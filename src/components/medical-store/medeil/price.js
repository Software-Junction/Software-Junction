import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({styles}) => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>Medeil Cloud POS Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 overflow-auto rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Free<br/><br/>&#8377; 0</h5>
                    <p>Per Month</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Up to 2000 Records</li>
                        <li>Up to 500 Drug Database</li>
                        <li>5-Reports</li>
                        
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 overflow-auto rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Express<br/><br/>&#8377; 700</h5>
                    <p>Per Month</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>Basic billing/Ordering</li>
                    <li>25,000 Drug & FMCG Database</li>
                    <li>25-Reports</li>
                    <li>Expiry Management</li>
                   
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn1']}>Free Trail</Button>
                    </div>
                </div>
            </Col>

            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 overflow-auto rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Standard<br/><br/>&#8377; 1600</h5>
                    <p>Per Month</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>Multi patient billing/ordering</li>
                    <li>1,00,000 Drug & FMCG Database</li>
                    <li>75 - Business Intelligence Reports</li>
                    <li>Expiry + Banned Drug Management</li>
                    <li>Barcode solution integration</li>
                   
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn2']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
          
            
           
          
        </Row>
      </Container>
    </>
  )
}

export default Price
