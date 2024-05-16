import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
const Eduprice = ({styles}) => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>EDUMAAT Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['edu-price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Daimond Plan<br/><br/>$3067</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>1 Businesses</li>
                        <li>1 Users</li>
                        <li>Mobile & Web</li>
                        <li>Unlimited Logins</li>
                        <li>Call & Chat Support</li>
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm'>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
            <div className={`${styles['edu-price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Platinum Plan<br/><br/>$5899</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>1 Businesses</li>
                        <li>1 Users</li>
                        <li>Mobile & Web</li>
                        <li>Unlimited Logins</li>
                        <li>Call & Chat Support</li>
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm'>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
            <div className={`${styles['edu-price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Enterprise Plan<br/><br/>$9439</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>1 Businesses</li>
                        <li>1 Users</li>
                        <li>Mobile & Web</li>
                        <li>Unlimited Logins</li>
                        <li>Call & Chat Support</li>
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm'>Free Trail</Button>
                    </div>
                </div>  
            </Col>
            <Col lg={3} className='mb-3'>
            <div className={`${styles['edu-price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Professional Plan<br/><br/>$18999</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>1 Businesses</li>
                        <li>1 Users</li>
                        <li>Mobile & Web</li>
                        <li>Unlimited Logins</li>
                        <li>Call & Chat Support</li>
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

export default Eduprice
