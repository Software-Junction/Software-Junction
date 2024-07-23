import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Demo from "../common/demo";
import Pricemodal from "../common/price-modal";
import Needhelp from "../common/needHelp";

const List = ({ styles }) => {
  const products = [
    {
      name: "Astral Technologies",
      description:
        "Best Real Estate Software for Builders & Infrastructure Company",
      image: "/images/astralcon.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "astralcon",
      url: "/astral-tec",
      rating: 0.0,
      reviews: 0,
      details:
        "Astral Technologies offers Construction ERP Software, a robust solution designed to streamline project management and enhance efficiency in the construction industry. Tailored for diverse needs, including Real Estate and Manufacturing, their software ensures seamless execution from conceptualization to implementation. With a user-friendly interface, advanced technology integration, and extensive testing, Astral's Construction ERP Software guarantees a superior user experience. Trusted by clients across various sectors, it exemplifies excellence in application development, reflecting the company's commitment to technological leadership. Elevate your business with Astral Technologies, the forefront in innovative technology solutions.",
    },
    {
      name: "Contractor Foreman",
      description:
        "The Most Affordable All-in-One Construction Management Software",
      image: "/images/contractor-foreman.png",
      imageWidth: 140,
      imageHeight: 10,
      altText: "contractor-foreman",
      url: "/contractor-foreman",
      rating: 0.0,
      reviews: 0,
      details:
        "Contractor Foreman is an affordable construction management software designed to streamline project management for contractors worldwide. Packed with 35+ powerful features, it offers tools for project management, financial tracking, people management, and document organization. Forbes has recognized it for its exceptional ease of use. With capabilities ranging from Gantt scheduling to real-time cost tracking, the software caters to both experts and novices. It boasts a user-friendly interface accessible on tablets, phones, and computers. Pricing starts at $49/month, and the platform provides a 30-day free trial. Contractor Foreman is lauded for its integration with popular tools like QuickBooks, Google Calendar, and Outlook 365, making it a top choice for construction professionals globally.",
    },
    {
      name: "Bhoomi",
      description: "Cloud Based Construction Management Software",
      image: "/images/bhoomi.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "bhoomi",
      url: "/bhoomi",
      rating: 0.0,
      reviews: 0,
      details:
        "Bhoomi, developed by edynamics Tech Solutions Private Limited, is a comprehensive Business Management Software tailored for the Real Estate industry. With unlimited user access, project and company management capabilities, it ensures seamless operations. Monthly free upgrades and separate installations provide flexibility, while its integration with Google Cloud guarantees efficient performance and strict data privacy. Boasting a user-friendly interface, BMS has successfully handled 18,000 leads per day, managed 800 projects, and garnered a user base of 2,500 with a remarkable 30,000 units sold to date.",
    },
    {
      name: "Strategic ERP",
      description: "A complete Real Estate ERP Software",
      image: "/images/strategic-erp.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "strategic-erp",
      url: "/strategic-erp",
      rating: 0.0,
      reviews: 0,
      details:
        "StrategicERP is a software platform developed by ITAakash Strategic Software, catering to the Real Estate, Construction, and Infrastructure industries. This end-to-end process automation and information management system offer tailored solutions for project lifecycle management, empowering businesses with real-time analytics for informed decision-making. With a user-friendly interface and artificial intelligence integration, the software streamlines complex functions, enhances daily business activities, and ensures absolute customization. Trusted by over 1000 brands, StrategicERP is recognized for its cloud-based ERP, mobile-friendly experience, and complete digital media integration, providing a competitive edge in the 21st-century business landscape.",
    },
    {
      name: "Procore",
      description:
        "Best Construction Management Software India for Subcontractors",
      image: "/images/procore.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "procore",
      url: "/procore",
      rating: 0.0,
      reviews: 0,
      details:
        "Procore is a top-rated construction management platform designed to streamline and enhance the construction process. Tailored for owners, general contractors, and subcontractors, Procore offers a comprehensive suite of solutions, including project management, quality and safety monitoring, and financial management. With real-time visibility and seamless integration with 500+ applications, Procore enables effective collaboration, risk mitigation, and timely project delivery. Trusted by over 1,000,000 projects in 150+ countries, Procore stands out for its commitment to advancing the construction industry, fostering a global community, and providing unparalleled customer support.",
    },
    {
      name: "Tiemchart",
      description: "Best construction software by TIEMCHART",
      image: "/images/tiemchart.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "tiemchart",
      url: "/tiemchart",
      rating: 0.0,
      reviews: 0,
      details:
        "Tiemchart is a online project management software designed to empower businesses of all sizes. With over $3 Billion in successfully managed projects, it offers a unified platform for task, team, and resource management. The software provides interactive Gantt charts, task breakdowns, and efficient resource deployment for optimal results. Tiemchart's features include task, team, time, and resource management, along with project billing, costing, and reporting. With a focus on project profitability, it simplifies complex project portfolios, offering insights into ongoing projects, resource workloads, and revenue/cost control. Schedule a free demo to experience award-winning project management solutions.",
    },
    {
      name: "Tactive",
      description: "Construction Management Software",
      image: "/images/tactive.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "tactive",
      url: "/tactive",
      rating: 0.0,
      reviews: 0,
      details:
        "Tactive is an advanced Construction ERP Software, offering a comprehensive suite of modules tailored for the construction industry. With features spanning tender and estimation, budgeting, project management, procurement, inventory, equipment, finance, and HR/payroll, Tactive provides a unified and simplified solution for businesses. Utilizing cloud-based operations and a mobile application, it enables real-time data communication, remote monitoring, and an integrated platform for seamless workflow. Tactive's success is reflected in positive reviews from industry leaders, demonstrating its effectiveness in enhancing productivity and streamlining construction management processes.",
    },
    {
      name: "Viewpoint",
      description: "Building Construction Software by Viewpoint",
      image: "/images/viewpoint.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "viewpoint",
      url: "/viewpoint",
      rating: 0.0,
      reviews: 0,
      details:
        "Trimble Viewpoint is a construction software solution that forms part of Trimble Connected Construction. It offers award-winning document and drawing management, along with a construction field application, to facilitate on-time and on-budget project delivery. With features such as document and drawing management, site management, project management, BIM, and operations, Trimble Viewpoint helps centralize information, streamline workflows, and enhance collaboration across project teams. Trusted by over 8,000 global clients, Trimble Viewpoint is a long-term partner in construction operations management, offering a connected system designed for contractors to efficiently manage documents, drawings, and data throughout the project lifecycle.",
    },
    {
      name: "Binary Stream",
      description: "ERP Software For Construction Industry",
      image: "/images/binary-erp.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "binary-erp",
      url: "/binary-stream",
      rating: 0.0,
      reviews: 0,
      details:
        "Binary Stream offers a ERP solution, seamlessly integrated with Microsoft Dynamics platforms such as Dynamics 365 Finance and Operations, Dynamics 365 Business Central, and Dynamics GP. Specializing in real estate and property management, their software enables efficient handling of complex lease scenarios, tenant and landlord requirements, and diversified operations. With a focus on multi-entity management, the system provides centralized processing, robust reporting, and real-time resource management across various locations. Additionally, Binary Stream's Subscription Billing Suite automates invoice creation and distribution, ensuring timely payments and detailed financial insights. The purpose-built Dynamics GP Utilities further streamline document delivery and processing overhead. Contact Binary Stream for a cost-effective digital transformation tailored to your business needs.",
    },
    {
      name: "BlueDolphin",
      description: "Software by BAAP Technologies",
      image: "/images/bluedolphin.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "bluedolphin",
      url: "/bluedolphin",
      rating: 0.0,
      reviews: 0,
      details:
        "BlueDolphin is an intelligent platform designed to seamlessly integrate business and IT, fostering agile, data-driven, and collaborative transformation. With support for various modeling languages, it enables stakeholders to work cohesively across departments, ensuring quick input gathering without compromising data validity. This platform offers beautiful architectural design capabilities, supporting Archimate® and BPMN, allowing users to plan, design, and manage transformation solutions effortlessly. BlueDolphin's central repository facilitates the capture, management, and utilization of architecture objects, providing a single source of truth for apps, business processes, data, and technology. It excels in strategic business transformation, offering out-of-the-box solution templates and promoting iterative, continuous, and agile transformation.",
    },
    {
      name: "Projectmates",
      description: "Software by Systemates, Inc",
      image: "/images/projectmates.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "projectmates",
      url: "/projectmates",
      rating: 0.0,
      reviews: 0,
      details:
        "Projectmates is a construction project management software designed for Owners to efficiently manage projects from conception to completion. With over 20 years of trusted industry experience, it offers a suite of features including construction document management, cost control, workflow automation, capital project planning, schedule management, and robust analytics and reporting tools. The software ensures secure access to project documents from any device, streamlines workflows, and provides real-time data-driven decisions. Tailored for various industries such as government, healthcare, education, retail, real estate, and construction management firms, Projectmates is known for its versatility and user-friendly interface, supported by a dedicated customer service team.",
    },
    {
      name: "eBuild Construction",
      description: "Software for Builders & Contractors",
      image: "/images/ebuild.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "ebuild",
      url: "/ebuild-construction",
      rating: 0.0,
      reviews: 0,
      details:
        "eBuild Construction is a construction management software designed to streamline and optimize the entire process of custom home building and renovations. This software facilitates efficient consultation and planning, integrates seamlessly with architects and engineers for cohesive design-build solutions, manages a trusted network of subcontractors and suppliers for general contracting, and ensures successful project outcomes through streamlined construction management practices. With a focus on cost-effectiveness, quality workmanship, and client satisfaction, eBuild Construction aims to build lasting customer relationships by delivering superior results in the construction industry.",
    },
    {
      name: "Farvision ERP",
      description: "Software by Gamut infosystems ltd",
      image: "/images/farvision-erp.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "farvision-erp",
      url: "/farvision-erp",
      rating: 0.0,
      reviews: 0,
      details:
        "Farvision ERP is a and flexible cloud-based Real Estate ERP software in India, designed to unlock success in the real estate and construction industry. With a focus on implementing best industry practices, it seamlessly integrates functions across departments, providing anytime, anywhere access to company data. The software's key features include dashboards for quick access to business facts, catering to builders, property managers, HR and payroll, contractors, facility managers, and manufacturing units. Trusted by the industry for over 30 years, Farvision ERP has earned recognition as a preferred ERP partner and boasts a global presence with 7+ countries utilizing its services.",
    },
    {
      name: "Wrike",
      description: "Powerful collaboration tool for teams of all sizes",
      image: "/images/wrike.png",
      imageWidth: 130,
      imageHeight: 30,
      altText: "wrike",
      url: "/wrike",
      rating: 0.0,
      reviews: 0,
      details:
        "Wrike is a work management platform, trusted by over 20,000 organizations worldwide, offering enhanced collaboration, time-saving automation, and 360° visibility. Teams using Wrike experience a significant reduction in emails, streamlining work processes to drive efficiency across all departments. The platform ensures improved visibility, alignment, and the elimination of wasted efforts through automated workflows. With a focus on delivering business outcomes faster, Wrike aligns strategy with execution, supported by 400+ integrations for seamless project management. Its versatility, unique customization features, and user testimonials emphasize its effectiveness in maximizing team performance and accelerating growth.",
    },
    {
      name: "Buildesk",
      description: "Real estate CRM & ERP Software",
      image: "/images/builddesk.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "builddesk",
      url: "/buildesk",
      rating: 0.0,
      reviews: 0,
      details:
        "Buildesk is a top-notch CRM software tailored for real estate professionals, including brokers, consultants, builders, and property managers. Offering an end-to-end Proptech solution, Buildesk empowers users to seamlessly navigate the entire business journey, from lead generation to client retention. With a robust suite of tools, it ensures a smart and smooth experience for real estate professionals, enhancing productivity and customer service. Trusted by leading real estate companies and recognized with awards, Buildesk stands out for its comprehensive features, streamlined processes, and intelligent automation, making it the go-to solution for managing sales activities and optimizing operational efficiency in the real estate industry.",
    },
    {
      name: "4QT Real Estate ERP",
      description: "Software by 4th Quarter Technologies",
      image: "/images/4qt.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "4qt",
      url: "/4qt",
      rating: 0.0,
      reviews: 0,
      details:
        "4QT Real Estate ERP is a cloud-based or on-campus software solution tailored for the real estate industry, encompassing plot, villa, and high-rise developers. Established in 2001, 4QT is a leading provider of web software, offering advanced features such as CRM, billing and sales management, construction procurement, project planning, human resources, financial accounting, and facilities management. This innovative solution, REALBOOST™, empowers real estate developers, builders, agents, and property managers to efficiently manage large-scale projects across India, ensuring seamless lead management, post-sales customer care, and end-to-end project oversight.",
    },
    {
      name: "Real Builder by Dataman",
      description:
        "Complete Construction Management Software for Construction Industry",
      image: "/images/real-builder.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "real-builder",
      url: "/real-builder",
      rating: 0.0,
      reviews: 0,
      details:
        "Real Builder by Dataman is a ERP solution tailored for the real estate industry, offering a user-friendly interface for seamless project management. Trusted by over 100 real estate developers, builders, brokers, and agents, it streamlines tasks from planning to reporting. With 25 years of experience, Real Builder stands out for its stability, security, and customization, empowering users with modules such as Real Estate ERP, Sales/Billing, Procurement, Construction, Financial Accounting, Payroll, and Inventory. The software's key features include improved client records, CRM capabilities, and advanced reporting, making it an essential tool for efficient and successful construction management.",
    },
    {
      name: "In4Suite",
      description: "Accelerate Your Information",
      image: "/images/in4suite.jpg",
      imageWidth: 130,
      imageHeight: 10,
      altText: "in4suite",
      url: "/in4suite",
      rating: 0.0,
      reviews: 0,
      details:
        "In4Suite® is an ERP software designed for the Real Estate and Construction industry. This powerful platform offers complete visibility into business information, streamlining processes, improving efficiencies, managing complexities, and ultimately increasing revenue. With modules covering aspects such as land management, legal processes, project management, finance, HR, and more, In4Suite® ensures the seamless integration of all facets of a real estate and construction business. It features advanced Business Intelligence for insightful analytics, integrates with popular tools, and provides mobile apps for on-the-go management. In4Suite® is the go-to solution for automating and optimizing the day-to-day operations of real estate businesses, offering a user-friendly experience and world-class global support.",
    },
    {
      name: "Highrise ERP",
      description: "India's First Construction ERP Software",
      image: "/images/highrise.png",
      imageWidth: 120,
      imageHeight: 30,
      altText: "highrise",
      url: "/highrise",
      rating: 0.0,
      reviews: 0,
      details:
        "Highrise ERP is a specialized construction and real estate management software designed for the Indian market. This integrated solution covers a wide range of functions, including accounts and finance management, sales and CRM, project budgeting and management, procurement, inventory control, HR management, and more. It facilitates centralized document management, accurate project planning, and real-time data availability, making the organization more homogeneous. Available through licensing, annual subscription, or SaaS, Highrise ERP can be hosted on on-campus servers or in the cloud. The software streamlines processes from engineering and material management to contract, marketing, and financial accounts, enhancing efficiency and project control for construction companies.",
    },
  ];
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
  const handleShowDemo = (name) => {
    setShowDemo(true);
    setRefrence(name);
  };

  const handleClosePrice = () => setShowPrice(false);
  const handleShowPrice = (name) => {
    setShowPrice(true);
    setRefrence(name);
  };
  return (
    <>
      <section className={`${styles["list"]} mt-5 `}>
        <Container>
          <Row className="">
            <Col lg={12}>
              <h3>List of Best Softwares</h3>
            </Col>
            <Col lg={8}>
              {products
                .slice(0, isShowMore ? products.length : 10)
                .map((product, index) => (
                  <div
                    key={index}
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4`}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href={product.url}>
                          <Image
                            src={product.image}
                            alt={product.altText}
                            width={product.imageWidth}
                            height={product.imageHeight}
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href={product.url}>
                          <h5>{product.name}</h5>
                          <p>{product.description}</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href={product.url}>
                              <span className="span-style">
                                {product.rating.toFixed(1)}{" "}
                                <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>({product.reviews} Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">{product.details}</p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4">
                        <p></p>
                      </div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={() => handleShowDemo(product.name)}
                        >
                          Get Free Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="warning"
                          className="mx-3"
                          onClick={() => handleShowPrice(product.name)}
                        >
                          Get Pricing
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

              <Pricemodal
                reffer={refrence}
                show={showPrice}
                handleClose={handleClosePrice}
              />
              <Demo
                reffer={refrence}
                show={showDemo}
                handleClose={handleCloseDemo}
              />
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
