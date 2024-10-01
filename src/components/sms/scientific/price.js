import React from 'react'
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../scientific/fic.module.scss";

import Demo from "../../common/demo";

const Price = () => {
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>Scientific Study's School Management Software Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Premium<br/><br/>&#8377; 10</h5>
                    <p>Student/Month</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>All features</li>
                       
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn']} onClick={handleShowDemo}>Free Trail</Button>
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
