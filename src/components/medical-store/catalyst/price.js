import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({styles}) => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>Catalyst Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center price-text'>
                    <h5>Starter<br/><br/>&#8377; 7500</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Ideal for Private Practices</li>
                        <li>Unlimited Patients</li>
                        <li>3 Doctors Free</li>
                        <li>One Location Included</li>
                        <li>500 sms per month</li>
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Standard<br/><br/>&#8377; 19990</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>Ideal for clinics</li>
                    <li>Unlimited Patients</li>
                    <li>10 Doctors Free</li>
                    <li>One Location Included</li>
                    <li>1000 sms per month</li>
                    <li>One Add-on Free</li>
                    <li>2 Free Staff logins</li>
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn1']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
          
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Premium<br/><br/>&#8377; 39990</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>Ideal for hospitals</li>
                    <li>Unlimited Patients</li>
                    <li>25 Doctors Free</li>
                    <li>One Location Included</li>
                    <li>2500 sms per month</li>
                    <li>All Add-on Free</li>
                    <li>5 Free Staff logins</li>
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
