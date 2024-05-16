import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FaPenToSquare, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Details from './details';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from '../medismart/med.module.scss'
const Index = () => {
  return (
    <>
       <section className={styles["heading"]}>
        <Container>
          <Row>
            <Col lg={12}>
            <div className={`${styles['breadcr']} `}>
                <ul>
                 <li> <Link href="/#">Home</Link></li>&nbsp;<span style={{color : '#FC5185 '}}><MdKeyboardDoubleArrowRight /></span>&nbsp;
                  <li><Link href="/clinic-management">Clinic Management Software</Link></li>&nbsp;<span style={{color : '#FC5185 '}}><MdKeyboardDoubleArrowRight /></span>&nbsp;
                  <li><Link href="">Medismart</Link></li>
                </ul>
             </div>
              <div>
                <div className="d-flex">
                  <Image
                    src="/images/medismart.jpg"
                    alt="medismart"
                    width="200"
                    height="10"
                    className={`${styles["box-img"]} border bg-light p-4 rounded-3 shadow me-4`}
                  />
                  <div>
                    <h3 className="text-light">Medismart</h3>
                    <h5 className="text-light">Software by HexaTech IT Ventures Pvt Ltd / Writer Business Services Pvt Ltd</h5>
                    <p
                      className={`${styles["p-style1"]} border text-light ps-2 pt-1 rounded-3 `}
                      style={{backgroundColor: '#FC5185 ',width:'48px'}}
                    >
                      4.4 <FaStar />
                    </p>
                    <div className="d-flex">
                      <Link href="">
                        <p className="text-light">
                          <span style={{color : '#FC5185 '}}>
                            <FaPenToSquare />
                          </span>&nbsp;
                          Write a review
                        </p>
                      </Link>
                      <Link href="">
                        <p className="ms-4 text-light">
                          Visit Website &nbsp;
                          <span style={{color : '#FC5185 '}}>
                            <FaArrowUpRightFromSquare />
                          </span>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className={`${styles['detail-bg']} pb-5`}>
        <Details styles={styles}/>
      </section>
    </>
  )
}

export default Index
