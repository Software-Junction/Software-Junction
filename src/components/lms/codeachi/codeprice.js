import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
const Codeprice = ({styles}) => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>CodeAchi Library Management System Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['cod-price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Satrter License<br/><br/>&#8377; 9000</h5>
                    <p>Onetime</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Free Support (1 Year) Extended On renew US $19/Year only</li>
                        <li>Up to 2000 Books can be managed</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['cod-price-btn']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['cod-price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Lite License<br/><br/>&#8377; 15480</h5>
                    <p>Onetime</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>Up to 12000 Books/Items can be managed</li>
                        <li>No LAN support</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['cod-price-btn1']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['cod-price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Colossal License<br/><br/>&#8377; 30600</h5>
                    <p>Onetime</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Free Support (1 Year) Extended On renew US $39/Year only</li>
                        <li>Up to 25000 Books can be managed</li>
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

export default Codeprice
