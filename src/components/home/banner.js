import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.scss";
import Carousel from "react-bootstrap/Carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import carousel from '../home/carousel';
import Slider from "react-slick";
import { FaStar, FaCheck } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  Badge,
  Accordion,
  Card,
} from "react-bootstrap";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const HomeBanner = () => {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          <Row>
            <Col lg={12}>
              <h3 className="mb-5 text-center fw-bold">Choose Your Industry</h3>
            </Col>
            <Col lg={12}>
              <div className={styles['caro-main']}>
            <Slider {...settings}>
          <div className={styles['caro-img']}>
              <p className={styles['caro-txt']}>Agriculture</p>
          </div>
          <div className={styles['caro-img']}>
          <p className={styles['caro-txt']}>Agriculture</p>
          </div>
          <div className={styles['caro-img']}>
          <p className={styles['caro-txt']}>Agriculture</p>
          </div>
          <div className={styles['caro-img']}>
          <p className={styles['caro-txt']}>Agriculture</p>
          </div>
          <div className={styles['caro-img']}>
          <p className={styles['caro-txt']}>Agriculture</p>
          </div>
          <div className={styles['caro-img']}>
          <p className={styles['caro-txt']}>Agriculture</p>
          </div>
        </Slider>
        </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles["callback"]}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="text-light text-center py-5">
                <strong>Why struggle with selecting software ?</strong>
              </h3>
            </Col>
            <Col lg={3}>
              <h5 className="text-light mb-5 fw-bold">
                {" "}
                <span className="text-success pe-2">
                  <FaCheck />
                </span>
                Get Expert Assistance
              </h5>
            </Col>
            <Col lg={3}>
              <h5 className="text-light mb-5 fw-bold">
                {" "}
                <span className="text-success pe-2">
                  <FaCheck />
                </span>
                Save Time and Money
              </h5>
            </Col>
            <Col lg={3}>
              <h5 className="text-light mb-5 fw-bold">
                {" "}
                <span className="text-success pe-2">
                  <FaCheck />
                </span>
                Avoid Software Headaches
              </h5>
            </Col>
            <Col lg={3}>
              <h5 className="text-light mb-5 fw-bold">
                {" "}
                <span className="text-success pe-2">
                  <FaCheck />
                </span>
                Get Wide Options
              </h5>
            </Col>
            <Col lg={12}>
              <div className="text-center mb-5">
                <Button variant="warning" className="text-light">
                  Request Call Back
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles["popular"]}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="text-center my-5">
                <strong>Most Popular Softwares</strong>
              </h3>
            </Col>
            <Col lg={4} className="mb-5">
              <div className="d-flex h-100  box shadow rounded-2">
                <div>
                  <Image
                    src="/images/quickheal.png"
                    alt="quickheal"
                    className="py-4 ps-2"
                    height="100"
                    width="100"
                  />
                </div>
                <div>
                  <h5 className="ps-4 pt-4">QuickHeal</h5>
                  <p
                    className={`${styles["p-style"]} border bg-success text-light  ps-2 pt-1 rounded-3 ms-4`}
                  >
                    4.4 <FaStar />
                  </p>
                  <p className={`${styles["p-font"]} ms-4`}>(13k reviews)</p>
                </div>
              </div>
            </Col>

            <Col lg={4} className="mb-5">
              <div className="d-flex h-100 box shadow rounded-2">
                <div>
                  <Image
                    src="/images/smartcloud.png"
                    alt="smartcloud"
                    className="py-4 ps-2"
                    height="100"
                    width="100"
                  />
                </div>
                <div>
                  <h5 className="ps-4 pt-4">Smartflo-cloud</h5>
                  <p
                    className={`${styles["p-style1"]} border bg-success text-light  ps-2 pt-1 rounded-3 ms-4`}
                  >
                    4.4 <FaStar />
                  </p>
                  <p className={`${styles["p-font"]} ms-4`}>(10k reviews)</p>
                </div>
              </div>
            </Col>

            <Col lg={4} className="mb-5">
              <div className="d-flex h-100 box shadow rounded-2">
                <div>
                  <Image
                    src="/images/superops.png"
                    alt="superops"
                    className="py-4 ps-2"
                    height="100"
                    width="100"
                  />
                </div>
                <div>
                  <h5 className="ps-4 pt-4">SuperOps.Ai</h5>
                  <p
                    className={`${styles["p-style2"]} border bg-success text-light  ps-2 pt-1 rounded-3 ms-4`}
                  >
                    4.4 <FaStar />
                  </p>
                  <p className={`${styles["p-font"]} ms-4`}>(7k reviews)</p>
                </div>
              </div>
            </Col>

            <Col lg={4} className="mb-5">
              <div className="d-flex h-100 box shadow rounded-2">
                <div>
                  <Image
                    src="/images/microsoft.png"
                    alt="microsofte"
                    className="py-4 ps-2"
                    height="100"
                    width="100"
                  />
                </div>
                <div>
                  <h5 className="ps-4 pt-4">Microsoft office 365</h5>
                  <p
                    className={`${styles["p-style3"]} border bg-success text-light  ps-2 pt-1 rounded-3 ms-4`}
                  >
                    4.4 <FaStar />
                  </p>
                  <p className={`${styles["p-font"]} ms-4`}>(7k reviews)</p>
                </div>
              </div>
            </Col>

            <Col lg={4} className="mb-5">
              <div className="d-flex h-100 box shadow rounded-2">
                <div>
                  <Image
                    src="/images/zohobooks.png"
                    alt="zohobooks"
                    className="py-4 ps-2"
                    height="100"
                    width="100"
                  />
                </div>
                <div>
                  <h5 className="ps-4 pt-4">Zoho Books</h5>
                  <p
                    className={`${styles["p-style4"]} border bg-success text-light  ps-2 pt-1 rounded-3 ms-4`}
                  >
                    4.4 <FaStar />
                  </p>
                  <p className={`${styles["p-font"]} ms-4`}>(7k reviews)</p>
                </div>
              </div>
            </Col>

            <Col lg={4} className="mb-5">
              <div className="d-flex h-100 box shadow rounded-2">
                <div>
                  <Image
                    src="/images/adobe.png"
                    alt="adobe"
                    className="py-4 ps-2"
                    height="100"
                    width="100"
                  />
                </div>
                <div>
                  <h5 className="ps-4 pt-4">Adobe Cloud for Enterprise</h5>
                  <p
                    className={`${styles["p-style5"]} border bg-success text-light  ps-2 pt-1 rounded-3 ms-4`}
                  >
                    4.4 <FaStar />
                  </p>
                  <p className={`${styles["p-font"]} ms-4`}>(7k reviews)</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles["comparison"]}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="text-center mb-5">
                <strong>Comparison of Softwares</strong>
              </h3>
            </Col>
            <Col lg={3} className={styles["col-margin-mob"]}>
              <div className={`${styles["box"]} shadow h-100`}>
                <div className="d-flex">
                  <div className="img pt-3 ms-4">
                    <div className=" mt-2 me-4">
                      <Image
                        src="/images/mybillbook.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className="shadow"
                      />
                    </div>
                    <p className={`${styles["box-p-font"]} pt-3`}>
                      My Bill Book
                    </p>
                  </div>
                  <div className="hr">
                    <hr className={styles["vs-hr"]} />
                  </div>
                  <div>
                    <p className={`${styles["vs-box"]} p-2`}>vs</p>
                  </div>
                  <div className="img pt-3">
                    <div className=" mt-2 me-3">
                      <Image
                        src="/images/vyaparlogo.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className=" shadow "
                      />
                    </div>
                    <h6 className={`${styles["box-p-font"]} pt-3`}>
                      Vyapar Billing software
                    </h6>
                  </div>
                </div>
                <div className="text-center my-3">
                  <Button size="sm" variant="primary" href="">
                    Compare
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={3} className={styles["col-margin-mob"]}>
              <div className={`${styles["box"]} shadow h-100`}>
                <div className="d-flex">
                  <div className="img pt-3 ms-4">
                    <div className=" mt-2 me-4">
                      <Image
                        src="/images/mybillbook.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className="shadow"
                      />
                    </div>
                    <p className={`${styles["box-p-font"]} pt-3`}>
                      My Bill Book{" "}
                    </p>
                  </div>
                  <div className="hr">
                    <hr className={styles["vs-hr"]} />
                  </div>
                  <div>
                    <p className={`${styles["vs-box"]} p-2`}>vs</p>
                  </div>
                  <div className="img pt-3">
                    <div className=" mt-2 me-3">
                      <Image
                        src="/images/mybillbook.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className=" shadow "
                      />
                    </div>
                    <h6 className={`${styles["box-p-font"]} pt-3`}>
                      My Bill Book{" "}
                    </h6>
                  </div>
                </div>
                <div className="text-center my-3">
                  <Button size="sm" variant="primary" href="">
                    Compare
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={3} className={styles["col-margin-mob"]}>
              <div className={`${styles["box"]} shadow h-100`}>
                <div className="d-flex">
                  <div className="img pt-3 ms-4">
                    <div className=" mt-2 me-4">
                      <Image
                        src="/images/mybillbook.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className="shadow"
                      />
                    </div>
                    <h6 className={`${styles["box-p-font"]} pt-3`}>
                      My Bill Book
                    </h6>
                  </div>
                  <div className="hr">
                    <hr className={styles["vs-hr"]} />
                  </div>
                  <div>
                    <p className={`${styles["vs-box"]} p-2`}>vs</p>
                  </div>
                  <div className="img pt-3">
                    <div className=" mt-2 me-3">
                      <Image
                        src="/images/mybillbook.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className=" shadow "
                      />
                    </div>
                    <h6 className={`${styles["box-p-font"]} pt-3`}>
                      My Bill Book
                    </h6>
                  </div>
                </div>
                <div className="text-center my-3">
                  <Button size="sm" variant="primary" href="">
                    Compare
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={3} className={styles["col-margin-mob"]}>
              <div className={`${styles["box"]} shadow h-100`}>
                <div className="d-flex">
                  <div className="img pt-3 ms-4">
                    <div className=" mt-2 me-4">
                      <Image
                        src="/images/mybillbook.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className="shadow"
                      />
                    </div>
                    <h6 className={`${styles["box-p-font"]} pt-3`}>
                      My Bill Book
                    </h6>
                  </div>
                  <div className="hr">
                    <hr className={styles["vs-hr"]} />
                  </div>
                  <div>
                    <p className={`${styles["vs-box"]} p-2`}>vs</p>
                  </div>
                  <div className="img pt-3">
                    <div className=" mt-2 me-3">
                      <Image
                        src="/images/mybillbook.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className=" shadow "
                      />
                    </div>
                    <h6 className={`${styles["box-p-font"]} pt-3`}>
                      My Bill Book
                    </h6>
                  </div>
                </div>
                <div className="text-center my-3">
                  <Button size="sm" variant="primary" href="">
                    Compare
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles["testimonial"]}>
        <Container>
          <Row>
            <Col lg={12}>
              <OwlCarousel
                className="owl-theme testimonials"
                responsive={state.responsive}
                loop
                nav
                autoplay={false}
                autoplayTimeout={5000}
                dots={false}
              >
                <div className={styles['demo']}>
                <div
                  id={styles["testimonial-slider"]}
                  className={styles["owl-carousel"]}
                >
                  <h3 className="text-center pt-4 text-light fw-bold" >What Our Clients Say</h3>
                  <div className={styles["testimonial"]}>
                    <div className={styles["pic"]}>
                      <Image
                        src="/images/usp1.png"
                        alt=""
                        height="50"
                        width="50"
                        className={styles['img']}
                      />
                    </div>
                    <div className={styles["testimonial-content"]}>
                      <p className={styles["description"]}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A aliquam amet animi blanditiis consequatur
                        debitis dicta distinctio, enim error eum iste libero
                        modi nam natus perferendis possimus quasi sint sit
                        tempora voluptatem. Est, exercitationem id ipsa ipsum
                        laboriosam perferendis temporibus!
                      </p>
                      <h3 className={styles["testimonial-title"]}>
                        williamson
                        <small className={styles["post"]}>Web Developer</small>
                      </h3>
                    </div>
                  </div>
                </div>
                </div>
                <div className={styles['demo']}>
                <div
                  id={styles["testimonial-slider"]}
                  className={styles["owl-carousel"]}
                >
                <h3 className="text-center pt-4 text-light fw-bold" >What Our Clients Say</h3>
                  <div className={styles["testimonial"]}>
                    <div className={styles["pic"]}>
                      <Image
                        src="/images/usp2.png"
                        alt=""
                        height="20"
                        width="20"
                        className={styles['img']}
                      />
                    </div>
                    <div className={styles["testimonial-content"]}>
                      <p className={styles["description"]}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A aliquam amet animi blanditiis consequatur
                        debitis dicta distinctio, enim error eum iste libero
                        modi nam natus perferendis possimus quasi sint sit
                        tempora voluptatem. Est, exercitationem id ipsa ipsum
                        laboriosam perferendis temporibus!
                      </p>
                      <h3 className={styles["testimonial-title"]}>
                        kristiana
                        <small className={styles["post"]}>Web Designer</small>
                      </h3>
                    </div>
                  </div>
                </div>
                </div>
                
              </OwlCarousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles["categories"]}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="text-center mt-5">
                <strong>Software Categories</strong>
              </h3>
            </Col>
            <Col lg={4}>
              <Accordion>
                <Accordion.Item eventKey="0" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col lg={4}>
              <Accordion>
                <Accordion.Item eventKey="0" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col lg={4}>
              <Accordion>
                <Accordion.Item eventKey="0" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className={styles["acc-style"]}>
                  <Accordion.Header className="outline-primary">
                    Accounting Software
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles["list-style"]}>
                      <li>
                        <Link href="/">Sotware 1</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 2</Link>
                      </li>
                      <li>
                        <Link href="/">Sotware 3</Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className={styles["usp"]}>
        <Container className="my-5">
          <Row className="mt-4">
            <Col lg={3}>
              <div className={`${styles["usp-mob"]} d-flex`}>
                <div>
                  <Image
                    src="/images/usp1.png"
                    alt="usp1"
                    width="80"
                    height="80"
                  />
                </div>
                <div className="mt-3 ms-3">
                  <p>
                    <strong>
                      20000+
                      <br /> Softwares
                    </strong>
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div className={`${styles["usp-mob"]} d-flex`}>
                <div>
                  <Image
                    src="/images/usp2.png"
                    alt="usp2"
                    width="80"
                    height="80"
                  />
                </div>
                <div className="mt-3 ms-3">
                  <p>
                    <strong>
                      Best Price
                      <br /> Guranteed
                    </strong>
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div className={`${styles["usp-mob"]} d-flex`}>
                <div>
                  <Image
                    src="/images/usp3.png"
                    alt="usp3"
                    width="80"
                    height="80"
                  />
                </div>
                <div className="mt-3 ms-3">
                  <p>
                    <strong>
                      Free Expert
                      <br /> Consultation
                    </strong>
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div className={`${styles["usp-mob"]} d-flex`}>
                <div>
                  <Image
                    src="/images/usp4.png"
                    alt="usp4"
                    width="80"
                    height="80"
                  />
                </div>
                <div className="mt-3 ms-3">
                  <p>
                    <strong>
                      20 Lacs+
                      <br /> Happy Customers
                    </strong>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
    </>
  );
};

export default HomeBanner;
