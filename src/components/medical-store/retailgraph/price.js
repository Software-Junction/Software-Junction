import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({styles}) => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>RetailGraph Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Composition Addition<br/><br/>&#8377; 10000</h5>
                    <p>Full License/Single User/Single</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Inbuilt All Features</li>
                        <li>Unlimited Godown Location</li>
                        <li>Online Support (As per Plan)</li>
                        <li>GST Composition Enable</li>
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>GST Addition<br/><br/>&#8377; 15000</h5>
                    <p>Full License/Single User/Single</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>Inbuilt All Features</li>
                    <li>Unlimited Godown Location</li>
                    <li>Online Support (As per Plan)</li>
                    <li>Fully GST Uploaded</li>
                    
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
