import React from 'react'
import Image from "next/image";
import Slider from "react-slick";
import {
    Container,
    Row,
    Col,
  } from "react-bootstrap";
  var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const Industry = ({styles}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
  return (
    <>
      <section className={`${styles['industry']} mt-5`}>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={12}>
              <h3 className="mb-5 text-center fw-bold">Choose Your Industry</h3>
            </Col>
            <Col lg={12}>
              <div className={styles['caro-main']}>
            <Slider {...settings}>
          <div className={styles['caro-img']}>
            <Image src="/images/agriculture.png" alt="agriculture" height='10' width='220' className={styles['overlay']} />
              <p className={styles['caro-txt']}>Agriculture</p>
          </div>
          <div className={styles['caro-img']}>
          <Image src="/images/agriculture.png" alt="agriculture" height='10' width='220' className={styles['overlay']} />
          <p className={styles['caro-txt']}>Agriculture</p>
          </div>
          <div className={styles['caro-img']}>
          <Image src="/images/agriculture.png" alt="agriculture" height='10' width='220' className={styles['overlay']} />
          <p className={styles['caro-txt']}>Agriculture</p>
          </div>
          <div className={styles['caro-img']}>
          <Image src="/images/agriculture.png" alt="agriculture" height='10' width='220' className={styles['overlay']}/>
          <p className={styles['caro-txt']}>Agriculture</p>
          </div>
          <div className={styles['caro-img']}>
          <Image src="/images/agriculture.png" alt="agriculture" height='10' width='220' className={styles['overlay']}/>
          <p className={styles['caro-txt']}>Agriculture</p>
          </div>
          <div className={styles['caro-img']}>
          <Image src="/images/agriculture.png" alt="agriculture" height='10' width='220' className={styles['overlay']} />
          <p className={styles['caro-txt']}>Agriculture</p>
          </div>
        </Slider>
        </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Industry
