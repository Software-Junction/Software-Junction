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
                    <Link href="/ehospital">
                      <Image
                        src="/images/ehospital.jpg"
                        alt="ehospital"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/ehospital">
                      {" "}
                      <h5>e-Hospital</h5>
                      <p>Best Hospital Management Software for Doctor</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/ehospital">
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
                  e-Hospital, an integral part of India's Ayushman Bharath
                  Digital Mission, is a digital healthcare platform. Linked to
                  the Ayushman Bharath Health Account (ABHA), it empowers
                  patients with secure digital access to health records, lab
                  reports, and prescriptions. Offering modules for patient
                  registration, admission, billing, and clinic management, it
                  enhances operational efficiency in outpatient and inpatient
                  services. With seamless integration into the digital health
                  ecosystem, e-Hospital is a transformative solution, fostering
                  streamlined healthcare processes and patient-centric care.
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
                    <Link href="/mocdoc">
                      <Image
                        src="/images/mocdoc.png"
                        alt="mocdoc"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/mocdoc">
                      {" "}
                      <h5>MocDoc </h5>
                      <p>Complete End to End System for Managing Hospitals</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/mocdoc">
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
                  MocDoc is a comprehensive Hospital Management System (HMS) and
                  Professional Network that operates on a SaaS-based platform.
                  It serves as an integrated solution for healthcare
                  institutions globally, connecting all departments seamlessly.
                  MocDoc ensures accurate reporting, quality control, and
                  effective time management, contributing to enhanced
                  productivity. Notable features include advanced appointment
                  scheduling, technically advanced solutions, and integration
                  capabilities with LIS, PACS, and EMR systems. With a
                  decade-long presence in the healthcare industry, MocDoc stands
                  out for its customization and integration expertise, offering
                  tailored solutions for hospitals, clinics, labs, and
                  pharmacies. Trusted for its reliable support and advanced
                  functionalities, MocDoc is a cost-effective choice for
                  healthcare professionals.
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
                    <Link href="/vyapar-hospital-billing-software">
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
                    <Link href="/vyapar-hospital-billing-software">
                      {" "}
                      <h5>Vyapar Hospital Billing Software</h5>
                      <p>Hospital Accounting Solutions for Small Businesses</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/vyapar-hospital-billing-software">
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
                  Vyapar Hospital Billing Software is an advanced tool designed
                  to streamline and enhance the billing process within
                  healthcare organizations. It serves as a central platform for
                  managing patient bills efficiently, integrating with
                  healthcare records to ensure accurate accounting. The software
                  automates billing tasks, reducing human errors and improving
                  overall accounting performance. With features like real-time
                  updates, custom branding templates, and advanced reporting,
                  Vyapar empowers healthcare providers to make data-driven
                  decisions. It offers benefits such as streamlined billing
                  processes, simplified insurance claim processing, time and
                  cost savings, increased transparency, and error-free billing.
                  Vyapar's user-friendly interface, top-notch customer support,
                  and cost-effective pricing options make it the best choice for
                  hospitals seeking an efficient and reliable billing solution.
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
                    <Link href="/caresoft">
                      <Image
                        src="/images/caresoft.png"
                        alt="caresoft"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/caresoft">
                      {" "}
                      <h5>Caresoft</h5>
                      <p>Web Based Hospital Information System</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/caresoft">
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
                  Caresoft is a healthcare management software offering
                  solutions for hospitals, clinics, and diagnostic centers. With
                  a focus on optimizing workflows, the software enhances patient
                  care, resource management, and financial operations.
                  Caresoft's Hospital Information System (HIS) provides a
                  centralized, secure platform for automating clinical,
                  financial, and administrative processes. The system includes
                  Practice Management and Laboratory Information Systems,
                  catering to diverse healthcare needs. With over 15 years of
                  domain expertise, Caresoft ensures value for money solutions,
                  global adaptability, and a commitment to building a digital
                  healthcare ecosystem.
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
                    <Link href="/oracle-healthcare-cloud">
                      <Image
                        src="/images/oracle-healthcare.png"
                        alt="oracle-healthcare"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/oracle-healthcare-cloud">
                      {" "}
                      <h5>Oracle Healthcare Cloud</h5>
                      <p>Cost-Effective Hospital Management Solution</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/oracle-healthcare-cloud">
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
                  Oracle Healthcare Cloud (OCI) is a platform tailored for the
                  healthcare industry, offering a versatile solution to run a
                  spectrum of workloads. From traditional healthcare systems to
                  cutting-edge data science and machine learning applications,
                  OCI empowers providers to collaborate efficiently and derive
                  valuable insights. The platform facilitates predictive care
                  choices and risk factor analysis, contributing to better
                  patient-focused healthcare experiences. OCI supports rapid
                  development and prototyping of applications, ensuring seamless
                  integration with datasets and analyses. With secure migration
                  options for applications like Epic and Cerner, OCI upholds
                  data privacy through certifications such as HIPAA, providing
                  healthcare organizations with a comprehensive and innovative
                  infrastructure for streamlined operations and improved patient
                  outcomes.
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
                    <Link href="/crelio-health">
                      <Image
                        src="/images/crelio.jpg"
                        alt="crelio"
                        width="110"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/crelio-health">
                      {" "}
                      <h5>CrelioHealth LIMS </h5>
                      <p>Advanced web-based LIMS, PACS/RIS with Mobile Apps</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/crelio-health">
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
                  CrelioHealth's Laboratory Information Management System (LIMS)
                  stands out as the industry's best solution, boasting a 92%
                  satisfaction rate worldwide. This user-friendly and
                  cost-effective system optimizes lab operations from order
                  booking to report delivery, ensuring streamlined processes and
                  enhanced productivity. With features like configurable forms,
                  automated communications, and sample barcoding, it
                  revolutionizes sample journey management. The LIMS System also
                  excels in financial aspects, integrating seamlessly with
                  payment collections, RCM vendors, and providing detailed MIS
                  reports. CrelioHealth's LIMS is the epitome of a future-ready,
                  efficient, and secure lab management solution, applauded by
                  customers for its transformative impact on laboratory
                  workflows.
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
                    <Link href="/miracle-his">
                      <Image
                        src="/images/miracle.png"
                        alt="miracle"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/miracle-his">
                      {" "}
                      <h5>Miracle HIS</h5>
                      <p>Affordable Web-Based Hospital Management System</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/miracle-his">
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
                  Miracle HIS by Akhil Systems is a state-of-the-art web-based
                  Hospital Management Software designed for seamless healthcare
                  operations in a paperless environment. This modular system
                  integrates key hospital functions like Patient Registration,
                  OPD, IPD, OPD Pharmacy, Purchase, and Stores. With versions
                  catering to various hospital sizes, it offers quick access to
                  diverse patient information, facilitates remote data
                  accessibility, and serves as a decision support system.
                  Miracle HIS ensures efficient accounts management, error-free
                  record-keeping, and enhanced patient care in a cost-effective
                  manner, allowing doctors to focus more on clinical aspects.
                  Its comprehensive modules make it a valuable solution for
                  hospitals and healthcare institutions.
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
                    <Link href="/genipulse-hms">
                      <Image
                        src="/images/genipulse.png"
                        alt="genipulse"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/genipulse-hms">
                      {" "}
                      <h5>GeniPulse Hospital Management Software</h5>
                      <p>Complete & affordable Hospital Management System</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/genipulse-hms">
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
                  GeniPulse Hospital Management Software, developed by GeniPulse
                  Technologies, is a , modular solution designed for hospitals
                  and clinics of all sizes, ranging from small clinics to large
                  hospitals with up to 1000 bed capacity. This window-based
                  software integrates key aspects of hospital management,
                  including patient registration, OPD, IPD, laboratory,
                  pharmacy, and more, all in a paperless environment. The system
                  boasts a single database that links patient demographics and
                  medical records to insurance, billing, and cases information,
                  fostering streamlined operations, improved patient care, and
                  enhanced profitability. With features like a multi-tab
                  interface, multi-level security, and user-friendly design,
                  GeniPulse HMS ensures efficient and cost-effective healthcare
                  IT solutions.
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
                    <Link href="/medixcel">
                      <Image
                        src="/images/medixcel.png"
                        alt="medixcel"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/medixcel">
                      {" "}
                      <h5>Medixcel</h5>
                      <p>An Innovative Hospital Management System</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/medixcel">
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
                  Medixcel harmonizing Electronic Medical Records (EMR),
                  Practice Management, and Patient Engagement. Unleash a
                  comprehensive toolset that empowers healthcare professionals
                  to efficiently manage medical records, streamline practice
                  operations, and elevate patient interaction. This robust
                  platform, powered by advanced technology, ensures a
                  user-friendly experience while optimizing workflows in medical
                  practices. Explore the myriad features offered to enhance
                  overall efficiency and patient engagement.
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
                    <Link href="/visual-infosoft">
                      <Image
                        src="/images/visual-hospital.png"
                        alt="visual-hospital"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/visual-infosoft">
                      {" "}
                      <h5>Visual InfoSoft Pvt. Ltd</h5>
                      <p>Helps You Computerizing Your Hospital & Clinic</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/visual-infosoft">
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
                  Visual InfoSoft Pvt. Ltd. offers a comprehensive suite of
                  healthcare solutions developed since 1996, comprising 17+
                  specialized software products for various medical disciplines.
                  Their range includes Doctor/Clinic Software, Hospital
                  Management System, Diagnostic Software, Pharmacy Software, and
                  Billing Software, addressing the unique needs of
                  Ophthalmologists, ENT specialists, Psychologists,
                  Gynecologists, Physicians, Surgeons, Dermatologists,
                  Pediatricians, Dentists, and more. With a commitment to
                  simplicity and efficacy, Visual InfoSoft's products streamline
                  administrative tasks, providing powerful interfaces for
                  seamless patient-doctor-pharmacy-diagnostic connectivity. The
                  software is continually upgraded based on customer feedback,
                  ensuring optimal performance in the ever-evolving healthcare
                  landscape.
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
                        <Link href="/karexperts-hims">
                          <Image
                            src="/images/karexpert.png"
                            alt="karexpert"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/karexperts-hims">
                          {" "}
                          <h5>
                            KareXpert's Hospital Information Management System
                          </h5>
                          <p>Experience Digital Healthacare</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/karexperts-hims">
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
                      KareXpert's Hospital Information Management System (HIMS)
                      is a healthcare management software designed to streamline
                      hospital operations. It offers features such as role-based
                      access control, IPD and OPD management, billing solutions,
                      and facility management. With a user-friendly mobile and
                      web interface, it enhances digital presence and patient
                      engagement. The software covers diverse aspects, including
                      Emergency Response Care, Diet Management, and Patient
                      Feedback, ensuring efficient healthcare delivery.
                      KareXpert's HIMS empowers hospitals with a centralized
                      platform, incorporating AI, data analytics, and
                      connectivity across various healthcare domains for
                      improved patient care and operational excellence.
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
                        <Link href="/halemind">
                          <Image
                            src="/images/hale.png"
                            alt="hale"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/halemind">
                          {" "}
                          <h5>Halemind</h5>
                          <p>And Effective Hospital Management System</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/halemind">
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
                      Halemind is a Electronic Medical Records (EMR) and
                      Hospital Management System (HMS) designed to elevate
                      independent practices and hospitals. With advanced,
                      secure, and specialty-driven EHR technology, it simplifies
                      operations for private practices, hospitals, pharmacies,
                      and labs. Halemind empowers healthcare professionals with
                      evidence-based care, intuitive patient behavior tracking,
                      and streamlined scheduling through a smart calendar. The
                      platform offers a single-dashboard solution for
                      administrators, encompassing connected records, billing,
                      digital prescriptions, patient portals, and more. Beyond
                      mere management, Halemind creates a connected healthcare
                      platform, endorsed by satisfied users like Ophthalmologist
                      Dr. Madhavi and Homeopathic Consultant Dr. Sandeep
                      Selvinus, making it a comprehensive and user-friendly
                      solution for modern healthcare needs.
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
                        <Link href="/medisteer">
                          <Image
                            src="/images/medisteer.png"
                            alt="medisteer"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/medisteer">
                          {" "}
                          <h5>MediSteer</h5>
                          <p>A web-based hospital management ERP</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/medisteer">
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
                      MediSteer is a web-based hospital management system
                      developed by Adroit Soft India. This comprehensive product
                      addresses the operational and managerial needs of
                      hospitals, ranging from small clinics to large-scale
                      medical facilities. Designed collaboratively by medical
                      professionals and engineers, MediSteer enhances
                      operational efficiency, reduces costs, and minimizes
                      medical errors. With seamless data flow across
                      departments, online consultation capabilities, and
                      integrated modules covering outpatient and inpatient
                      management, pharmacy, laboratory, finance, and more,
                      MediSteer ensures a holistic solution for healthcare
                      institutions, promoting improved patient care, increased
                      staff productivity, and overall customer satisfaction.
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
                        <Link href="/hospilogix">
                          <Image
                            src="/images/hospilogix.png"
                            alt="hospilogix"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/hospilogix">
                          {" "}
                          <h5>Hospilogix</h5>
                          <p>Improve Scalability With HospiLogix</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/hospilogix">
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
                      NextGen's Hospilogix is a web-based Hospital Management
                      Software (HMS) solution designed on open-source
                      technologies. With a proven track record in over 100
                      hospitals across India, ranging from 30 to 800 bed units,
                      it offers seamless electronic management of critical
                      hospital functions, from patient registration to
                      discharge. Notable clients include Medanta, Metro Group of
                      Hospitals, Primus Group of Hospitals, the Indian Army, and
                      the Indian Air Force. This comprehensive HMS solution
                      ensures NABH and NABL compliance, quick implementation
                      (some units in just 3 days), and 7-day support for
                      critical issues.
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
                        <Link href="/suvarna-technosoft-hims">
                          <Image
                            src="/images/suvarna.png"
                            alt="suvarna"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/suvarna-technosoft-hims">
                          {" "}
                          <h5>
                            Suvarna Technosoft's Hospital Information Management
                            System
                          </h5>
                          <p>Software by Suvarna Technosoft Pvt Ltd</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/suvarna-technosoft-hims">
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
                      Suvarna Technosoft's Hospital Information Management
                      System (HIMS) is an innovative software solution designed
                      to optimize healthcare operations, enhance patient care,
                      and improve engagement. With 23 years of excellence,
                      Suvarna HIMS offers a suite of products including
                      Laboratory Information Management System (SLIMS),
                      Electronic Medical Record (EMR), Digital Campus Management
                      System, Radiology Information System (RIS), Business
                      Intelligence & MIS, and Document Management System.
                      Engineered for simplicity, reliability, and proven
                      performance, the HIMS has been adopted by over 500
                      healthcare organizations, serving 15,000+ physicians,
                      36,000+ healthcare professionals, and managing 60 million
                      patient records. Suvarna HIMS is an accessible and
                      affordable choice, making proven and reliable healthcare
                      solutions available to providers worldwide.
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
                        <Link href="/knowit-hms">
                          <Image
                            src="/images/knowit.png"
                            alt="knowit"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/knowit-hms">
                          {" "}
                          <h5>KnowIT HMS</h5>
                          <p>Hospital Management System</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/knowit-hms">
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
                      KnowIT HMS, a Hospital Management System meticulously
                      crafted for seamless healthcare administration. This
                      integrated ERP solution revolutionizes hospital
                      operations, from patient registration and clinical support
                      to billing, finance, and inventory management. Developed
                      with the latest MVC technology, KnowIT HMS offers a
                      versatile web-based platform available in both SaaS and
                      On-Premise models. Whether for a small clinic or a
                      multi-specialty hospital, KnowIT HMS streamlines processes
                      with modules like Front Office, Clinical Support, and
                      Billing & Collection. Its user-friendly design, modular
                      approach, and robust security features make it an
                      indispensable tool for healthcare institutions seeking
                      efficiency and reliability in their operations. Experience
                      the future of healthcare management with KnowIT HMS.
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
                        <Link href="/doc-engage">
                          <Image
                            src="/images/docengage.png"
                            alt="docengage"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/doc-engage">
                          {" "}
                          <h5>DocEngage</h5>
                          <p>India's No:1 EHR/EMR</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/doc-engage">
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
                      DocEngage, a healthcare management solution designed to
                      revolutionize the way medical institutions operate.
                      Offering a holistic platform for both single and
                      multi-speciality hospitals, DocEngage provides a suite of
                      six products, over 30 apps, and seamless integrations to
                      streamline every aspect of healthcare management. From
                      comprehensive hospital management to advanced telehealth
                      services, our platform ensures security with encryption,
                      role-based access control, and full HIPAA compliance.
                      Trusted by renowned healthcare providers like Apollo
                      Homecare and Grand World Elder Care, DocEngage stands as a
                      beacon of innovation, enhancing patient care, engagement,
                      and overall operational efficiency. Join us on the
                      forefront of Digital Healthcare with DocEngage!
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
                        <Link href="/qualis-lims">
                          <Image
                            src="/images/qualis.png"
                            alt="qualis"
                            width="90"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/qualis-lims">
                          {" "}
                          <h5>Qualis LIMS</h5>
                          <p>LAboratory Information Management System</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/qualis-lims">
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
                      Qualis LIMS is an advanced Laboratory Information
                      Management System, uniquely tailored to digitally
                      transform laboratories across diverse industries such as
                      Pharmaceuticals, Lifesciences, and more. Offering a
                      seamless blend of versatility and user-friendly design,
                      this software optimizes operations by automating processes
                      and eliminating paper-based workflows. Boasting integrated
                      modules for sample management, project tracking, and
                      result analysis, Qualis LIMS stands out with its dynamic
                      dashboards and configurable templates. With features like
                      resource planning, compliance adherence, and electronic
                      signatures, it ensures time-saving, reliable, and
                      compliant laboratory operations, fostering uniformity,
                      precision, and an enhanced user experience.
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
                        <Link href="/mmi-softwares">
                          <Image
                            src="/images/mmi-mediface.jpg"
                            alt="mmi-mediface"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/mmi-softwares">
                          {" "}
                          <h5> MMI Softwares </h5>
                          <p>Exclusively Designed for Hospitals</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/mmi-softwares">
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
                      The Hospital Management System by MMI Softwares is an
                      integrated information system designed to streamline and
                      enhance all aspects of a hospital's operations. This
                      comprehensive software manages medical, financial,
                      administrative, legal, and compliance functions,
                      incorporating electronic health records, business
                      intelligence, and revenue cycle services. Tailored for
                      ease of use, the system aims to optimize administration,
                      improve patient care, and maximize revenue for healthcare
                      providers in India. MMI Softwares' Hospital Management
                      Software offers a digital solution that efficiently
                      handles diverse organizational and service processes,
                      promoting seamless collaboration and information sharing
                      across healthcare settings.
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
                        <Link href="/administator-plus">
                          <Image
                            src="/images/administratorplus.jpg"
                            alt="administratorplus"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/administator-plus">
                          {" "}
                          <h5>Administrator Plus</h5>
                          <p>Software by Accurate Info Soft Pvt. Ltd.</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/administator-plus">
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
                      Administrator Plus by Accurate Infosoft, a cutting-edge
                      Hospital Management System Software that stands at the
                      forefront of healthcare administration. With over 25 years
                      of expertise and 200 successful implementations,
                      Administrator Plus offers end-to-end ERP solutions,
                      seamlessly integrating the latest technology to streamline
                      hospital processes. This robust software, designed for
                      multi-specialty hospitals, automates tasks such as
                      billing, appointments, scheduling, and financial auditing,
                      ensuring efficient management. Utilizing Microsoft
                      technologies for the front end and flexible back ends like
                      Oracle and SQL, Administrator Plus is the epitome of
                      innovation, enhancing data security, improving patient
                      care, and revolutionizing the landscape of healthcare
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
                        <Link href="/amrita-his">
                          <Image
                            src="/images/amrita.png"
                            alt="amrita"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/amrita-his">
                          {" "}
                          <h5>Amrita Hospital Information System </h5>
                          <p>
                            Amrita HIS is built on an EMR Foundation for multi
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/amrita-his">
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
                      Amrita Hospital Information System (AHIS), a pioneering
                      healthcare informatics suite meticulously crafted by
                      Amrita Vishwa Vidyapeetham. This cutting-edge software
                      represents the epitome of innovation, seamlessly blending
                      science and spirituality to create a platform-independent,
                      fully integrated Enterprise Information System. AHIS
                      stands as a testament to Amrita's leadership in research
                      and development, providing a holistic approach to patient
                      care management across clinical domains. Certified as a
                      Complete EHR, it not only meets international standards
                      but also fosters research, development, and global
                      advancements in medical informatics. Step into the future
                      of healthcare with AHIS, where technology and compassion
                      converge for a transformative impact on healthcare
                      delivery.
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
                        <Link href="/aarogya-hmis">
                          <Image
                            src="/images/aarogya.png"
                            alt="aarogya"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/aarogya-hmis">
                          {" "}
                          <h5>Aarogya HMIS</h5>
                          <p>HOSPITAL SOFTWARE BY Dataman Computer Systems</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/aarogya-hmis">
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
                      Aarogya, the pinnacle of healthcare efficiency and
                      precision. Aarogya stands as a fully integrated Hospital
                      Management Information System (HMIS), catering to the
                      diverse needs of mid-size to large hospitals,
                      laboratories, and polyclinics. With its state-of-the-art
                      features, Aarogya ensures seamless management of
                      outpatient (OPD) and inpatient (IPD) processes, organized
                      operation theater schedules, and streamlined insurance
                      management through integrated TPA modules. From pathology
                      and pharmacy software to comprehensive inventory control,
                      Aarogya optimizes every facet of healthcare
                      administration. Experience transparency in financial
                      processes, coupled with robust payroll and HR management.
                      With additional modules for Blood Bank and Radiology,
                      Aarogya emerges as the ultimate solution for comprehensive
                      healthcare management. Welcome to a new era of healthcare
                      efficiency with Aarogya.
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
