import React from 'react'
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../schoolpro/pro.module.scss";

import Demo from "../../common/demo";

const Price = () => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>SchoolPro Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>HDSchool (single client)<br/><br/>&#8377; 1300</h5>
                    <p>per Month</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Attendance</li>
                        <li>Payroll</li>
                        <li>Manage Purchase & Supplier</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn']} onClick={handleShowDemo}>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>HDSchool (Two clients)<br/><br/>&#8377; 2500</h5>
                    <p>per Month</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>Attendance</li>
                        <li>Payroll</li>
                        <li>Manage Purchase & Supplier</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn1']} onClick={handleShowDemo}>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>HDSchool (Cloud Server)<br/><br/>&#8377; 3500</h5>
                    <p>per Month</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Time tables and Results.</li>
                        <li>Cloud based subscription</li>
                        <li>Student and staff attendance</li>
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
