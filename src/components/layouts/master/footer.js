import { Container, Row, Col, Stack } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
// import AiOutlinePhone from "react-icons/ai"
import Image from 'next/image';
import Link from 'next/link';
import $ from 'jquery';
import ScrollToTop from "react-scroll-to-top";
import styles from "./footer.module.scss";


const Footer = () => {


  return (
    <>
      <section className="foot bg-light bg-border-btm bg-border-top pb-1" id={styles["footer"]}>
        <Container fluid className={styles['footer-content']}>
          <Row className={`${styles['foot-mob']} pt-5 ms-5`}>
            <Col lg={3}>
            <div className={styles['footer-links']}>
              <ul>
                <li><h6 className={styles['f-title']}>For Vendors :</h6></li>
                <li>
                  <Link href=''>Register Your software</Link>
                </li>
                <li>
                  <Link href=''>Vendor Login</Link>
                </li>
                <li className={styles['li-btn']}>
                  <Link href=''>Pricing</Link>
                </li>
                <li className={styles['li-btn1']}>
                  <Link href=''>Price Estimator</Link>
                </li>
                <li className={styles['li-btn2']}>
                  <Link href=''>Brand Building Service</Link>
                </li>
                <li>
                  <Link href=''>Write a Review</Link>
                </li>
                <li>
                  <Link href=''>Sucess Stories</Link>
                </li>
              </ul>
            </div>
            </Col>

            <Col lg={3}>
            <div className={styles['footer-links']}>
              <ul>
                <li><h6 className={styles['f-title']}>For Buyers :</h6></li>
                <li>
                  <Link href=''>All Categories</Link>
                </li>
                <li>
                  <Link href=''>Resources</Link>
                </li>
                <li>
                  <Link href=''>Blog</Link>
                </li>
                <li>
                  <Link href=''>Free EBooks</Link>
                </li>
                <li>
                  <Link href=''>User Sign Up/Sign In</Link>
                </li>
                <li>
                  <Link href=''>Write For Us</Link>
                </li>
              </ul>
            </div>
            </Col>

            <Col lg={3}>
            <div className={styles['footer-links']}>
              <ul>
                <li><h6 className={styles['f-title']}>About Company :</h6></li>
                <li>
                  <Link href=''>About Us</Link>
                </li>
                <li>
                  <Link href=''>Terms Of use</Link>
                </li>
                <li>
                  <Link href=''>Privacy Policy</Link>
                </li>
                <li>
                  <Link href=''>Careers</Link>
                </li>
                <li>
                  <Link href=''>Select your Country :</Link>
                </li>
              </ul>
            </div>
            </Col>

            <Col lg={3}>
            <h6 className={styles['f-title']}>Get In Touch With Us :</h6>
            <div>
              <Image
                src="/images/facebook.png"
                alt='facebook'
                width="20"
                height="20"
              />
              &nbsp;
              <Image
                className='ms-3'
                src="/images/instagram.png"
                alt='instagram'
                width="20"
                height="20"
              />
              &nbsp;
              <Image
                className='ms-3'
                src="/images/linkedin.png"
                alt='linkedin'
                width="20"
                height="20"
              />
              &nbsp;
              <Image
                className='ms-3'
                src="/images/youtube.png"
                alt='youtube'
                width="20"
                height="20"
              />
            </div>
            <div className='mt-3'>
              <p><span><Image src='/images/envelope.png' height='20' width='20'/></span>&nbsp; team @softwaresuggest.com</p>
            </div>
            </Col>
                
          </Row>
        </Container>
        <hr
          style={{
            background: 'black',
            color: 'black',
            borderColor: 'black',
            height: '1.5spx',
          }}
        />
        <Container>
          <Row className="justify-content-md-center">
            <Col lg="12" md={6}>
              <div className="d-flex justify-content-center" id={styles['footer-Copy']}>
                <p><small>&copy;Copyright &copy;All rights reserved</small></p>
                <p><small> --This site by Heuristic Academy</small></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ScrollToTop smooth color="white" height="20" style={{ backgroundColor: "#335c67", border:"2px solid #f95738" }} />

    </>
  )
}

export default Footer