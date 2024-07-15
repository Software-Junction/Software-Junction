import React from 'react'
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../chanakya/chan.module.scss";

import Demo from "../../common/demo";

const Price = () => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>Chanakya ERP Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['cha-price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Small<br/><br/>&#8377; 18000</h5>
                    <p>per year</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Basic features</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['cha-price-btn']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['cha-price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Medium<br/><br/>&#8377; 6</h5>
                    <p>Student/Month</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>All features</li>
                        <li>Priority Support (Email & Phone Support)</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['cha-price-btn1']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['cha-price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Students above 1000<br/><br/>&#8377; 5</h5>
                    <p>Student/Month</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>All features</li>
                        <li>Priority Support (Email & Phone Support)</li>
                        <li>24/7 Email and Chat Support</li>
                        <li>Contact us for best Price</li>
                    </ul>
                    <div className='text-center'>
                    <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
                    </div>
                </div>
           <Demo show={showDemo} handleClose={handleCloseDemo}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Price;
