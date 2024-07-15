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
                    <Link href="/schoolcanva">
                      <Image
                        src="/images/school.png"
                        alt="school"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/schoolcanva">
                      {" "}
                      <h5>Schoolcanvas.com</h5>
                      <p>No. 1 School ERP Software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/schoolcanva">
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
                  School Canvas is an all-encompassing school management
                  software that seamlessly automates diverse educational
                  processes. From admission procedures to fee collection,
                  academic analysis, and more, this platform provides a
                  360-degree solution. Boasting technical benefits such as
                  customization through open APIs, user-friendly interfaces, and
                  24/7 support with a 'Zero Trust' data security model, School
                  Canvas stands out as an end-to-end solution. With modules
                  covering Admission Management, Transport & GPS, Learning
                  Management, and more, it's a paperless, efficient tool for
                  550+ schools with over 13 years of experience and a 5-minute
                  customer support guarantee.
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
                    <Link href="/edumaat">
                      <Image
                        src="/images/edumaat-.png"
                        alt="edumaat"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/edumaat">
                      {" "}
                      <h5>EDUMAAT</h5>
                      <p>Best Campus Management system</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/edumaat">
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
                  EDUMAAT is a powerful and customizable Education ERP Software
                  designed to streamline institute management processes in
                  India. With features tailored for management, faculty,
                  students, and parents, it offers automation, insightful
                  reporting, and efficient communication. Available in 100+
                  languages, it boasts customization options, AWS hosting for
                  speed, and flexible pricing plans. The software's success
                  stories showcase its impact on institutions worldwide,
                  emphasizing user-friendliness, time-saving, and excellent
                  customer support. EDUMAAT is an integrated education
                  management system providing a comprehensive solution for
                  institutes seeking efficient administration and enhanced
                  collaboration.
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
                    <Link href="/digital">
                      <Image
                        src="/images/digital.jpg"
                        alt="digital school"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/digital">
                      {" "}
                      <h5>DIGITAL SCHOOL WEB SOLUTION</h5>
                      <p>Best Software Unlimited Student || Renewal Free</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/digital">
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
                  DIGITAL SCHOOL WEB SOLUTION is a leading indigenous,
                  customizable online school management software. This
                  comprehensive system addresses modern school administration
                  challenges by offering features such as a free school website
                  for global visibility, a custom mobile app for effective
                  communication, an extensive e-library with curriculum-based
                  e-books, accurate result checking, and free computer-based
                  testing. Additionally, it provides realistic science
                  simulations, making subjects come alive for students. The
                  platform is user-friendly and covers automated students'
                  registration, course registration, finance management, staff
                  and student database management, email services, bulk SMS,
                  e-examinations, web content management, JAMB CBT testing,
                  E-Library, and payment systems. Transform your school
                  administration seamlessly with DIGITAL SCHOOL WEB SOLUTION.
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
                    <Link href="/campus">
                      <Image
                        src="/images/camp365.png"
                        alt="campus365"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/campus">
                      {" "}
                      <h5>Campus 365</h5>
                      <p>
                        Cloud-based school management software by Campus 365
                      </p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/campus">
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
                  Campus 365 is a pinnacle in institution and school ERP
                  software, serving as a holistic solution for educational
                  entities globally. With an intuitive interface, it seamlessly
                  automates the entire organizational value chain, covering
                  admissions, fee management, exam analysis, attendance
                  tracking, and library integration. Boasting powerful features
                  and adaptable dashboards, Campus 365 suits institutions of all
                  sizes, eliminating the need for extensive customization.
                  Trusted by over 2,000 institutes across 20+ countries, it
                  facilitates educational excellence through paperless
                  admissions, real-time exam insights, automated fee processing,
                  and seamless collaboration among students, parents, and
                  teachers.
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
                    <Link href="/matrix">
                      <Image
                        src="/images/classmatrix.png"
                        alt="classmatrix"
                        width="80"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/matrix">
                      {" "}
                      <h5>Class Matrix</h5>
                      <p>System by Classmatrix</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/matrix">
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
                  Class Matrix is an all-encompassing school management software
                  that revolutionizes educational institutions by seamlessly
                  integrating interactive online lectures, online exams, and an
                  E-payment system. It streamlines academic and operational
                  processes, offering features such as live teaching with Zoom
                  integration, efficient fee collection through a payment
                  gateway, and comprehensive tools for online assessment
                  tracking and progress reporting. With functionalities like
                  student CRM, staff management, and real-time notifications,
                  Class Matrix provides a robust solution for educational
                  institutions, ensuring efficient administration, transparent
                  fee management, and anytime, anywhere access through cloud
                  hosting.
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
                    <Link href="/chanakya">
                      <Image
                        src="/images/chanakya.png"
                        alt="chanakya"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/chanakya">
                      {" "}
                      <h5>Chanakya ERP</h5>
                      <p>Innovating Schools</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/chanakya">
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
                  Chanakya ERP, developed by Bicore Chanakya ERP Pvt. Ltd., is a
                  cutting-edge accounting and business management software with
                  100% automation in accounting. Recognized as India's first
                  software featuring an inbuilt GST return system, it
                  facilitates seamless filing with a single click, eliminating
                  the need to log in to the GST portal. Serving over 56,000
                  satisfied clients nationwide, including various industries,
                  Chanakya ERP offers hassle-free support through a ticketing
                  system and covers inventory, accounting, GST, e-Way Bill, and
                  e-Invoice processes. With affordable pricing options, lifetime
                  licenses, and advanced features like data backup, it ensures
                  efficient and error-free business operations.
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
                    <Link href="/fedena">
                      <Image
                        src="/images/fedena.png"
                        alt="fedena"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/fedena">
                      {" "}
                      <h5>Fedena</h5>
                      <p>All in one College & School Management Software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/fedena">
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
                  Fedena is an All-In-One College and School Management
                  Software, serving 40,000+ schools and colleges across 200+
                  countries in 20+ languages. This multipurpose system automates
                  daily operations, generates insightful reports, and
                  facilitates better decision-making for stakeholders. With 100+
                  modules, including Exam & Gradebook, Admission Tracking,
                  Timetable & Attendance, Fees Management, and Online Classes
                  integration, Fedena is tailored for various education boards.
                  Its user-friendly design ensures simplicity for teachers,
                  while powerful features cater to all institutional needs. With
                  dedicated mobile apps and up to 20 integrations, Fedena is a
                  preferred choice, lauded for its efficiency by institutes like
                  Vidya Vikas Academy.
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
                    <Link href="/hdschool">
                      <Image
                        src="/images/hd.png"
                        alt="hdschool"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/hdschool">
                      {" "}
                      <h5>HD School</h5>
                      <p>A robust school management software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/hdschool">
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
                  HD School, developed by Hyper Drive Solutions, is a powerful
                  school management software designed to effortlessly handle
                  administrative tasks for educational institutions. This
                  intuitive solution covers diverse functionalities such as
                  student and course management, examination planning, library
                  organization, and efficient payroll management for teaching
                  and non-teaching staff. With features like fee management,
                  homework assignments, timetable generation, and attendance
                  tracking, HD School ensures seamless day-to-day operations.
                  Enjoy the convenience of robust reporting systems, including
                  daily fee collection, student pending fees, and customizable
                  mark sheets. Join the global community of satisfied customers
                  and experience the ease of HD School's online school
                  management system.
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
                    <Link href="/schoolknot">
                      <Image
                        src="/images/knot.png"
                        alt="schoolknot"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/schoolknot">
                      {" "}
                      <h5>Schoolknot</h5>
                      <p>One of the best school administration software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/schoolknot">
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
                  Schoolknot is a School Automation and Analytics platform
                  utilized by numerous schools to enhance efficiency in managing
                  registrations, curriculum schedules, events, attendance, and
                  homework. This centralized, user-friendly software ensures
                  seamless communication between parents, students, teachers,
                  and school faculty through smart notifications. Its robust
                  features include admissions management, finance tracking,
                  multi-branch administration, library management, exam result
                  handling, and school bus tracking. With customized mobile
                  applications for school branding, paperless event and holiday
                  sharing, and secure data handling, Schoolknot stands as
                  India's most preferred mobile-friendly solution for
                  comprehensive school management.
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
                    <Link href="/academia">
                      <Image
                        src="/images/academia.jpg"
                        alt="academia"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/academia">
                      {" "}
                      <h5>Academia</h5>
                      <p>School ERP system by Dataman Computer Systems</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/academia">
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
                  Academia, developed by Serosoft Solutions, is a
                  state-of-the-art School Management System designed to
                  streamline K12 educational processes. Offering a 3-way
                  advantage, it serves as a K12 Student Information System,
                  School Management System, and resource planner. With a focus
                  on automation, it reduces human intervention by 10X across
                  operations like admissions, attendance, examinations, and
                  student management. The system enhances the parent experience
                  through seamless communication, real-time student performance
                  reports, and dedicated portals. Academia SMS ensures
                  standardized processes, cost reduction, and ease of
                  integration with other applications for a cohesive educational
                  experience.
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
                        <Link href="/schoolpro">
                          <Image
                            src="/images/pro.jpg"
                            alt="schoolpro"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/schoolpro">
                          {" "}
                          <h5>SchoolPRO</h5>
                          <p>All-in-one best school management software</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/schoolpro">
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
                      SchoolPRO is a user-friendly and affordable school
                      administration software, streamlining complex tasks for
                      educational institutions. Offering rich functionality and
                      customizable reporting, it empowers schools to confidently
                      manage day-to-day operations. With seamless integration
                      capabilities, SchoolPRO connects with finance software and
                      learning management systems, enhancing overall efficiency.
                      Trusted by schools in Australia, Asia, and beyond, this
                      software ensures smart workflows and robust data integrity
                      checks for a hassle-free administration experience.
                      Experience the simplicity and flexibility of SchoolPRO,
                      making school management easy, clever, and different.
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
                        <Link href="/orataro">
                          <Image
                            src="/images/orataro.png"
                            alt="orataro"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/orataro">
                          {" "}
                          <h5>ORATARO</h5>
                          <p>Smart school management software solution</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/orataro">
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
                      ORATARO stands as an advanced, all-encompassing school
                      education platform, serving 900 institutes with a
                      dedicated network of 23,500 highly skilled teachers
                      committed to student success. Tailored to the needs of
                      650,000 students, it provides smart study features and
                      real-time updates on class activities, circulars, and
                      homework. ORATARO's comprehensive framework addresses the
                      learning, communication, and management requirements of
                      students, teachers, parents, and schools. With a
                      commitment to seamless education, it has become the go-to
                      solution for an enhanced and integrated school management
                      experience.
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
                        <Link href="/schoolpad">
                          <Image
                            src="/images/schoolpad.png"
                            alt="schoolpad"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/schoolpad">
                          {" "}
                          <h5>SchoolPad</h5>
                          <p>Build a Remarkable School</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/schoolpad">
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
                      SchoolPad is India's leading School Management Software,
                      offering a comprehensive ERP system designed to enhance
                      school efficiency through digitization and automation.
                      Trusted by 8000+ educators, it facilitates seamless
                      organization and management of student progress, fostering
                      better parent-teacher communication. With powerful
                      features, including pre-admission inquiries, student data
                      management, attendance tracking, examination and result
                      generation, online fee transactions, and more, SchoolPad
                      brings a digital transformation to schools. Over 300
                      schools have chosen SchoolPad to streamline their
                      operations, making it the go-to solution for running
                      educational institutions more effectively.
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
                        <Link href="/jupsoft">
                          <Image
                            src="/images/jobsoft.png"
                            alt="jobsoft"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/jupsoft">
                          {" "}
                          <h5>Jupsoft eConnect</h5>
                          <p>Cloud based School Management ERP Software</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/jupsoft">
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
                      Jupsoft eConnect-K12 is a revolutionary school management
                      ERP system, simplifying and accelerating daily school
                      processes. This advanced software reduces paperwork,
                      handles administration, and facilitates secure information
                      sharing across departments. With features like role-based
                      dashboards, paperless operations, and support for multiple
                      devices and OS, it ensures efficient and accessible school
                      management. Trusted by over 300 schools and 500,000 users,
                      it offers flexibility and adaptability, allowing
                      institutions to customize modules based on their
                      requirements. Jupsoft eConnect-K12 is a comprehensive
                      solution, providing always-updated, secure, and backed-up
                      data for streamlined decision-making in educational
                      institutions.
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
                        <Link href="/patasala">
                          <Image
                            src="/images/patasala.png"
                            alt="patasala"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/patasala">
                          {" "}
                          <h5>Patasala.in </h5>
                          <p>Software for Schools</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/patasala">
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
                      Patasala.in is an innovative school administration
                      software designed to enhance academic performance by
                      seamlessly connecting teachers, parents, and management.
                      With over 100 schools onboard, it offers a comprehensive
                      solution featuring mobile apps for various stakeholders, a
                      cloud-based web platform with customizable settings, and
                      40+ modules. The software prioritizes user-friendly
                      interfaces and industry-first solutions, such as
                      contactless attendance tracking, interactive training
                      through the "Teach me" tool, and a visual editor for
                      customizable report cards. Patasala.in stands out with its
                      pay-as-you-go model, onboarding support, continuous
                      enhancements, and quarterly team visits to ensure a
                      delightful experience for educators, parents, and
                      administrators.
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
                        <Link href="/scientific">
                          <Image
                            src="/images/scientific.png"
                            alt="scientific"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/scientific">
                          {" "}
                          <h5>
                            Scientific Study's School Management Software{" "}
                          </h5>
                          <p>Your two Goals..Save Time & Save Money.</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/scientific">
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
                      Scientific Study's School Management Software is a robust
                      solution tailored to empower schools, teachers, students,
                      and parents. With financial modules facilitating seamless
                      fee management, admission processes, and salary
                      administration, the software ensures efficient school
                      operations. The communication modules enable effective
                      messaging, news distribution, and streamlined report card
                      generation. Additionally, comprehensive administration
                      features, admission management capabilities, and extra
                      functionalities such as online classes and digital library
                      contribute to a transparent and integrated tool,
                      revolutionizing school administration, academic processes,
                      and communication channels
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
                        <Link href="/microweb">
                          <Image
                            src="/images/micro.png"
                            alt="microweb"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/microweb">
                          {" "}
                          <h5> Microweb Solutions </h5>
                          <p>Everyday a New Invention...</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/microweb">
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
                      Microweb Solutions presents a state-of-the-art School
                      Management System, utilizing cutting-edge technology to
                      deliver a user-friendly, web-based software for modern
                      schools. This ERP solution streamlines school
                      administration with customizable modules for daily
                      remarks, parent-teacher meetings, document and payroll
                      management, admissions, communication, examinations, and
                      more. Offering dedicated support and custom dashboards,
                      Microweb Solutions ensures easy accessibility, automation,
                      data security, and quick setup without the need for an IT
                      team. Integrated with various features such as biometric
                      machines, GPS tracking, online payments, and a mobile app,
                      it stands as India's most trusted platform for efficient
                      school management, saving time, resources, and reducing
                      workload.
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
                        <Link href="/scholarsys">
                          <Image
                            src="/images/scholar.png"
                            alt="scholar"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/scholarsys">
                          {" "}
                          <h5> ScholarSYS</h5>
                          <p>for All your Academic and Administrative needs</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/scholarsys">
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
                      ScholarSYS, introduced in 2015, stands out as the premier
                      School Management Software in India, offering a
                      cloud-based platform that seamlessly transitions major
                      school activities online. As a response to the challenges
                      posed by the Covid-19 outbreak, ScholarSYS emerged as an
                      essential tool for schools, effectively managing diverse
                      functions in an increasingly digital era. Distinguished by
                      its collaborative development with educational
                      stakeholders, ScholarSYS boasts a dedicated team of 50+
                      professionals committed to continual improvement and
                      innovation. The software provides a holistic solution for
                      schools, covering administration, academics, exams,
                      resource and finance management, and effective
                      communication.
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
                        <Link href="/vidyala">
                          <Image
                            src="/images/vidyalaya.png"
                            alt="vidyalaya"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/vidyala">
                          {" "}
                          <h5> Vidyalaya School ERP </h5>
                          <p>Computerizing Your School</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/vidyala">
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
                      Vidyalaya, a School Management System, is a transformative
                      solution for educational institutions worldwide. With a
                      track record of 22+ successful years and a global
                      clientele of 1600+, Vidyalaya redefines education
                      management through cutting-edge technology. This
                      comprehensive software handles all aspects, from
                      admissions to academic and staff management, integrating
                      features such as biometrics, virtual classes, and more.
                      The 96% client retention rate, 1500+ reports, and 2500+
                      verified reviews highlight its success. Vidyalaya's
                      recognition through awards makes it the preferred choice
                      for institutions seeking an efficient, user-friendly, and
                      affordable school management solution.
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
                        <Link href="/teachmint">
                          <Image
                            src="/images/teachmint.png"
                            alt="teachmint"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/teachmint">
                          {" "}
                          <h5> Teachmint </h5>
                          <p>
                            Digitize your school and become future ready now
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/teachmint">
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
                      Teachmint, an award-winning Integrated School Platform,
                      serves as a robust solution for efficient exam management.
                      With its Complete Mobile and Web Solution, Teachmint
                      simplifies operations for schools, offering features like
                      Fee Management, Student Information System, Admission
                      Management, and a powerful Learning Management System.
                      Trusted by over 15 million users across 25+ countries,
                      Teachmint stands out for its user-friendly interface,
                      dynamic fee structures, and real-time engagement tools. It
                      not only automates administrative processes for schools
                      but also provides a seamless learning experience, making
                      it a preferred choice for educators, students, and parents
                      worldwide.
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
                        <Link href="/macedms">
                          <Image
                            src="/images/mac.png"
                            alt="mac"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/macedms">
                          {" "}
                          <h5> Mac EDMS </h5>
                          <p>Educational Data Management System</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/macedms">
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
                      Mac EDMS is the premier Educational Data Management
                      System, standing out with its intelligent features and
                      cutting-edge technology. Trusted by over 1000 clients in
                      India and the UAE, it caters to 150+ school boards,
                      offering a customized school management system. With a
                      focus on user-friendly yet affordable experiences, Mac
                      EDMS brings a paperless administration, reducing costs by
                      98%, and integrates an SMS system for efficient
                      communication. Boasting 20+ modules, it ensures seamless
                      solutions for educational institutes, supported by 15+
                      years of experience, 100% customer satisfaction, and a
                      track record of 527 satisfied principals.
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
                        <Link href="/savischools">
                          <Image
                            src="/images/savi.jpg"
                            alt="savischool"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/savischools">
                          {" "}
                          <h5>Savischools</h5>
                          <p>
                            An easy school management system with mobile app.
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/savischools">
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
                      Savischools is an advanced Online School Management System
                      (ERP) powered by Amazon AWS, offering a centralized
                      platform for K-12 institutions and learning centers. This
                      comprehensive solution streamlines school operations, from
                      student admission and scheduling to library management,
                      eLearning, and biometric attendance integration. With a
                      user-friendly interface and 40+ modules, it ensures
                      efficient administration and fosters interactive
                      communication among students, teachers, parents, and
                      management. The platform provides free mobile apps for
                      parents and staff, coupled with complimentary support for
                      school setup, student records migration, and biometric
                      system integration. Embark on a modern and effective
                      school management journey with a free trial.
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
                        <Link href="/schoolcube">
                          <Image
                            src="/images/cube.jpg"
                            alt="schoolcube"
                            width="80"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/schoolcube">
                          {" "}
                          <h5>SchoolCube</h5>
                          <p>Software by Triz Innovation Pvt. Ltd</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/schoolcube">
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
                      SchoolCube - a School Information Management System
                      meticulously crafted to revolutionize academic
                      institutions. With a focus on enhancing efficiency and
                      eradicating data management challenges, SchoolCube offers
                      a comprehensive solution tailored to the unique needs of
                      schools. From simplified reporting and precise academic
                      record management to seamless communication with parents
                      and staff through instant messaging, SchoolCube is
                      designed for a user-friendly experience. Explore the power
                      of SchoolCube and elevate your school's operations in the
                      realm of effective communication and streamlined
                      management.
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
                        <Link href="/mmi">
                          <Image
                            src="/images/mmi.png"
                            alt="mmischool"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/mmi">
                          {" "}
                          <h5>MMI-School Management Software</h5>
                          <p>Software by MMI Softwares Pvt Ltd</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/mmi">
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
                      MMI introduces a top-rated School Management Software in
                      India, a modern cloud-based solution crafted to simplify
                      administrative tasks and boost efficiency in schools. This
                      advanced software fosters seamless communication between
                      parents and teachers, minimizing data entry efforts
                      through mobile and tablet accessibility. With bilingual
                      support and customization options, it caters to diverse
                      needs, ensuring secure electronic storage of information.
                      MMI's School Management Software stands as the ideal
                      choice for institutions seeking an effective, secure, and
                      flexible solution to streamline their accounting processes
                      and overall school management.
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
                        <Link href="/eschool">
                          <Image
                            src="/images/eschool.png"
                            alt="eschool"
                            width="80"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/eschool">
                          {" "}
                          <h5>eSchoolApp</h5>
                          <p>Software by Mushroom Softech Private Limited</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/eschool">
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
                      eSchoolApp, your gateway to a transformative educational
                      experience. As a cutting-edge cloud-based Educational
                      Institution Management Software, eSchoolApp redefines how
                      schools, preschools, colleges, and coaching classes
                      navigate the complexities of academic management. From
                      handling fees and attendance to streamlining results,
                      library, and online exams, eSchoolApp offers an
                      all-encompassing solution. Our commitment to innovation is
                      evident in features like Branded Apps, Automation, and
                      Premium Support, making us the preferred choice since
                      2008. Join us on a journey where technology meets
                      education seamlessly, bringing unparalleled efficiency and
                      connectivity to your institution.
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
