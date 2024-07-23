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
      name: "Horizon ERP",
      description: "Leading online ERP software",
      image: "/images/horizon.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "horizon",
      url: "/horizon",
      rating: 0.0,
      reviews: 0,
      details:
        "Horizon Tech Solutions, accessible at www.horizontechsolutions.co.in, is a leading technology company with a decade of experience in ERP solutions. They offer Horizon ERP, the finest ready-to-use GST billing and accounting software for small businesses in India. This user-friendly software streamlines back-end processes, such as billing, invoicing, and inventory management, allowing businesses in distribution, retail, and manufacturing to focus on revenue generation. Horizon ERP follows best technological practices and simplifies GST return filing, making it an invaluable tool for small enterprises. It provides full control and adapts seamlessly to existing business management systems.",
    },
    {
      name: "Viramati's ERP-FAMS",
      description: "Software by Virmati Software & Telecommunications Ltd.",
      image: "/images/virmati.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "Viramati",
      url: "/virmati-erp-fams",
      rating: 0.0,
      reviews: 0,
      details:
        "Viramati's ERP-FAMS, a cutting-edge Enterprise Resource Planning solution designed to streamline and enhance your business processes. With a user-friendly interface and robust functionality, ERP-FAMS empowers organizations to manage finances, automate workflows, and optimize resource utilization seamlessly. Tailored to meet diverse industry needs, this software offers real-time insights, fostering informed decision-making. Unlock efficiency and elevate your business operations with Viramati's ERP-FAMS, where innovation meets reliability.",
    },
    {
      name: "Oracle Fusion Cloud ERP",
      description: "SaaS solution with top ERP features & capabilities",
      image: "/images/oracle.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "oracle",
      url: "/oracle-fusion",
      rating: 0.0,
      reviews: 0,
      details:
        "Oracle ERP, which stands for Enterprise Resource Planning, is a versatile suite of business software applications designed to simplify and improve an organization's core operations. This powerful and flexible platform gives businesses the tools they need to effectively handle their finances, procurement processes, HR functions, and the complexities of their supply chain. By offering a unified solution for crucial business tasks, Oracle ERP enables companies to operate more efficiently, make well-informed decisions, and enhance their competitiveness in today's dynamic business world.",
    },
    {
      name: "TallyPrime",
      description: "Best ERP Systems for small and medium size businesses",
      image: "/images/tally.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "tally",
      url: "/tallyprime",
      rating: 0.0,
      reviews: 0,
      details:
        "TallyPrime is a comprehensive business management software designed to streamline and enhance various aspects of your business operations. With a user-friendly interface and powerful features like customizable reports, multi-company management, and efficient cash flow control, TallyPrime empowers you to make informed decisions and focus on business growth. Boasting high ratings on platforms like G2 and Capterra, TallyPrime offers seamless integration of accounting, inventory management, statutory compliance, payroll, and more. With a straightforward setup process, real-time mobile access to reports, and robust security measures, TallyPrime is a versatile solution for businesses of all sizes.",
    },
    {
      name: "Vyapar",
      description: "Accounting software by Vyapar for Small Business Owners",
      image: "/images/vyaparlogo.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "vyaparlogo",
      url: "/vyapar",
      rating: 0.0,
      reviews: 0,
      details:
        "Vyapar is a versatile accounting and billing software designed to simplify the financial management of businesses. With user-friendly features, it streamlines invoicing, expense tracking, and inventory management. This powerful tool is an excellent choice for small and medium-sized enterprises, offering cloud-based accessibility for easy collaboration. Vyapar empowers businesses to handle their finances efficiently, making it a go-to solution for entrepreneurs seeking a hassle-free accounting experience.",
    },
    {
      name: "Marg ERP 9+Accounting",
      description: "Manage your payables and receivables faster",
      image: "/images/marg.png",
      imageWidth: 110,
      imageHeight: 10,
      altText: "marg",
      url: "/margerp",
      rating: 0.0,
      reviews: 0,
      details:
        "Marg Compusoft is a powerful and versatile software platform designed to streamline and enhance your business operations. With a wide array of features, including inventory management, accounting, and point-of-sale solutions, Marg Compusoft caters to businesses of all sizes. Its user-friendly interface and real-time data access make managing your business a breeze. Experience the convenience of cloud-based operations and efficient resource management with Marg Compusoft, your trusted partner for growth and success.",
    },
    {
      name: "Infor CloudSuite™ ERP",
      description: "Leading Cloud-Based ERP Software",
      image: "/images/infor.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "infor",
      url: "/infor-cloudsuite",
      rating: 0.0,
      reviews: 0,
      details:
        "Infor CloudSuite™ ERP is a leading industry cloud solution that enables organizations to seamlessly transition to the cloud, optimizing their business operations. With preconfigured modern features, it offers manageable costs, smooth deployment, and continuous innovation, ensuring business continuity and growth. Recognized as a Leader in the 2023 Gartner® Magic Quadrant™ for Cloud ERP, Infor CloudSuite™ ERP provides deep industry functionality, security, and uptime, empowering organizations to unlock the value of the cloud and stay ahead in today's fast-paced business environment.",
    },
    {
      name: "Banibro ERP",
      description: "We can make IT possible",
      image: "/images/banibro.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "banibro",
      url: "/banibro-solution",
      rating: 0.0,
      reviews: 0,
      details:
        "Banibro ERP is a business management solution that streamlines processes, reduces operational costs, and enhances accuracy through automation and error reduction. With real-time insights and seamless integration across departments, it empowers businesses to make informed decisions and achieve measurable growth. Trusted by over 1 million users worldwide, Odoo ERP offers tailored solutions for CRM, Invoicing, Sales, and more, ensuring smoother operations and enhanced customer experiences.",
    },
    {
      name: "ProQsmart",
      description: "AI-powered System for Enterprise Resource Planning",
      image: "/images/proqsmart.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "proqsmart",
      url: "/proqsmart",
      rating: 0.0,
      reviews: 0,
      details:
        "ProQsmart is an AI-powered procurement platform designed to streamline CapEx procurement processes, ensuring timely contract awards to optimal vendors at the best prices. With its intelligent insights and automation, ProQsmart empowers businesses to achieve up to 40% savings in procurement time and 10% in direct costs. It offers transparency, maximum savings, and enhanced collaboration while simplifying complex sourcing requirements and tendering processes. Experience faster project deliveries, reduced lead times, and improved cost control with ProQsmart, setting new standards for collaboration, compliance, and cost savings in procurement.",
    },
    {
      name: "Oracle NetSuite ERP",
      description: "Handle All Your Accounting Operations With Ease",
      image: "/images/oraclenet.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "oraclenet",
      url: "/oracle-netsuite",
      rating: 0.0,
      reviews: 0,
      details:
        "NetSuite's ERP software is a comprehensive solution designed to streamline and enhance your business operations. With a focus on efficiency and scalability, NetSuite ERP offers a unified platform for financial management, order management, procurement, and more. It empowers businesses to gain real-time insights, improve decision-making, and optimize resource utilization. This cloud-based ERP system provides a flexible and customizable approach to address the unique needs of various industries, making it an ideal choice for companies seeking to elevate their productivity and competitiveness. Discover how NetSuite ERP can help your organization achieve greater success in managing critical aspects of your business.",
    },
    {
      name: "BIGSUN",
      description: "Low-cost Enterprise Resource Planning System Software",
      image: "/images/bigsun.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "bigsun",
      url: "/bigsun",
      rating: 0.0,
      reviews: 0,
      details:
        "BIGSUN offers an ERP solution tailored for diverse industries, including manufacturing, media, and NBFCs. With robust features like accounting, compliance, CRM, and inventory management, it streamlines operations and enhances efficiency. Trusted by leading businesses, it empowers growth through automation, insightful reporting, and seamless integration, making it the go-to choice for businesses aiming for productivity and profitability.",
    },
    {
      name: "Orion Software's ERP solution",
      description: "Best ERP system for small businesses",
      image: "/images/orion.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "orion",
      url: "/orion-software",
      rating: 0.0,
      reviews: 0,
      details:
        "Orion Software's ERP solution is a tool designed to optimize business efficiency for mid-size to large enterprises, particularly in the construction industry. With features ranging from collection dashboards to financial statement analysis, it offers tailored solutions adaptable to various business needs. Its integration capabilities, including API support and utility programs, ensure seamless incorporation with existing accounting systems. Backed by a team of efficiency experts, Orion Software collaborates closely with clients to streamline operations, enhance productivity, and drive growth, making it an invaluable asset for construction businesses seeking innovative solutions.",
    },
    {
      name: "Ramco ERP Software",
      description:
        "Flexible Cloud-Based Platform for Enterprise Resource Planning",
      image: "/images/ramco.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "ramco",
      url: "/ramco-erp-software",
      rating: 0.0,
      reviews: 0,
      details:
        "Ramco ERP Software is a cloud solution revolutionizing enterprise operations by providing real-time visibility and agility. Offering a comprehensive suite of modules, it simplifies complex business processes and enhances efficiency through seamless integration. With its user-friendly interface, scalability, and cloud-based architecture, Ramco ERP empowers businesses to innovate and thrive in today's dynamic market landscape.",
    },
    {
      name: "TYASuite",
      description: "Empowered Cloud ERP Software Vendor",
      image: "/images/tyasuite.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "tyasuite",
      url: "/tyasuite",
      rating: 0.0,
      reviews: 0,
      details:
        "TYASuite's Compliance Management Software offers a cloud-based solution for businesses to efficiently oversee and gain visibility into compliance activities. By centralizing compliance processes, it streamlines operations and ensures adherence to regulations. With features like procurement to pay, project management, and vendor management, it provides a comprehensive suite for businesses to manage their operations seamlessly. TYASuite's software enables businesses to renovate and thrive in the digital era by offering end-to-end solutions tailored to their needs.",
    },
    {
      name: "CREST ERP",
      description: "Top-rated ERP software providers",
      image: "/images/crest.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "crest",
      url: "/crest-erp",
      rating: 0.0,
      reviews: 0,
      details:
        "CREST ERP is an enterprise resource planning solution designed to optimize operations and reduce costs for mid-sized businesses. With seamless integration and interdependent modules covering areas like inventory, procurement, production, sales, and finance, CREST ERP streamlines processes and enhances productivity. It offers scalability to accommodate growth, ensures regulatory compliance and security through centralized data storage and role-based access controls, facilitates forecasting and tracking of orders and finances, promotes collaboration across departments, and ultimately leads to significant cost savings and higher profits.",
    },
    {
      name: "ERPNext",
      description: "A Comprehensive ERP system for Businesses",
      image: "/images/erpnext.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "erpnext",
      url: "/erpnext",
      rating: 0.0,
      reviews: 0,
      details:
        "ERPNext is a open-source ERP solution offering versatile tools for businesses worldwide. With its robust features ranging from financial accounting to CRM and HR management, it empowers organizations to streamline operations efficiently. Trusted by over 10,000 companies globally, ERPNext ensures seamless integration with favorite apps and provides certified consultancy for successful implementations. Experience its power with a hassle-free 14-day trial and witness how it revolutionizes business management. Built on Frappe, it epitomizes simplicity, power, and innovation in ERP solutions.",
    },
    {
      name: "Expand smERP",
      description: "Customizable ERP software system for exporters",
      image: "/images/expand.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "expand",
      url: "/expand-smerp",
      rating: 0.0,
      reviews: 0,
      details:
        "Expand smERP is a fully customizable ERP solution designed for manufacturers and exporters in India. With features like production planning, vendor management, and barcode scanning, it streamlines operations, reduces costs by up to 30%, and enhances productivity. Its mobile ERP functionality ensures efficiency on the go, while seamless integration with eCommerce platforms, marketplaces, logistics, and payment systems makes it a comprehensive business management tool. Trusted by clients nationwide, Expand smERP offers 24/7 support, multiple language options, and robust security measures, ensuring seamless operations and business growth.",
    },
    {
      name: "IXPert ERP",
      description: "Software solution for Enterprise Resource Planning",
      image: "/images/ixpert.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "ixpert",
      url: "/ixpert-erp",
      rating: 0.0,
      reviews: 0,
      details:
        "IXPert Smart Solutions offers ERP software designed to streamline business operations across various industries. With features like finance management, sales tracking, inventory control, and HR automation, our software enhances efficiency and facilitates informed decision-making. Whether you need a cloud-based or on-premises solution, IXPert Smart Solutions provides customizable ERP systems tailored to your business needs and preferences. Gain real-time insights, improve productivity, and stay ahead in today's competitive market with our cutting-edge ERP software. Experience seamless integration, advanced analytics, and reliable support to drive growth and success for your business.",
    },
    {
      name: "PACT ERP",
      description: "BUSINESS SOLUTION",
      image: "/images/pact.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "pact",
      url: "/pact-erp",
      rating: 0.0,
      reviews: 0,
      details:
        "PACT RevenU is a leading Enterprise Resource Planning (ERP) software designed to streamline and automate business processes, offering customizable solutions for businesses of all sizes and industries. With over 12000 satisfied clients worldwide, it provides modules covering finance, inventory, sales, HR, and more, ensuring seamless integration and real-time data flow. PACT RevenU stands out for its ease-of-use, continuous technical support, and industry-specific configurations, making it the go-to choice for businesses aiming to enhance productivity and drive growth. Whether on-premise or cloud-based, it offers flexibility and accessibility, empowering businesses to make informed decisions and stay VAT-compliant.",
    },
    {
      name: "My Bill Book",
      description: "#1 GST billing software",
      image: "/images/mybillbook.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "mybillbook",
      url: "/billbook",
      rating: 0.0,
      reviews: 0,
      details:
        "MyBillBook is your friendly financial assistant, here to make billing and invoicing a breeze. It's designed with simplicity in mind, so you can effortlessly create, send, and keep track of invoices, saving you time and reducing mistakes. Plus, it goes beyond just invoices - it helps you manage expenses and provides clear financial reports. Whether you're a small business owner or a freelancer, MyBillBook is your partner in staying organized and taking charge of your finances. Say goodbye to financial headaches and hello to a smoother billing experience with MyBillBook.",
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
