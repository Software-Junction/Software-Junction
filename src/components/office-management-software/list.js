import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Demo from '../common/demo';
import Pricemodal from '../common/price-modal';
import Needhelp from '../common/needHelp';

const List = ({ styles }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const handleFormSubmit = async (values, actions) => {
    try {
      await axios.post(
        "https://software-bazaar-default-rtdb.firebaseio.com/leadform.json",
        values
      );
      actions.resetForm();
      actions.setSubmitting(false);
      alert("Form submitted successfully.");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
      actions.setSubmitting(false);
    }
  };

  const [refrence, setRefrence] = useState("");

  const [isDatePickerFocused, setDatePickerFocused] = useState(false);

  const [showDemo, setShowDemo] = useState(false);

  const [showPrice, setShowPrice] = useState(false);

  const handleCloseDemo = () => setShowDemo(false);
  const handleShowDemo = (name) => {setShowDemo(true); setRefrence(name);}

  const handleClosePrice = () => setShowPrice(false);
  const handleShowPrice = (name) => {setShowPrice(true); setRefrence(name);}
  return (
    <>
      <section className={`${styles["list"]} mt-5 `}>
        <Container>
          <Row className="">
            <Col lg={12}>
              <h3>List of Best Softwares</h3>
            </Col>
            <Col lg={8}>
              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/zoho-books">
                      <Image
                        src="/images/zohobooks.png"
                        alt="zohobooks"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/zoho-books">
                      {" "}
                      <h5>Zoho Books</h5>
                      <p>
                        Best Accounting and Bookkeeping software for Small
                        Businesses
                      </p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/zoho-books">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Zoho Books, a comprehensive online accounting software
                  solution offered by Zoho Corporation. With a user-friendly
                  interface and powerful features, Zoho Books simplifies your
                  financial management tasks. It allows you to effortlessly
                  manage your business's finances, track expenses, create
                  invoices, and handle payroll. Whether you're a small business
                  owner or a freelance professional, Zoho Books is designed to
                  streamline your accounting processes, making it easier for you
                  to focus on growing your business. Explore the world of
                  efficient financial management with Zoho Books today.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/oracle-netsuite">
                      <Image
                        src="/images/oraclenet.png"
                        alt="oraclenet"
                        width="130"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/oracle-netsuite">
                      {" "}
                      <h5>Oracle NetSuite ERP</h5>
                      <p>#1 Cloud Inventory and Stock Management Software for Fast-Growing Businesses</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/oracle-netsuite">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  NetSuite's ERP software is a comprehensive solution designed
                  to streamline and enhance your business operations. With a
                  focus on efficiency and scalability, NetSuite ERP offers a
                  unified platform for financial management, order management,
                  procurement, and more. It empowers businesses to gain
                  real-time insights, improve decision-making, and optimize
                  resource utilization. This cloud-based ERP system provides a
                  flexible and customizable approach to address the unique needs
                  of various industries, making it an ideal choice for companies
                  seeking to elevate their productivity and competitiveness.
                  Discover how NetSuite ERP can help your organization achieve
                  greater success in managing critical aspects of your business.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/billbook">
                      <Image
                        src="/images/mybillbook.png"
                        alt="mybillbook"
                        width="130"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/billbook">
                      {" "}
                      <h5>My Bill Book</h5>
                      <p>Easy Inventory and Stock Management Software for Mobile & Desktop</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/billbook">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  MyBillBook is your friendly financial assistant, here to make
                  billing and invoicing a breeze. It's designed with simplicity
                  in mind, so you can effortlessly create, send, and keep track
                  of invoices, saving you time and reducing mistakes. Plus, it
                  goes beyond just invoices - it helps you manage expenses and
                  provides clear financial reports. Whether you're a small
                  business owner or a freelancer, MyBillBook is your partner in
                  staying organized and taking charge of your finances. Say
                  goodbye to financial headaches and hello to a smoother billing
                  experience with MyBillBook.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/margerp">
                      <Image
                        src="/images/marg.png"
                        alt="marg"
                        width="130"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/margerp">
                      {" "}
                      <h5>Marg ERP 9+Accounting</h5>
                      <p>Best Inventory Management software for SMBs</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/margerp">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Marg Compusoft is a powerful and versatile software platform
                  designed to streamline and enhance your business operations.
                  With a wide array of features, including inventory management,
                  accounting, and point-of-sale solutions, Marg Compusoft caters
                  to businesses of all sizes. Its user-friendly interface and
                  real-time data access make managing your business a breeze.
                  Experience the convenience of cloud-based operations and
                  efficient resource management with Marg Compusoft, your
                  trusted partner for growth and success.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/vyapar">
                      <Image
                        src="/images/vyaparlogo.png"
                        alt="vyaparlogo"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/vyapar">
                      {" "}
                      <h5>Vyapar</h5>
                      <p>
                        Accounting software by Vyapar for Small Business Owners
                      </p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/vyapar">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Vyapar is a versatile accounting and billing software designed
                  to simplify the financial management of businesses. With
                  user-friendly features, it streamlines invoicing, expense
                  tracking, and inventory management. This powerful tool is an
                  excellent choice for small and medium-sized enterprises,
                  offering cloud-based accessibility for easy collaboration.
                  Vyapar empowers businesses to handle their finances
                  efficiently, making it a go-to solution for entrepreneurs
                  seeking a hassle-free accounting experience.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/oracle-fusion">
                      <Image
                        src="/images/oracle.png"
                        alt="oracle"
                        width="130"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/oracle-fusion">
                      {" "}
                      <h5>Oracle Fusion Cloud ERP</h5>
                      <p>Leading Cloud-Based Inventory Planning Software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/oracle-fusion">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Oracle ERP, which stands for Enterprise Resource Planning, is
                  a versatile suite of business software applications designed
                  to simplify and improve an organization's core operations.
                  This powerful and flexible platform gives businesses the tools
                  they need to effectively handle their finances, procurement
                  processes, HR functions, and the complexities of their supply
                  chain. By offering a unified solution for crucial business
                  tasks, Oracle ERP enables companies to operate more
                  efficiently, make well-informed decisions, and enhance their
                  competitiveness in today's dynamic business world.
                </p>{" "}
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/busy-accounting">
                      <Image
                        src="/images/busy.jpg"
                        alt="busy"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/busy-accounting">
                      {" "}
                      <h5>Busy Accounting</h5>
                      <p>The Complete Business Management Software for SMEs</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/busy-accounting">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  BUSY is a versatile integrated billing and accounting software
                  designed for micro, small, and medium enterprises. With its
                  user-friendly interface and robust features, it adapts
                  seamlessly to your business requirements. Whether you prefer
                  Desktop, Cloud, or Mobile App access, BUSY Software offers a
                  flexible solution to streamline your financial management
                  tasks. Make your accounting hassle-free with BUSY!
                </p>{" "}
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/ankpal">
                      <Image
                        src="/images/ankpal.png"
                        alt="ankpal"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/ankpal">
                      {" "}
                      <h5>Ankpal</h5>
                      <p>A Cloud Based Online Accounting Software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/ankpal">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Ankpal is a versatile financial management software designed
                  to streamline your accounting processes. With its
                  user-friendly interface and robust features, Ankpal simplifies
                  bookkeeping, expense tracking, and invoicing, making it an
                  ideal solution for businesses of all sizes. This cloud-based
                  platform offers real-time financial insights, helping you make
                  informed decisions and stay in control of your finances.
                  Experience greater efficiency and accuracy in managing your
                  financial tasks with Ankpal, ensuring your business's fiscal
                  health is always in check.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/wave-accounting">
                      <Image
                        src="/images/wave.jpg"
                        alt="wave"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/wave-accounting">
                      {" "}
                      <h5>Wave Accounting</h5>
                      <p>100% free accounting system for your business</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/wave-accounting">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Wave is a versatile online accounting software designed to
                  simplify financial management for small businesses and
                  entrepreneurs. With its user-friendly interface, Wave offers a
                  range of essential financial tools, including invoicing,
                  expense tracking, and payroll services. It's an ideal choice
                  for those looking to streamline their accounting processes,
                  all while ensuring compliance and staying on top of their
                  financial health. Whether you're a freelancer or a small
                  business owner, Wave provides the tools you need to take
                  control of your finances and make informed decisions. Best of
                  all, it's a cost-effective solution, offering many essential
                  features for free.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/smaket">
                      <Image
                        src="/images/smaket.png"
                        alt="smaket"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/smaket">
                      {" "}
                      <h5>Smaket</h5>
                      <p>Smaket makes your Complex business Simple</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/smaket">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Discover Smaket, the revolutionary cloud-based solution that
                  simplifies accounting and billing processes. With Smaket, you
                  can say goodbye to complexities and focus on business growth,
                  all without needing prior accounting knowledge. Access your
                  business data from any device, anywhere, and ensure data
                  security through cutting-edge measures and auto backup. From
                  GST compliance to inventory tracking, Smaket has your
                  accounting needs covered. Embrace the future of accounting and
                  propel your business to success with Smaket!
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              {isShowMore && (
                <>
                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/geniebooks">
                          <Image
                            src="/images/genie.jpg"
                            alt="genie"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/geniebooks">
                          {" "}
                          <h5>GenieBooks</h5>
                          <p>Easy to use account software for small business</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/geniebooks">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      GenieBooks, your essential partner for small and
                      medium-sized business success. We specialize in
                      simplifying complex operations, offering unparalleled
                      control, insightful analytics, and effortless compliance.
                      Let us light the path to growth while we keep the lights
                      on for your business. Welcome to a world of streamlined
                      efficiency and strategic insights with GenieBooks by your
                      side.
                    </p>

                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/alignbooks">
                          <Image
                            src="/images/alignbooks.jpg"
                            alt="alignbooks"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/alignbooks">
                          {" "}
                          <h5>AlignBooks</h5>
                          <p>Accounting For Smart Business</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/alignbooks">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Welcome to AlignBooks, your all-in-one financial
                      management solution. Whether you're a small business owner
                      or a large corporation, AlignBooks offers a comprehensive
                      suite of tools to streamline your financial operations.
                      From accounting and invoicing to inventory management and
                      tax compliance, our software simplifies complex financial
                      tasks. With user-friendly features and real-time insights,
                      AlignBooks empowers you to make informed decisions and
                      drive your business towards success. Experience efficiency
                      and accuracy in your financial management with AlignBooks.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/horizon">
                          <Image
                            src="/images/horizon.png"
                            alt="horizon"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/horizon">
                          {" "}
                          <h5>Horizon ERP</h5>
                          <p>GST Billing software with Inventory & Accounts</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/horizon">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Horizon Tech Solutions, accessible at
                      www.horizontechsolutions.co.in, is a leading technology
                      company with a decade of experience in ERP solutions. They
                      offer Horizon ERP, the finest ready-to-use GST billing and
                      accounting software for small businesses in India. This
                      user-friendly software streamlines back-end processes,
                      such as billing, invoicing, and inventory management,
                      allowing businesses in distribution, retail, and
                      manufacturing to focus on revenue generation. Horizon ERP
                      follows best technological practices and simplifies GST
                      return filing, making it an invaluable tool for small
                      enterprises. It provides full control and adapts
                      seamlessly to existing business management systems.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/hyperdrive">
                          <Image
                            src="/images/hdpos.png"
                            alt="hdpos"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/hyperdrive">
                          {" "}
                          <h5>HyperDrive Solutions' POS Billing Software</h5>
                          <p>Billing, Accounts and Inventory Management</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/hyperdrive">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      HyperDrive Solutions' POS Billing Software! This
                      cutting-edge solution revolutionizes point-of-sale
                      management, offering seamless and efficient transaction
                      processing. With user-friendly interfaces and robust
                      features, this software streamlines your business
                      operations, from inventory management to sales tracking.
                      Enjoy real-time insights and customizable reports to
                      optimize your business. Say goodbye to manual calculations
                      and hello to a faster, more accurate, and customer-centric
                      checkout experience with HyperDrive Solutions' POS Billing
                      Software.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/saral">
                          <Image
                            src="/images/saral.png"
                            alt="saral"
                            width="130"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/saral">
                          {" "}
                          <h5>Saral Account</h5>
                          <p>Empowering your business</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/saral">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      "Saral Accounts" by Relyonsoft - your comprehensive
                      solution for efficient and user-friendly accounting
                      management. This software simplifies financial tasks,
                      allowing you to effortlessly handle invoices, expenses,
                      and financial reports. With its intuitive interface and
                      robust features, Saral Accounts streamlines bookkeeping
                      and ensures compliance with tax regulations. Experience
                      hassle-free accounting and financial control with this
                      powerful software, designed to empower businesses of all
                      sizes. Visit the website to learn more and take control of
                      your finances today.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/giddh">
                          <Image
                            src="/images/giddh.png"
                            alt="giddh"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/giddh">
                          {" "}
                          <h5>Giddh</h5>
                          <p>Books that make sense</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/giddh">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Giddh" is a versatile and user-friendly accounting
                      software that simplifies financial management for
                      businesses of all sizes. With an intuitive interface and
                      powerful features, it streamlines tasks such as invoicing,
                      expense tracking, and financial reporting. Giddh also
                      offers seamless integration with banking and taxation
                      systems, making it an indispensable tool for entrepreneurs
                      and finance professionals. Whether you're a small startup
                      or an established corporation, Giddh provides a
                      comprehensive solution for all your accounting needs,
                      helping you maintain financial clarity and efficiency. Try
                      Giddh to enhance your financial management today!
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/book-keeper">
                          <Image
                            src="/images/bookkeeper.png"
                            alt="bookkeeper"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/book-keeper">
                          {" "}
                          <h5> Book Keeper </h5>
                          <p>Easy-to-use mobile accounting app for SMBs</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/book-keeper">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      BookkeeperApp is a powerful and user-friendly financial
                      software designed to streamline your financial management
                      needs. Whether you're a small business owner, freelancer,
                      or an individual looking to take control of your finances,
                      BookkeeperApp offers a comprehensive suite of tools for
                      budgeting, expense tracking, and income management. With
                      its intuitive interface and robust features, you can
                      effortlessly monitor your financial health, create
                      customized reports, and plan for a secure financial
                      future. Join thousands of satisfied users and experience
                      the convenience and control that BookkeeperApp brings to
                      your financial world. Start making smarter financial
                      decisions today with BookkeeperApp.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/xero-accounting">
                          <Image
                            src="/images/xero.jpg"
                            alt="xero"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/xero-accounting">
                          {" "}
                          <h5> Xero Accounting </h5>
                          <p>Software by Xero Limited</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/xero-accounting">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Xero, an innovative cloud-based accounting software, is
                      designed to simplify financial management for businesses
                      of all sizes. With its user-friendly interface, Xero
                      offers a comprehensive suite of tools for bookkeeping,
                      invoicing, payroll, and financial reporting. It enables
                      seamless collaboration with accountants and supports
                      real-time access to financial data, making it easier than
                      ever to stay on top of your company's finances. Whether
                      you're a small startup or a large corporation, Xero
                      provides the digital solutions you need to streamline your
                      financial processes and make informed business decisions.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/easy-gst">
                          <Image
                            src="/images/easygst.png"
                            alt="easygst"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/easy-gst">
                          {" "}
                          <h5> EasY GST </h5>
                          <p>Best GST Software for CA & Tax Professionals</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/easy-gst">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Easy-GST, your one-stop solution for hassle-free GST
                      (Goods and Services Tax) compliance. This user-friendly
                      software simplifies the complexities of tax management,
                      making it effortless for businesses of all sizes. With its
                      intuitive interface, real-time updates, and comprehensive
                      features, Easy-GST streamlines tax filing, invoice
                      generation, and financial reporting. Say goodbye to the
                      complexities of GST, and say hello to a smoother, more
                      efficient way to manage your tax obligations. Join
                      countless businesses already benefiting from the
                      convenience of Easy-GST.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/arka-inventory">
                          <Image
                            src="/images/arka-inventory.png"
                            alt="arka-inventory"
                            width="130"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/arka-inventory">
                          {" "}
                          <h5>Arka Inventory</h5>
                          <p>
                            Arka is an inventory, purchase & cost management t
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/arka-inventory">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Arka Inventory is a management tool built on Salesforce,
                      offering comprehensive solutions for efficient inventory,
                      purchase, warehouse, and cost management. With features
                      like Inventory Visibility, Bill of Material,
                      Manufacturing, and more, it provides businesses worldwide,
                      both large and small, with the means to enhance
                      operational efficiency and drive customer success. Trusted
                      by a diverse clientele, Arka Inventory boasts high ratings
                      for its reliability and effectiveness. This software is
                      designed to streamline processes, ensuring businesses have
                      the tools they need for optimal inventory control and
                      seamless integration with platforms like QuickBooks
                      Online.
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/sleek-bill-online">
                          <Image
                            src="/images/sleek-bill.jpg"
                            alt="sleek-bill-online"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/sleek-bill-online">
                          {" "}
                          <h5>Sleek Bill Online</h5>
                          <p>Full Invoicing solution designed for Indian SMBs</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/sleek-bill-online">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Sleek Bill Online is a secure online invoicing software
                      designed for modern businesses, including small
                      enterprises, freelancers, and accountants in India. With
                      multi-user access from any PC or tablet, it allows
                      seamless collaboration across devices. The software offers
                      features such as inventory management, GST-compliant
                      billing, personalized templates, real-time stock records,
                      and various invoicing-related documents. Users can
                      generate proforma invoices, quotes, delivery notes, and
                      more, ensuring efficient business operations. With a focus
                      on GST integration and compliance, Sleek Bill Online
                      enables accurate calculation of GST rates and provides
                      access to business data from anywhere. The cloud-based
                      platform, founded in 2013, has garnered over 40,000
                      clients in India and offers free training, 24/7 support,
                      and a commitment to security and privacy. Get started
                      today with free and easy invoicing, and let Sleek Bill
                      Online handle your billing needs.
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/tya-suite">
                          <Image
                            src="/images/tya-suite.png"
                            alt="tya-suite"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/tya-suite">
                          {" "}
                          <h5>TYASuite's Inventory Management Software</h5>
                          <p>Easy to Use Inventory System Software</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/tya-suite">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      TYASuite's Inventory Management Software is a cloud-based
                      solution designed for growing businesses, offering
                      seamless control over inventory at plant, warehouse, or
                      company levels. The platform automates the entire
                      inventory workflow, from requisition to stock management,
                      effectively reducing working capital. With features like
                      procurement, project management, compliance management,
                      and more, TYASuite provides a comprehensive Cloud ERP
                      solution for businesses. Headquartered in Bengaluru,
                      TYASuite Software Solutions prioritizes efficiency in
                      inventory control and offers a user-friendly experience to
                      enhance overall business performance.
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>
                </>
              )}
<Pricemodal show={showPrice} handleClose={handleClosePrice}/>
              <Demo show={showDemo} handleClose={handleCloseDemo}/>
            </Col>

            <Col lg={4}>
              <Needhelp />
            </Col>

            <Col lg={12}>
              <div className={styles["list-btn"]}>
                <Button className="mt-4" onClick={toggleReadMoreLess}>
                  {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default List;
