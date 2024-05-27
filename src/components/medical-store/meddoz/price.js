import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({styles}) => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>Meddoz Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center price-text'>
                    <h5>Basic<br/><br/>&#8377; 710</h5>
                    <p>Per Month</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Modules: Purchase, Billings with SMS & EMAIL Options</li>
                        <li>Drugs Included: 30000+</li>
                        <li>Barcode: Yes</li>
                        
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Standard<br/><br/>&#8377; 875</h5>
                    <p>Per Month</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>Modules: Purchase, Billings & Accounts with SMS & EMAIL</li>
                    <li>Drugs Included: 65000+</li>
                    <li>Barcode: Yes</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn1']}>Free Trail</Button>
                    </div>
                </div>
            </Col>

            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Professional<br/><br/>&#8377; 1042</h5>
                    <p>Per Month</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>Modules: Purchase, Billings & Accounts with SMS & EMAIL</li>
                    <li>Drugs Included: 100000+</li>
                    <li>Barcode: Yes</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn1']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
          
            
           
          
        </Row>
      </Container>
    </>
  )
}

export default Price
