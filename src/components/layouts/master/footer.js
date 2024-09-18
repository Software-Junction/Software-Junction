import { Container, Row, Col, Stack } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
// import AiOutlinePhone from "react-icons/ai"
import Image from 'next/image';
import Link from 'next/link';
import $ from 'jquery';
import ScrollToTop from "react-scroll-to-top";
import styles from "./footer.module.scss";


const Footer = () => {
const list = [
  { name: "Campus Management Software", pageLink: "/cms" },
  { name: "Accounting Software", pageLink: "/accounting-software" },
  { name: "HRMS Software", pageLink: "/hr-software" },
  { name: "CRM Software", pageLink: "/crm-software" },
  { name: "Data Analysis Software", pageLink: "/data-analysis-software" },
  { name: "ERP Software", pageLink: "/erp-software" },
  { name: "Ecommerce Software", pageLink: "/e-commerce-software" },
  { name: "Billing and Invoicing Software", pageLink: "/billing-and-invoicing-software" },
  { name: "Inventory Management Software", pageLink: "/inventory-management-software" },
  { name: "App Development Software", pageLink: "/app-development-software" },
];

const firstHalf = list.slice(0, 5);
const secondHalf = list.slice(5);

  return (
    <>
      <section className="foot bg-light bg-border-btm bg-border-top pb-1" id={styles["footer"]}>
        <Container fluid className={styles['footer-content']}>
          <Row className={`${styles['foot-mob']} pt-5 ms-5`}>
            
            <Col lg={3}>
            <div className={styles['footer-links']}>
              <ul>
                <li><h6 className={styles['f-title']}>About Company :</h6></li>
                <li>
                  <Link href='/about'>About Us</Link>
                </li>
                <li>
                  <Link href='/terms-of-service'>Terms Of Service</Link>
                </li>
                <li>
                  <Link href='/privacy-policy'>Privacy Policy</Link>
                </li>
              </ul>
            </div>
            </Col>

            <Col lg={3}>
            <div className={styles['footer-links']}>
              <ul>
                <li><h6 className={styles['f-title']}>Trending Softwares</h6></li>
                {firstHalf.map((list, index) => (
                  <li key={index}>
                  <Link href={list.pageLink}>{list.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            </Col>

            <Col lg={3}>
            <div className={`${styles['footer-tren']}`}>
              <ul>
                {/* <li><h6 className={styles['f-title']}>Trending Softwares</h6></li> */}
                {secondHalf.map((list, index) => (
                  <li key={index}>
                  <Link href={list.pageLink}>{list.name}</Link>
                  </li>
                ))}
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
                <p><small>&copy;[2024] [TechScout]. All rights reserved.</small></p>
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