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
                    <Link href="/astral-tec">
                      <Image
                        src="/images/astralcon.png"
                        alt="astralcon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/astral-tec">
                      {" "}
                      <h5>Astral Technologies</h5>
                      <p>
                        Best Real Estate Software for Builders & Infrastructure
                        Company
                      </p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/astral-tec">
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
                  Astral Technologies offers Construction ERP Software, a robust
                  solution designed to streamline project management and enhance
                  efficiency in the construction industry. Tailored for diverse
                  needs, including Real Estate and Manufacturing, their software
                  ensures seamless execution from conceptualization to
                  implementation. With a user-friendly interface, advanced
                  technology integration, and extensive testing, Astral's
                  Construction ERP Software guarantees a superior user
                  experience. Trusted by clients across various sectors, it
                  exemplifies excellence in application development, reflecting
                  the company's commitment to technological leadership. Elevate
                  your business with Astral Technologies, the forefront in
                  innovative technology solutions
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
                    <Link href="/banibro-solution">
                      <Image
                        src="/images/banibro.png"
                        alt="banibro"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/banibro-solution">
                      {" "}
                      <h5>Banibro Solutions</h5>
                      <p>We can make IT possible</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/banibro-solution">
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
                  Banibro Solutions offers Odoo ERP, a customizable business
                  management solution. With a successful 10-year track record,
                  Banibro specializes in rapid Odoo ERP implementation,
                  providing a user-friendly interface, enhanced mobility, and
                  tailored customization options. The software includes advanced
                  CRM integration, seamless business automation modules like
                  Odoo CRM, Invoicing, and Sales, empowering businesses with
                  faster time-to-market, domain expertise, and excellent client
                  experiences. Banibro's approach involves thorough requirements
                  understanding, documentation, solutioning, communication,
                  training, testing, UAT, and go-live support. Clients praise
                  the product for its transformative impact on various
                  industries.
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
                    <Link href="/buildium">
                      <Image
                        src="/images/buildium.png"
                        alt="buildium"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/buildium">
                      {" "}
                      <h5>Buildium</h5>
                      <p>Cloud-based property management software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/buildium">
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
                  Buildium is an all-in-one property management software
                  designed to streamline operations for property managers and
                  real estate professionals. With a cloud-based platform, it
                  offers features such as rental listings, tenant screening,
                  lease management, rent collection, property accounting,
                  maintenance requests, and communication tools. The software
                  caters to a range of property types, including single-family
                  homes, small multifamily units, community associations,
                  student housing, commercial properties, and affordable
                  housing. Buildium enhances efficiency by automating day-to-day
                  tasks, improving organization through centralized data, and
                  ultimately creating a better experience for property owners,
                  tenants, and homeowners.
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
                    <Link href="/highrise">
                      <Image
                        src="/images/highrise.png"
                        alt="highrise"
                        width="120"
                        height="30"
                        className={`${styles["box-img"]} border p-4 rounded-3 h-75 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/highrise">
                      {" "}
                      <h5>Highrise ERP</h5>
                      <p>Real Estate ERP Software for Construction</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/highrise">
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
                  Highrise ERP is a specialized construction and real estate
                  management software designed for the Indian market. This
                  integrated solution covers a wide range of functions,
                  including accounts and finance management, sales and CRM,
                  project budgeting and management, procurement, inventory
                  control, HR management, and more. It facilitates centralized
                  document management, accurate project planning, and real-time
                  data availability, making the organization more homogeneous.
                  Available through licensing, annual subscription, or SaaS,
                  Highrise ERP can be hosted on on-campus servers or in the
                  cloud. The software streamlines processes from engineering and
                  material management to contract, marketing, and financial
                  accounts, enhancing efficiency and project control for
                  construction companies.
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
                    <Link href="/binary-stream">
                      <Image
                        src="/images/binary-erp.png"
                        alt="binary-erp"
                        width="130"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/binary-stream">
                      {" "}
                      <h5>Binary Stream</h5>
                      <p>Best ERP Software for Real Estate</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/binary-stream">
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
                  Binary Stream offers a ERP solution, seamlessly integrated
                  with Microsoft Dynamics platforms such as Dynamics 365 Finance
                  and Operations, Dynamics 365 Business Central, and Dynamics
                  GP. Specializing in real estate and property management, their
                  software enables efficient handling of complex lease
                  scenarios, tenant and landlord requirements, and diversified
                  operations. With a focus on multi-entity management, the
                  system provides centralized processing, robust reporting, and
                  real-time resource management across various locations.
                  Additionally, Binary Stream's Subscription Billing Suite
                  automates invoice creation and distribution, ensuring timely
                  payments and detailed financial insights. The purpose-built
                  Dynamics GP Utilities further streamline document delivery and
                  processing overhead. Contact Binary Stream for a
                  cost-effective digital transformation tailored to your
                  business needs.
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
                    <Link href="/strategic-erp">
                      <Image
                        src="/images/strategic-erp.png"
                        alt="strategic-erp"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/strategic-erp">
                      {" "}
                      <h5>Strategic ERP</h5>
                      <p>A complete Real Estate ERP Software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/strategic-erp">
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
                  StrategicERP is a software platform developed by ITAakash
                  Strategic Software, catering to the Real Estate, Construction,
                  and Infrastructure industries. This end-to-end process
                  automation and information management system offer tailored
                  solutions for project lifecycle management, empowering
                  businesses with real-time analytics for informed
                  decision-making. With a user-friendly interface and artificial
                  intelligence integration, the software streamlines complex
                  functions, enhances daily business activities, and ensures
                  absolute customization. Trusted by over 1000 brands,
                  StrategicERP is recognized for its cloud-based ERP,
                  mobile-friendly experience, and complete digital media
                  integration, providing a competitive edge in the 21st-century
                  business landscape.
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
                    <Link href="/in4suite">
                      <Image
                        src="/images/in4suite.jpg"
                        alt="in4suite"
                        width="130"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/in4suite">
                      {" "}
                      <h5>In4Suite</h5>
                      <p>Software for Real Estate Developers and Agents</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/in4suite">
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
                  In4Suite® is a ERP software designed for the Real Estate and
                  Construction industry. This powerful platform offers complete
                  visibility into business information, streamlining processes,
                  improving efficiencies, managing complexities, and ultimately
                  increasing revenue. With modules covering aspects such as land
                  management, legal processes, project management, finance, HR,
                  and more, In4Suite® ensures the seamless integration of all
                  facets of a real estate and construction business. It features
                  advanced Business Intelligence for insightful analytics,
                  integrates with popular tools, and provides mobile apps for
                  on-the-go management. In4Suite® is the go-to solution for
                  automating and optimizing the day-to-day operations of real
                  estate businesses, offering a user-friendly experience and
                  world-class global support.
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
                    <Link href="/bhoomi">
                      <Image
                        src="/images/bhoomi.jpg"
                        alt="bhoomi"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/bhoomi">
                      {" "}
                      <h5>Bhoomi</h5>
                      <p>Best System for Real Estate Industry</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/bhoomi">
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
                  Bhoomi, developed by edynamics Tech Solutions Private Limited,
                  is a comprehensive Business Management Software tailored for
                  the Real Estate industry. With unlimited user access, project
                  and company management capabilities, it ensures seamless
                  operations. Monthly free upgrades and separate installations
                  provide flexibility, while its integration with Google Cloud
                  guarantees efficient performance and strict data privacy.
                  Boasting a user-friendly interface, BMS has successfully
                  handled 18,000 leads per day, managed 800 projects, and
                  garnered a user base of 2,500 with a remarkable 30,000 units
                  sold to date.
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
                    <Link href="/daebuild-crm">
                      <Image
                        src="/images/daebuild.png"
                        alt="daebuild-img"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/daebuild-crm">
                      {" "}
                      <h5>DaeBuild CRM</h5>
                      <p>Best Real Estate Software for Builders</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/daebuild-crm">
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
                  DaeBuild CRM is a Real Estate CRM software designed for
                  builders, offering end-to-end pre-sales and post-sales
                  automation. This versatile solution, accessible via web and
                  mobile apps on both iOS and Android platforms, facilitates
                  efficient lead management, cloud telephony integration, sales
                  tracking, customer accounts management, customer interactions,
                  document management, and marketing through email, SMS, and
                  more. With over 1500 projects implemented across India,
                  DaeBuild CRM ensures seamless processes such as
                  auto-invoicing, legal document generation, and 3-tier payment
                  reminders. The platform also includes modules for staff,
                  broker, and inventory management, providing a centralized hub
                  for real estate developers to enhance customer engagement and
                  build lasting relationships.
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
                    <Link href="/sell-do">
                      <Image
                        src="/images/selldo.png"
                        alt="selldo"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/sell-do">
                      {" "}
                      <h5>Sell.Do</h5>
                      <p>Leading Sales and Marketing CRM for Realtors</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/sell-do">
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
                  Sell.Do is India's premier Integrated Real Estate CRM
                  Solution, boasting 15+ years of industry expertise. Trusted by
                  over 1000 brands, including industry leaders like Casagrand,
                  Ansal Housing, and Hiranandani, Sell.Do has managed 50
                  million+ leads and facilitated 450 million+ customer
                  interactions in the real estate CRM industry. With USD 25
                  billion+ worth of real estate inventory sold, Sell.Do offers a
                  fully functional system in just 7 days, ISO 27001 compliance,
                  and seamless integrations. Recognized with multiple awards,
                  Sell.Do empowers real estate businesses through features like
                  lead and inventory management, marketing automation, team
                  collaboration, performance metrics, and online selling of
                  properties.
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
                        <Link href="/t3-software">
                          <Image
                            src="/images/t3soft.jpg"
                            alt="t3soft"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/t3-software">
                          {" "}
                          <h5>T3 Softwares</h5>
                          <p>Web Based CRM Software for Real Estate Industry</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/t3-software">
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
                      T3 Softwares is a business solution provider offering
                      innovative CRM and ERP software tailored for diverse
                      industries, including manufacturing, hospitality, real
                      estate, and more. Their feature-rich products encompass
                      production, accounting, inventory, web-based tools,
                      multi-company management, payroll, and sales, providing
                      streamlined solutions for efficient business operations.
                      With a customer-centric ideology, T3 stands out as a
                      leading player in Mumbai, excelling in web-based CRM and
                      ERP development, offering application outsourcing,
                      business consultancy, Android app development, and web
                      applications to address the evolving needs of medium to
                      large enterprises.
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
                        <Link href="/buildesk">
                          <Image
                            src="/images/builddesk.png"
                            alt="builddesk"
                            width="130"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/buildesk">
                          {" "}
                          <h5>Buildesk </h5>
                          <p>
                            Best Real Estate Software for Construction Industry
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/buildesk">
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
                      Buildesk is a top-notch CRM software tailored for real
                      estate professionals, including brokers, consultants,
                      builders, and property managers. Offering an end-to-end
                      Proptech solution, Buildesk empowers users to seamlessly
                      navigate the entire business journey, from lead generation
                      to client retention. With a robust suite of tools, it
                      ensures a smart and smooth experience for real estate
                      professionals, enhancing productivity and customer
                      service. Trusted by leading real estate companies and
                      recognized with awards, Buildesk stands out for its
                      comprehensive features, streamlined processes, and
                      intelligent automation, making it the go-to solution for
                      managing sales activities and optimizing operational
                      efficiency in the real estate industry.
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
                        <Link href="/ebuild-construction">
                          <Image
                            src="/images/ebuild.png"
                            alt="ebuild"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/ebuild-construction">
                          {" "}
                          <h5>eBuild Construction</h5>
                          <p>
                            Construction ERP Software for Real Estate Agents
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/ebuild-construction">
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
                      eBuild Construction is a construction management software
                      designed to streamline and optimize the entire process of
                      custom home building and renovations. This software
                      facilitates efficient consultation and planning,
                      integrates seamlessly with architects and engineers for
                      cohesive design-build solutions, manages a trusted network
                      of subcontractors and suppliers for general contracting,
                      and ensures successful project outcomes through
                      streamlined construction management practices. With a
                      focus on cost-effectiveness, quality workmanship, and
                      client satisfaction, eBuild Construction aims to build
                      lasting customer relationships by delivering superior
                      results in the construction industry.
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
                        <Link href="/simplify-em">
                          <Image
                            src="/images/Simplifyem.png"
                            alt="Simplifyem"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/simplify-em">
                          {" "}
                          <h5>SimplifyEm</h5>
                          <p>Software by SimplifyEm Inc</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/simplify-em">
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
                      SimplifyEm is a efficient property management software
                      designed for real estate professionals, offering a
                      comprehensive suite of tools to streamline tasks for
                      property managers and landlords. With features such as
                      income and expense tracking, online rental payment
                      collection, tenant screening, and digital lease
                      signatures, SimplifyEm aims to simplify property
                      management processes. The software also provides portals
                      for seamless communication with tenants and owners,
                      professional owner reports, and detailed financial
                      reports, including tax reports. Notably, it stands out for
                      its affordability, responsive US-based support, and over
                      $42 billion in managed property assets since its
                      establishment in 2006. Try SimplifyEm for free with no
                      credit card required.
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
                        <Link href="/oasys-tech">
                          <Image
                            src="/images/oasys.png"
                            alt="axisrooms"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/oasys-tech">
                          {" "}
                          <h5>OASYS Tech Solutions</h5>
                          <p>Software by Oasys Tech Solution Pvt Ltd.</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/oasys-tech">
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
                      OASYS Tech Solutions is a leading IT consultancy and
                      solutions provider, established in 2012 and headquartered
                      in Odisha, India. Specializing in technology outsourcing,
                      the company excels in delivering top-notch IT consultancy
                      and ERP (SAP) services with a global reach. With over 11
                      years of successful operations and collaboration with
                      international affiliates, OASYS Tech Solutions is
                      committed to building lasting partnerships, fostering
                      growth, and shaping the future of technology-driven
                      business solutions. The company's expertise spans software
                      asset management, privileged access, software licensing,
                      and enterprise services, with a remarkable 99.9% customer
                      satisfaction rate based on 750+ reviews and 20,000
                      objective resources.
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
                        <Link href="/4qt">
                          <Image
                            src="/images/4qt.jpg"
                            alt="4qt"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/4qt">
                          {" "}
                          <h5>4QT Real Estate ERP</h5>
                          <p>Software by 4th Quarter Technologies</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/4qt">
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
                      4QT Real Estate ERP is a , cloud-based or on-campus
                      software solution tailored for the real estate industry,
                      encompassing plot, villa, and high-rise developers.
                      Established in 2001, 4QT is a leading provider of web
                      software, offering advanced features such as CRM, billing
                      and sales management, construction procurement, project
                      planning, human resources, financial accounting, and
                      facilities management. This innovative solution,
                      REALBOOST™, empowers real estate developers, builders,
                      agents, and property managers to efficiently manage
                      large-scale projects across India, ensuring seamless lead
                      management, post-sales customer care, and end-to-end
                      project oversight.
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
                        <Link href="/real-builder">
                          <Image
                            src="/images/real-builder.png"
                            alt="real-builder"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/real-builder">
                          {" "}
                          <h5>Real Builder by Dataman</h5>
                          <p>
                            Real Estate SOFTWARE BY Dataman Computer Systems.
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/real-builder">
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
                      Real Builder by Dataman is a ERP solution tailored for the
                      real estate industry, offering a user-friendly interface
                      for seamless project management. Trusted by over 100 real
                      estate developers, builders, brokers, and agents, it
                      streamlines tasks from planning to reporting. With 25
                      years of experience, Real Builder stands out for its
                      stability, security, and customization, empowering users
                      with modules such as Real Estate ERP, Sales/Billing,
                      Procurement, Construction, Financial Accounting, Payroll,
                      and Inventory. The software's key features include
                      improved client records, CRM capabilities, and advanced
                      reporting, making it an essential tool for efficient and
                      successful construction management.
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
                        <Link href="/property-able">
                          <Image
                            src="/images/property-able.jpg"
                            alt="property-able"
                            width="130"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/property-able">
                          {" "}
                          <h5>Property Able</h5>
                          <p>Software by CloudSteer Technology Pvt. Ltd.</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/property-able">
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
                      Property Able is a Real Estate Agency Management Software
                      designed for medium and large consultants and agents. This
                      web-based application streamlines day-to-day operations,
                      offering features such as multi-channel inquiries,
                      inventory management, property search, and customer
                      demand-supply matching. With user-friendly interfaces, it
                      enhances efficiency, allowing real estate professionals to
                      boost margins, increase revenues, and ensure customer
                      satisfaction. CloudSteer's Property Able revolutionizes
                      the real estate business, providing a comprehensive
                      solution for agents and developers to manage tasks
                      seamlessly and maximize success.
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
                        <Link href="/techzone">
                          <Image
                            src="/images/techzone.png"
                            alt="techzone"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/techzone">
                          {" "}
                          <h5>Techzone</h5>
                          <p>Software by Techzone India</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/techzone">
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
                      Techzone offers a comprehensive suite of IT solutions,
                      specializing in web and mobile app development, ERP and
                      CRM solutions, and digital marketing services. Their Real
                      Estate Portal Solutions, used in over 10 countries with 2
                      million property listings, feature custom designs,
                      extensive functionality, and mobile app readiness. With a
                      focus on fast development, innovative mobile app designs,
                      and cloud-based ERP solutions, Techzone ensures a
                      customer-first approach with lifetime support. Boasting
                      800+ successful deliveries, Techzone's extensive
                      experience and multi-cultural support make them a reliable
                      partner for small to mid-sized businesses seeking maximum
                      benefits from their IT investments.
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
                        <Link href="/property-xrm">
                          <Image
                            src="/images/property-xRM.png"
                            alt="property-xRM"
                            width="115"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/property-xrm">
                          {" "}
                          <h5> Property-xRM</h5>
                          <p>The Complete Real Estate Suite</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/property-xrm">
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
                      Property-xRM is a Real Estate CRM software powered by
                      Microsoft Dynamics 365. Tailored for homebuilders and
                      developers, it optimizes sales cycles with smart
                      automations, offering end-to-end solutions for residential
                      and commercial portfolios. This all-in-one software excels
                      in lead, inventory, marketing, document, reporting, and
                      maintenance management, ensuring efficient operations.
                      With a focus on customer relationships, it nurtures growth
                      in Real Estate and Proptech industries, leveraging the
                      latest in Microsoft technology and offering a unique,
                      user-centric CRM engine.
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
