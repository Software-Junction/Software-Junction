import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
const Kobprice = ({styles}) => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>KOOB Library Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['kob-price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Web Based<br/><br/>&#8377; 20000</h5>
                    <p>per Year</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Acquisition Management</li>
                        <li>Catalog Management</li>
                        <li>Shelf Management</li>
                        <li>Serials Management</li>
                        <li>Circulation Management</li>
                        <li>Barcoding / RFID</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['kob-price-btn']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
          
            
           
          
        </Row>
      </Container>
    </>
  )
}

export default Kobprice
