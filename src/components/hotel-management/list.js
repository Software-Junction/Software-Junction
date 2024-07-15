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

  const [isDatePickerFocused, setDatePickerFocused] = useState(false);

  const [showDemo, setShowDemo] = useState(false);

  const [showPrice, setShowPrice] = useState(false);

  const handleCloseDemo = () => setShowDemo(false);
  const handleShowDemo = () => setShowDemo(true);

  const handleClosePrice = () => setShowPrice(false);
  const handleShowPrice = () => setShowPrice(true);
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
                    <Link href="/vyapar-hotel">
                      <Image
                        src="/images/vyaparhotel.png"
                        alt="vyaparhotel"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/vyapar-hotel">
                      {" "}
                      <h5>Vyapar</h5>
                      <p>Simplified hotel accounting software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/vyapar-hotel">
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
                  Vyapar is an advanced accounting software tailored for the
                  hospitality industry, offering a comprehensive solution for
                  billing, estimates, invoicing, and financial management.
                  Specifically designed to address challenges faced by the
                  hospitality sector, Vyapar streamlines accounting processes by
                  managing cash flow, tracking income and expenses, and
                  providing real-time financial analysis. With features such as
                  expense management, inventory control, fixed asset management,
                  and accounts receivable/payable, Vyapar ensures accurate and
                  efficient financial record-keeping for hotel businesses. The
                  software's user-friendly interface, automated functions, and
                  real-time accessibility make it an essential tool for
                  optimizing costs, managing records, and making strategic
                  decisions in the dynamic hospitality environment.
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
                    <Link href="/kwhotel">
                      <Image
                        src="/images/kwhotel.png"
                        alt="kwhotel"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/kwhotel">
                      {" "}
                      <h5>KWHotel</h5>
                      <p>Feature-rich hotel checkin software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/kwhotel">
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
                  KWHotel, an innovative hotel management solution designed to
                  elevate your hospitality business to new heights. Trusted by
                  over 5,000 hoteliers across 160 countries and available in 21
                  languages, KWHotel goes beyond traditional management
                  software. With both desktop and web-based options, it offers
                  features like reservation handling, pricing policy management,
                  and invoicing. From rental management for apartments to a
                  camping module with graphical representation, KWHotel ensures
                  seamless operations. Stay ahead with online booking engines,
                  channel management, and integrations like credit card services
                  and SMS marketing. Experience a comprehensive tool tailored
                  for the modern hotelier, committed to optimizing efficiency,
                  reducing costs, and adapting to industry challenges. Take
                  advantage of a free hotel audit, offering over 60 professional
                  tips to navigate the complexities of the pandemic landscape.
                  Welcome to a new era of hotel management with KWHotel—where
                  innovation meets hospitality.
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
                    <Link href="/stayflexi">
                      <Image
                        src="/images/stayflexi.png"
                        alt="stayflexi"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/stayflexi">
                      {" "}
                      <h5>Stayflexi</h5>
                      <p>Flexible hotel booking platform for hotel business</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/stayflexi">
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
                  Stayflexi is an All-In-One platform revolutionizing the
                  hospitality industry, offering a comprehensive Operating
                  System for hotels and vacation rentals. Seamlessly integrating
                  operations, sales, guest management, and payments, it provides
                  a fully automated AI-powered Property Management System (PMS)
                  to simplify tasks and reduce costs. With features like Magic
                  Link automation, flexible booking options, and a global
                  network of 2000+ trusted properties, Stayflexi ensures a
                  hassle-free experience for hoteliers, enhancing guest
                  satisfaction and driving revenue through direct bookings. It's
                  the ultimate solution for modern property management,
                  connecting last-minute unsold rooms with travelers, and
                  supporting diverse property types worldwide.
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
                    <Link href="/sysotel">
                      <Image
                        src="/images/sysotel.png"
                        alt="sysotel"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/sysotel">
                      {" "}
                      <h5>SYSOTEL.AI</h5>
                      <p>AI-powered hotel management system</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/sysotel">
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
                  SYSOTEL.AI is India's pioneering Revenue & Yield Automation
                  System, revolutionizing the hospitality sector. This
                  innovative AI/ML-based platform offers a comprehensive single
                  sign-on solution for hoteliers, addressing challenges and
                  enabling a 15-20% increase in topline, 12-18% optimization of
                  the bottom line, and improved operational efficiency. With
                  seamless integration, real-time data insights, and a
                  user-friendly interface, SYSOTEL.AI empowers businesses to
                  streamline operations, boost revenue through intelligent
                  booking engines, and strategically optimize profitability
                  through advanced solutions. Trusted by a diverse clientele,
                  SYSOTEL.AI shapes the future of hospitality with powerful
                  collaborations and unmatched technology in the realms of PMS,
                  channel management, payment gateways, OTAs, and meta search.
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
                    <Link href="/ezee-absolute">
                      <Image
                        src="/images/ezee.png"
                        alt="ezee"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/ezee-absolute">
                      {" "}
                      <h5>eZee Absolute</h5>
                      <p>Best Hotel Software for Small and Medium Business</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/ezee-absolute">
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
                  eZee Absolute, a Hotel Management System designed to elevate
                  your hospitality business to new heights. With a focus on
                  seamless operations, this comprehensive software offers a
                  range of features, from efficient reservations and offline
                  bookings to easy rate management and user role customization.
                  The integrated Hotel Channel Manager connects your property to
                  130+ channels, ensuring maximum reach and instant updates. The
                  commission-free Hotel Booking Engine empowers direct bookings,
                  while the Restaurant POS System streamlines order management
                  and integrates with popular food delivery portals. Explore the
                  future of hospitality management with eZee Absolute – where
                  innovation meets excellence.
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
                    <Link href="/djubo">
                      <Image
                        src="/images/djubo.png"
                        alt="djubo"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/djubo">
                      {" "}
                      <h5>DJUBO</h5>
                      <p>Smart hotel booking engine</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/djubo">
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
                  DJUBO is an all-in-one hospitality management software
                  designed for hotels, offering a comprehensive suite of modules
                  to streamline operations and maximize revenue. It integrates
                  Property Management, Centralized Reservation, Channel
                  Management, Booking & Payment Engine, Analytics, Meta-search
                  Marketing, Point of Sale, Online Reputation Management, Rate
                  Shopping, Intelligent Revenue Management, and more. Built by
                  hoteliers for hoteliers, DJUBO's cloud-based solution enables
                  seamless connectivity, reducing manual efforts and enhancing
                  efficiency. With a user-friendly interface, mobile
                  accessibility, and a commitment to innovation, DJUBO stands
                  out as a versatile and integrated hotel technology solution.
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
                    <Link href="/innkey">
                      <Image
                        src="/images/innkey.png"
                        alt="innkey"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/innkey">
                      {" "}
                      <h5>InnKey</h5>
                      <p>Cloud Based Hotel Management Software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/innkey">
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
                  InnKey – a revolutionary cloud-based solution that is
                  reshaping the landscape of hotel management. InnKey sets
                  itself apart by prioritizing simplicity and operational
                  excellence, offering a centralized platform to streamline
                  hotel operations. Say goodbye to the complexities of juggling
                  multiple software versions and platforms as InnKey seamlessly
                  integrates central reservation, front desk management, point
                  of sale, and more. With a global footprint and cutting-edge
                  property management system access, InnKey ensures efficient
                  distribution and introduces genuine artificial price
                  intelligence for advanced revenue management. Enjoy the perks
                  of easy remote accessibility, scalability, and robust data
                  security, making InnKey the go-to choice for hotels worldwide.
                  Embark on a new era of hospitality management where efficiency
                  meets exceptional customer service – welcome to the world of
                  InnKey.
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
                    <Link href="/sabeeapp">
                      <Image
                        src="/images/sabeeapp.png"
                        alt="sabeeapp"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/sabeeapp">
                      {" "}
                      <h5>SabeeApp</h5>
                      <p>Cloud-based hotel management software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/sabeeapp">
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
                  SabeeApp, a seamless and thriving hospitality experience. Our
                  Software Suite is a powerhouse of tools, featuring the
                  efficient Property Management System (PMS), Booking Engine,
                  Channel Manager, SabeePay for secure multichannel payments,
                  and cutting-edge Smart Solutions like digital hotel
                  applications. Tailored for hotels, apartments, and hostels,
                  SabeeApp is more than just a management system – it's a
                  catalyst for automation, direct bookings, and elevated guest
                  experiences. Embrace the future with our cloud-based platform,
                  granting you access to critical data and operations anytime,
                  anywhere. Join the league of global hoteliers who trust
                  SabeeApp for personalized onboarding, industry integration,
                  and a seamless blend of innovation and efficiency in every
                  aspect of hospitality management.
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
                    <Link href="/myhotelline">
                      <Image
                        src="/images/myhotelline.png"
                        alt="myhotelline"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/myhotelline">
                      {" "}
                      <h5>MyHotelLine</h5>
                      <p>Serving Hospitality</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/myhotelline">
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
                  MyHotelLine, your gateway to a hotel management experience. As
                  a leading cloud-based solution, MyHotelLine offers an
                  integrated platform designed to centralize reservations, boost
                  revenue, and deliver unparalleled guest experiences. With a
                  single login, our powerful tools, including a cutting-edge
                  hotel PMS, direct booking engine, channel manager, and
                  advanced revenue management, cater to a diverse range of
                  accommodations. Boasting a 99.5% uptime guarantee and backed
                  by a highly experienced team with over 20 years in the
                  industry, MyHotelLine is your one-stop solution for seamless,
                  efficient, and cost-effective hotel management. Join over 1000
                  hospitality professionals worldwide who trust MyHotelLine to
                  elevate their operations and enhance guest satisfaction.
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
                    <Link href="/hms">
                      <Image
                        src="/images/thms.jpg"
                        alt="thms"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/hms">
                      {" "}
                      <h5>The Hotel Management Software</h5>
                      <p>hotel software, club software, resort software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/hms">
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
                  The Hotel Management Software by Truelogics Infotech Pvt. Ltd.
                  is a comprehensive and user-friendly solution designed for the
                  hospitality industry. It offers a 24/7 support system,
                  catering to hotels, chain outlets, guest houses, motels,
                  resorts, sweet shops, bakeries, and related services. With
                  modules for restaurant, club, bar, banquet, spa, salon, and
                  more, the cloud-based ERP system streamlines operations,
                  including front office management, reservation tracking,
                  inventory control, and accounting. The software stands out
                  with its true booking engine, CRM integration, and channel
                  manager for efficient guest bookings and feedback management.
                  The product ensures data security, easy configuration, and
                  24x7 technical support, making it a reliable choice for
                  businesses in the hospitality sector.
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
                        <Link href="/hotelogix">
                          <Image
                            src="/images/hotelogix.png"
                            alt="hotelogix"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/hotelogix">
                          {" "}
                          <h5>Hotelogix</h5>
                          <p>Cloud-based property management system</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/hotelogix">
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
                      Hotelogix is a cloud-based hotel management software that
                      empowers hoteliers to enhance operational efficiency and
                      guest experiences. With features such as reservation
                      management, real-time channel updates, and mobile PMS, it
                      offers a comprehensive solution for hotel operations. The
                      software helps increase revenue by 20%, boosts online
                      bookings by 45%, and saves 60% in staff time. Trusted by
                      hoteliers in over 100 countries, Hotelogix provides a
                      unified dashboard for managing multiple properties, a
                      powerful web booking engine for commission-free direct
                      bookings, and enthusiastic 24x7 support. It's a
                      subscription-based model that facilitates cost-effective
                      operations and real-time decision-making, ensuring a
                      seamless hotel management experience.
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
                        <Link href="/oracle-hospitality">
                          <Image
                            src="/images/oraclehospitality.png"
                            alt="oraclehospitality"
                            width="130"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/oracle-hospitality">
                          {" "}
                          <h5>Oracle Hospitality</h5>
                          <p>Comprehensive hotel management suite</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/oracle-hospitality">
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
                      Oracle Hospitality is a technology solution designed to
                      elevate guest experiences and streamline operations in the
                      hospitality industry. With over 40,000 active sites
                      managing 4.8 million hotel rooms and integrating with
                      4,000 vendors, Oracle Hospitality offers a suite of AI and
                      automation-powered tools. It seamlessly connects event
                      sales, guest rooms, management, and point of sale systems,
                      ensuring flawless operations from lobby to back office.
                      The software enhances customer engagement, loyalty, and
                      revenue by personalizing marketing, automating upselling
                      opportunities, and optimizing back-office functions for
                      improved efficiency and profitability.
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
                        <Link href="/shawman">
                          <Image
                            src="/images/shawman.png"
                            alt="shawman"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/shawman">
                          {" "}
                          <h5>ShawMan PMS</h5>
                          <p>Software by ShawMan Software Pvt. Ltd.</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/shawman">
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
                      ShawMan PMS is a Property Management System designed to
                      efficiently handle room management, guest preferences, and
                      various standard operations for diverse property types
                      such as hotels, motels, resorts, clubs, B & B’s, hostels,
                      and apartments. With features like centralized rate
                      management and a Central Reservation System, it
                      streamlines business processes for hotel chains,
                      facilitating easy booking management from travel agents
                      and FIT over the Internet. Boasting modern integrated
                      modules, ShawMan PMS ensures comprehensive coverage of all
                      aspects of property management. Developed by ShawMan
                      Technologies, a pioneering force in hospitality technology
                      for over 25 years, this software is user-friendly, secure,
                      reliable, and scalable, making it an indispensable tool
                      for the HoReCa industry.
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
                        <Link href="/maestro">
                          <Image
                            src="/images/maestro.png"
                            alt="maestro"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/maestro">
                          {" "}
                          <h5>Maestro PMS</h5>
                          <p>Powerful property management system</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/maestro">
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
                      Maestro PMS is a leading hospitality Property Management
                      System (PMS) software, offering a versatile, all-in-one
                      solution for independent hospitality groups. With a focus
                      on safeguarding investments, it provides a comprehensive
                      Web browser or Windows platform that can be deployed in
                      the cloud, on-premise, or in a private cloud. This
                      innovative software supports the latest mobile,
                      contact-free, and web responsive technologies, enhancing
                      the digital guest and staff experience. Maestro stands out
                      with its flexibility, scalability, and a unique option for
                      businesses to seamlessly transition between deployment
                      models without incurring additional licensing fees, backed
                      by industry-leading 24/7 support services and a vast
                      collection of open APIs for over 800 third-party
                      integrations.
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
                        <Link href="/axisrooms-channel-manager">
                          <Image
                            src="/images/axisrooms.png"
                            alt="axisrooms"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/axisrooms-channel-manager">
                          {" "}
                          <h5>AxisRooms Channel Manager</h5>
                          <p>Update Inventory and Pricing from same place</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/axisrooms-channel-manager">
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
                      AxisRooms Channel Manager is a hospitality solution
                      designed to boost online sales and revenue for hotels.
                      With efficient online distribution and advanced channel
                      management capabilities, it empowers hoteliers to maximize
                      their reach and visibility. The service, backed by over 12
                      years of industry expertise, offers a comprehensive suite
                      of products, including Hotel Revenue Management Service
                      and a Booking Engine. Leveraging the power of the cloud,
                      AxisRooms has become a trusted partner for over 5,000
                      hotels across 61 countries, providing a well-designed
                      channel manager with excellent support to ensure
                      unparalleled growth in the hospitality business.
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
                        <Link href="/cheerze-connect">
                          <Image
                            src="/images/cheerze.jpg"
                            alt="cheerze"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/cheerze-connect">
                          {" "}
                          <h5>Cheerze Connect</h5>
                          <p>Hospitality Unlimited</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/cheerze-connect">
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
                      Cheerze Connect is a cutting-edge, cloud-based Hotel
                      Management System designed for diverse properties
                      worldwide, with a proven track record spanning 20+
                      countries and 750+ establishments. This 360° smart
                      solution enhances operational efficiency, boosts revenue,
                      and streamlines customer interactions for mid-size
                      hoteliers, resorts, and restaurants. Notable features
                      include user-defined reporting, commission-free bookings,
                      24x7 support, and a unique pay-as-you-go model for
                      occupied rooms. With a robust reputation and accolades,
                      Cheerze Connect stands out for its customization,
                      third-party integrations, and recognition by industry
                      experts, making it a preferred choice for seamless hotel
                      management.
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
                        <Link href="/mycloud-hospitality">
                          <Image
                            src="/images/mycloud.png"
                            alt="mycloud"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/mycloud-hospitality">
                          {" "}
                          <h5>mycloud Hospitality</h5>
                          <p>Web Based property management system</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/mycloud-hospitality">
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
                      mycloud Hospitality is an award-winning cloud-based hotel
                      management software developed by Prologic First, a top
                      hospitality software company. With over 15 years of
                      industry expertise, mycloud automates hotel operations,
                      offering features like contactless check-in, check-out,
                      and dining. Boasting a zero upfront fee, the software
                      ensures a rapid live-in of the property management system
                      within 4 hours, accompanied by 24/7 guaranteed support.
                      Trusted by 2000 hotels across 40+ countries, mycloud is a
                      fully customizable and budget-friendly solution,
                      integrating various modules for seamless hotel management.
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
                        <Link href="/restora">
                          <Image
                            src="/images/restora.png"
                            alt="restora"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/restora">
                          {" "}
                          <h5>Restora POS</h5>
                          <p>Software by Restora POS</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/restora">
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
                      Restora POS is a restaurant management software designed
                      to elevate food service businesses to new heights.
                      Offering a cloud-based POS system with responsive support,
                      it seamlessly integrates with websites and apps, enhancing
                      online visibility and brand image. With features like
                      digitalized restaurant management, efficient billing,
                      online food ordering, and cloud kitchen support, Restora
                      POS ensures a smooth, user-friendly experience. From
                      contactless payments to human resource management, it
                      covers all facets of restaurant operations, providing a
                      world-class solution tailored to various food service
                      types.
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
                        <Link href="/xperts-hotel">
                          <Image
                            src="/images/experts.png"
                            alt="experts"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/xperts-hotel">
                          {" "}
                          <h5>Xperts Hotel</h5>
                          <p>Installation based Hotel Management software</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/xperts-hotel">
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
                      Xperts Hotel is a Hotel Management software designed and
                      implemented by Experts IN Solutions. This world-class
                      software offers modules for Reception/Front Desk,
                      Housekeeping/Hospitality, Restaurant/Room Service, and
                      Back Office/Inventory, seamlessly integrated to meet
                      diverse hospitality needs. Tailored for hotels,
                      restaurants, resorts, and serviced apartments, Xperts
                      Hotel ensures efficient operations with features like room
                      availability tracking, billing, inventory management, and
                      role-based security. Its user-friendly interface and
                      external device integration, coupled with services like
                      software consulting and application maintenance, make
                      Xperts Hotel a powerful solution for businesses in the
                      competitive hospitality industry
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
                        <Link href="/frontdesk-anywhere">
                          <Image
                            src="/images/frontdesk.png"
                            alt="frontdesk"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/frontdesk-anywhere">
                          {" "}
                          <h5> Frontdesk Anywhere</h5>
                          <p>Software by Frontdesk Anywhere</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/frontdesk-anywhere">
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
                      Frontdesk Anywhere is an award-winning, cloud-based Hotel
                      Management Software that revolutionizes the hospitality
                      industry. It offers a comprehensive suite of solutions,
                      including a Property Management System (PMS), Channel
                      Manager, Booking Engine, Revenue Management, and Payment
                      Processing. This user-friendly platform allows hoteliers
                      to effortlessly manage operations, customize profiles,
                      implement powerful rate management, and engage with guests
                      through personalized messages. With a mobile-friendly
                      booking engine and connectivity to over 350 major
                      distribution channels, Frontdesk Anywhere empowers hotels
                      to reduce costs, streamline operations, and increase
                      revenue, making it a trusted choice for hotels in over 35
                      countries.
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
                        <Link href="/roomsy">
                          <Image
                            src="/images/roomsy.png"
                            alt="roomsy"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/roomsy">
                          {" "}
                          <h5>Roomsy</h5>
                          <p>Best software for hotel management</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/roomsy">
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
                      Roomsy is a efficient Hotel Property Management System
                      (PMS) designed for hotels, bed & breakfasts, and
                      guesthouses across 43 countries. Boasting a clean booking
                      calendar, room management, customizable invoices, and
                      online booking engine, Roomsy simplifies operations with
                      necessary features. Integrated with 250+ Online Travel
                      Agencies (OTAs), it offers secure payment processing and
                      robust reporting. Trusted by global customers, Roomsy
                      provides a 14-day risk-free trial, requiring no credit
                      card details, making it an ideal solution for small
                      independent property owners seeking hassle-free hotel
                      management.
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
                        <Link href="/cloudbeds">
                          <Image
                            src="/images/cloudbeds.png"
                            alt="cloudbeds"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/cloudbeds">
                          {" "}
                          <h5>Cloudbeds</h5>
                          <p>Best cloud-based hotel management platform</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/cloudbeds">
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
                      Cloudbeds is a leading Hospitality Management System,
                      offering a unified platform that empowers property owners
                      to efficiently manage and grow their lodging businesses.
                      Trusted by thousands of independent properties worldwide,
                      Cloudbeds provides a comprehensive solution, seamlessly
                      integrating Property Management, Channel Management, and
                      Booking Engine functionalities. The platform enhances
                      operational efficiency, simplifies reservations and
                      distribution, and elevates guest experiences. With a focus
                      on flexibility, Cloudbeds offers an Integrations
                      Marketplace and an Open API, allowing users to connect
                      with specialized apps and customize solutions. Backed by a
                      dedicated support team, Cloudbeds is the go-to partner for
                      hospitality success, as recognized by industry ratings and
                      customer reviews.
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4">
                        <p>
                          Starting Price :
                          <span className="text-success fw-bold">
                            {" "}
                            Available on Request
                          </span>
                        </p>
                      </div>
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
                        <Link href="/sirvoy-booking-system">
                          <Image
                            src="/images/sirvoy.png"
                            alt="sirvoy"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/sirvoy-booking-system">
                          {" "}
                          <h5>Sirvoy Booking System</h5>
                          <p>Hospitality Management Made Easy</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/sirvoy-booking-system">
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
                      Sirvoy Booking System is a user-friendly hospitality
                      management solution, encompassing a Property Management
                      System, Booking Engine, and Channel Manager. Ideal for
                      hotels, motels, B&Bs, and more, it provides easy access to
                      bookings anytime, anywhere without the need for
                      installations or updates. With a cost-effective starting
                      price of $10/month, Sirvoy's responsive booking engine
                      enables commission-free direct bookings via your website,
                      while the Channel Manager facilitates seamless integration
                      with major online booking channels. Offering fixed monthly
                      fees, Sirvoy serves thousands of properties globally,
                      providing comprehensive tools for efficient reservation
                      management.
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4">
                        <p>
                          Starting Price :
                          <span className="text-success fw-bold">
                            {" "}
                            Available on Request
                          </span>
                        </p>
                      </div>
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
                        <Link href="/mmi-hot-inn">
                          <Image
                            src="/images/hotinn.jpg"
                            alt="hotinn"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/mmi-hot-inn">
                          {" "}
                          <h5>MMI HOT inn - Hotel Software</h5>
                          <p>MOST RELIABLE E-MANAGER</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/mmi-hot-inn">
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
                      Hot Inn ERP by MMI Softwares Pvt. Ltd. is a comprehensive
                      Hotel Management Software designed for the hospitality
                      industry in India. This innovative solution automates and
                      streamlines key hotel operations, including front office
                      tasks, reservations, billing, housekeeping, and payments.
                      With a user-friendly interface and cloud-based
                      functionality, Hot Inn ERP enhances efficiency, increases
                      revenue for both independent hotels and hotel groups, and
                      provides a seamless guest experience from booking to
                      feedback. The software's all-in-one features, integrated
                      channel manager, and booking engine make it a vital tool
                      for effective hotel management in the dynamic global
                      economic landscape.
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4">
                        <p>
                          Starting Price :
                          <span className="text-success fw-bold">
                            {" "}
                            Available on Request
                          </span>
                        </p>
                      </div>
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
                        <Link href="/hipar">
                          <Image
                            src="/images/hipar.png"
                            alt="hipar"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/hipar">
                          {" "}
                          <h5>Hipar</h5>
                          <p>Software by Seawind Solution Pvt. Ltd.</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/hipar">
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
                      Hipar is a full-service hotel management software designed
                      for seamless operations in the hospitality industry. With
                      unparalleled expertise, Hipar offers a comprehensive suite
                      of information management systems tailored for hotels,
                      restaurants, clubs, and resorts. Accessible anytime,
                      anywhere, the software ensures fast and reliable front
                      desk operations, reservations, inventory management, and
                      accounts. Hipar stands out for its user-friendly
                      interface, 24/7 customer support, and global presence.
                      Elevate your business with smarter, faster, and easier
                      transactions, connecting with Hipar through email and
                      phone for efficient hotel management.
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4">
                        <p>
                          Starting Price :
                          <span className="text-success fw-bold">
                            {" "}
                            Available on Request
                          </span>
                        </p>
                      </div>
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
                        <Link href="/microgenn">
                          <Image
                            src="/images/microgenn.jpg"
                            alt="microgenn"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/microgenn">
                          {" "}
                          <h5>Microgenn</h5>
                          <p>
                            Always one step ahead in serving the Hospitality
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/microgenn">
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
                      Microgenn offers specialized Hotel Management Software,
                      providing tailored solutions for the hospitality industry.
                      With 11 years of experience and a portfolio of 19
                      products, Microgenn ensures reduced complexity,
                      pocket-friendly solutions, and user-friendly interfaces.
                      From front office and point of sale to bar management and
                      housekeeping, their comprehensive IT services empower
                      businesses with all-encompassing support, earning them 13
                      awards and the trust of 292 happy clients. Elevate your
                      business success with Microgenn's excellent IT solutions
                      for the hotel industry.
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4">
                        <p>
                          Starting Price :
                          <span className="text-success fw-bold">
                            {" "}
                            Available on Request
                          </span>
                        </p>
                      </div>
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
                        <Link href="/clock-pms">
                          <Image
                            src="/images/clock.png"
                            alt="clock"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/clock-pms">
                          {" "}
                          <h5>Clock PMS</h5>
                          <p>Modern all-round cloud hotel management system</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/clock-pms">
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
                      Clock PMS+ is a cloud-based property management system
                      designed to revolutionize hotel operations and enhance
                      guest experiences. Since 1996, it has been trusted by
                      leading hotels and resorts globally. This ultimate hotel
                      solution empowers staff with tools for seamless
                      operations, offers delightful guest journeys from booking
                      to check-out, ensures competitive payment options, and
                      facilitates the growth of services through integrated
                      add-ons. With excellent connectivity to various
                      applications and a user-friendly platform, Clock PMS+
                      stands as a cutting-edge solution for hotels aiming to
                      stay ahead in the dynamic hospitality industry.
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4">
                        <p>
                          Starting Price :
                          <span className="text-success fw-bold">
                            {" "}
                            Available on Request
                          </span>
                        </p>
                      </div>
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
                        <Link href="/aatithya">
                          <Image
                            src="/images/aatithya.jpg"
                            alt="aatithya"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/aatithya">
                          {" "}
                          <h5>Aatithya</h5>
                          <p>Software by Dataman Computer Systems.</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/aatithya">
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
                      Aatithya is a highly flexible Hotel Management Software
                      offered by Dataman Computer Systems Pvt Ltd. This
                      comprehensive solution automates operations for mid-sized
                      to large hotels, resorts, motels, restaurants, and cafes.
                      Aatithya covers front office and back office management,
                      restaurant POS, banquet management, club management, night
                      audit, procurement, housekeeping, and payroll. With
                      features like a booking engine and mobile app, it
                      maximizes ease in handling diverse hotel and hospitality
                      functions, enhancing revenue, and improving operational
                      efficiency. Exceptional customer support and industry
                      recognition make Aatithya a standout choice in hotel
                      management software.
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4">
                        <p>
                          Starting Price :
                          <span className="text-success fw-bold">
                            {" "}
                            Available on Request
                          </span>
                        </p>
                      </div>
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
                        <Link href="/ihospitality">
                          <Image
                            src="/images/ibs.png"
                            alt="ibs"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/ihospitality">
                          {" "}
                          <h5>iHospitality</h5>
                          <p>
                            IBS Hotel management,Bar Management,Club Managemnt
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/ihospitality">
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
                      iHospitality by IBS Software is a transformative sales and
                      distribution platform for the hospitality industry. It
                      seamlessly connects suppliers, distribution partners, and
                      users, ensuring the right product reaches the right guest
                      at the right price and timing. This intelligent suite of
                      precision distribution and sales products maximizes sales,
                      increases guest engagement, and simplifies operational
                      complexity for hotels. With a focus on creating a
                      frictionless guest shopping and booking experience,
                      iHospitality propels hotels into the digital era, driving
                      revenue opportunities and enhancing operational efficiency
                      in the evolving landscape of hospitality
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4">
                        <p>
                          Starting Price :
                          <span className="text-success fw-bold">
                            {" "}
                            Available on Request
                          </span>
                        </p>
                      </div>
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
                        <Link href="/romio-technologies">
                          <Image
                            src="/images/romio.png"
                            alt="romio"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/romio-technologies">
                          {" "}
                          <h5>Romio Technologies</h5>
                          <p>Best for chain of restaurants and hotels</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/romio-technologies">
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
                      Romio Technologies offers a software solution with over 11
                      years of expertise, specializing in ERP for the
                      Hospitality and F&B industry. Their POS and Billing
                      Solutions feature a range of machines and accessories,
                      seamlessly integrating cash drawers, thermal printers,
                      card readers, customer displays, and scanners. The Digital
                      Display Solutions include elegant LED Standees and Menu
                      Boards, providing a complete solution with multiple
                      display features. Their Billing and ERP Software Solutions
                      cater to various businesses, offering an easy-to-use
                      application with integrations for food aggregators,
                      messaging, and payments. With a diverse clientele, Romio
                      Technologies ensures smart, effective, and automated
                      technology to streamline business operations and enhance
                      customer satisfaction.
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4">
                        <p>
                          Starting Price :
                          <span className="text-success fw-bold">
                            {" "}
                            Available on Request
                          </span>
                        </p>
                      </div>
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
