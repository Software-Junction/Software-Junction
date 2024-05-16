import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({styles}) => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>eVitalRx Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Tablet<br/><br/>&#8377; 3500</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Inventory Management</li>
                        <li>Digital Shortbook</li>
                        <li>Online Purchase</li>
                        <li>Unlimited CSV Upload</li>
                        <li>OTC FMCG Products Scan</li>
                        <li>Website + Mobile App support</li>
                        <li>QR Code system</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Capsule<br/><br/>&#8377; 7000</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>Multiple Staff Logins</li>
                    <li>Daily Stock Reconciliation</li>
                    <li>Send Reminders, Greetings, Offers</li>
                    <li>Expense Manager</li>
                    <li>Customer App & Store Webpage</li>
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
