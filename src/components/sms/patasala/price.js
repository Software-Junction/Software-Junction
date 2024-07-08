import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../patasala/pat.module.scss";

const Price = () => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>Patasala.in Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Patasala Edition<br/><br/>&#8377; 15</h5>
                    <p>Student/Month</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Admission Management</li>
                        <li>Parent & Teacher Apps</li>
                        <li>Fee Management</li>
                        <li>Academics</li>
                        
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