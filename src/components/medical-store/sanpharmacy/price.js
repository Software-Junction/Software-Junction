import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({styles}) => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>San Pharmacy Billing Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center price-text'>
                    <h5>Silver<br/><br/>&#8377; 7000</h5>
                    <p>Life Time</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Dashboard</li>
                        <li>Purchase and Purchase Returns</li>
                        <li>Sales and Sales Returns</li>
                        <li>Inventory and Stock</li>
                        <li>Cash Credit Paytm Gpay etc</li>
                        <li>Customer and Supplier Outstanding</li>
                        <li>Barcode Options</li>
                        <li>Expiry List and Notifications</li>
                        <li>50+ Reports</li>
                        <li>GST Annexure for Tally</li>
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
