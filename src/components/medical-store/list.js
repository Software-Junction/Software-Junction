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
      name: "Medicin Pharmacy Management Software",
      description: "FULLY AUTOMATIC & MOST ECONOMICAL",
      image: "/images/medicin.jpg",
      imageWidth: 90,
      imageHeight: 10,
      altText: "medicin",
      url: "/medicin",
      rating: 0.0,
      reviews: 0,
      details:
        "Medicin Pharmacy Management Software is a solution designed for both retail pharmacies and distributors. Offering features like automatic purchase and sale modules, GST compliance, prescription record with inbuilt camera support, and a wide range of pre-filled data, it streamlines operations efficiently. With capabilities such as E-Way Bill compliance, barcode-based transactions, and an owner app for Android/iOS, it ensures seamless management and enhances customer care. The software also supports online and offline modes, providing a versatile solution for the pharmacy business with features like campaign management, expiry notifications, and an easy-to-use interface.",
    },
    {
      name: "LOGIC ERP",
      description: "Easy-to-use, feature-rich pharmacy management software",
      image: "/images/logic.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "logic",
      url: "/logic",
      rating: 0.0,
      reviews: 0,
      details:
        "LOGIC ERP offers a Retail ERP and POS Software designed to streamline store management. This robust and scalable solution covers billing, inventory, CRM, loyalty programs, schemes, discounts, e-commerce, accounts, and GST filing. Tailored for various industries such as Apparel & Footwear, FMCG, Pharma & Healthcare, Lifestyle & Fashion, Electrical & Electronics, Food & Beverages, Wellness & Salon, and Hardware, it features a complete suite for Enterprise Resource Planning. With support for diverse retailing formats, dynamic pricing, and omni-channel capabilities, LOGIC ERP simplifies complex inventory management and enhances customer engagement.",
    },
    {
      name: "Gofrugal's Pharmacy Software",
      description: "Online Medical Shop Management System",
      image: "/images/gofrugal.png",
      imageWidth: 90,
      imageHeight: 10,
      altText: "gofrugal",
      url: "/gofrugal",
      rating: 0.0,
      reviews: 0,
      details:
        "Gofrugal's Pharmacy Software is a comprehensive solution designed for retail pharmacies, offering features such as efficient inventory management, streamlined billing processes, and compliance with industry regulations. With user-friendly interfaces and mobile apps, it enables faster checkouts, ensures security with role-wise permissions, and provides real-time data analysis for informed decision-making. This software caters to various needs, including loyalty programs, supply chain management, and integrated accounting, making it an ideal choice for pharmacies seeking to enhance operational excellence, customer retention, and overall business growth.",
    },
    {
      name: "Visual Chemist Store",
      description: "Best Electronic Medical Records Software in India",
      image: "/images/visual.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "visual",
      url: "/visual",
      rating: 0.0,
      reviews: 0,
      details:
        "Visual Chemist Store is a software solution designed to meet the specific needs of over 20,000 retailers in India and abroad. This user-friendly system offers features such as accounting, billing, inventory management, order processing, barcoding, and more. With a master database for products and suppliers, easy order processing, and mobile app integration, Retail108 streamlines operations and enhances customer engagement. The software also includes modules for commission management, CRM, production planning, GST reporting, expiry management, and detailed accounting, providing a complete solution for retail businesses in the pharmaceutical and medical sectors.",
    },
    {
      name: "Ecogreen Express",
      description: "Medicine Store Management System - Medical Store System",
      image: "/images/ecogreen.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "ecogreen",
      url: "/ecogreen",
      rating: 0.0,
      reviews: 0,
      details:
        "Ecogreen Express is a ERP software designed for pharmacy management, offering a seamless solution for retailers, wholesalers, and marketing companies across India. With a quick 20-minute installation, it streamlines store operations, ensuring easy billing, home delivery scheduling, and real-time synchronization of inventory. This modern-day software enhances customer satisfaction by reducing billing time and integrates various payment methods. Boasting a user-friendly interface, it also provides essential features like drive backup for data stability. Ecogreen Express stands out as a trusted choice, empowering pharmacies with efficient operations, increased revenue generation, and a user-friendly experience.",
    },
    {
      name: "Meddoz",
      description: "Medical Store Software for Chemist Shop",
      image: "/images/meddoz.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "meddoz",
      url: "/meddoz",
      rating: 0.0,
      reviews: 0,
      details:
        "Meddoz, developed by ASkeyTech, is an intuitive and cost-effective pharmacy management software designed to enhance visibility and control of all pharmacy processes. With a vast database of over 100,000 preloaded drugs, it caters to pharmacies of any size, offering a ready-made solution. The software's key features include user-friendly interfaces and barcode integration for streamlined tasks like invoice creation and billing. ASkeyTech, based in Chennai, India, is a dedicated software development company committed to providing top-notch solutions in point-of-sale, enterprise applications, and web design, with a focus on professionalism and customer satisfaction. Meddoz also comes with comprehensive technical support and post-implementation follow-ups, ensuring efficient operation and continual improvement.",
    },
    {
      name: "Medeil Cloud POS",
      description: "Medical Information Software for Best Way to Manage",
      image: "/images/medeil.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "medeil",
      url: "/medeil",
      rating: 0.0,
      reviews: 0,
      details:
        "Medeil Cloud POS is a pharmacy management software solution offering features such as medication dispensing, inventory management, patient records, and billing. This user-friendly system aims to enhance efficiency and productivity by reducing manual work, streamlining workflow processes, and minimizing errors in medication dispensing. The software supports various types and sizes of pharmacies, providing seamless integration with POS systems and electronic medical records. With a focus on easy transactions, customization, and offline functionality, Medeil is recommended by satisfied clients for its professional business management and analysis capabilities in the healthcare and pharmaceutical industries.",
    },
    {
      name: "Adysoft Medical Store Management",
      description: "Wholesale Medical Software India",
      image: "/images/adysoft.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "adysoft",
      url: "/adysoft",
      rating: 0.0,
      reviews: 0,
      details:
        "Adysoft Medical Store Management is a revolutionary GST Ready Medical Store Software developed by Adysoft, designed to streamline and automate the operations of medical stores in India. This comprehensive solution caters to the needs of pharmacy businesses, offering features such as automatic purchase order management, expiration tracking, alternate medicine suggestions, and detailed profit and loss analysis for each medicine. Medica reduces manual efforts, saves time, and provides modules for user management, client/vendor management, accounting, transactions, inventory, and more. As a leading Medical Software Company in India, Adysoft's Medica is the go-to choice for Pharma Retailers, Wholesalers, Chemists, and Druggists, ensuring accurate stock management and efficient financial accounting with GST compliance.",
    },
    {
      name: "eVitalRx",
      description: "A complete Pharmacy Software Solution to grow your",
      image: "/images/evital.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "evital",
      url: "/evital",
      rating: 0.0,
      reviews: 0,
      details:
        "eVitalRx is a reliable pharmacy management software designed for the Indian market. Packed with features, it offers seamless medical billing, inventory management, and ERP solutions for pharmacies of all sizes, including retail, large chains, generic stores, and clinical setups. With a user-friendly interface accessible on both desktop and mobile devices, eVitalRx ensures unlimited multi-device logins, WhatsApp integration, and real-time stock monitoring. Its cloud-based technology guarantees data safety, and transparent pricing starting at just ₹10/day makes it an affordable choice for pharmacies looking to enhance efficiency, streamline operations, and stay competitive in the evolving healthcare landscape.",
    },
    {
      name: "CBO ERP Limited",
      description: "Retail Medical Software For Business",
      image: "/images/cbo.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "cbo",
      url: "/cbo",
      rating: 0.0,
      reviews: 0,
      details:
        "CBO ERP Limited provides software solutions, specializing in MR reporting for the pharmaceutical industry. Their dynamic and efficient software allows companies to enhance quality control, monitor product distribution, adhere to regulatory controls, and improve overall management visibility. With a focus on pharmaceutical distribution automation, CBO ERP's software system enables businesses to achieve full traceability, minimize expired stock, and streamline operations across multiple production lines. Serving over 1100 customers worldwide, CBO ERP Limited is a leading service provider, recognized for ISO 9001:2008 certification and a commitment to information security with ISO 27001:2013.",
    },
    {
      name: "Halemind",
      description: "Best Medical Store Software",
      image: "/images/hale.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "hale",
      url: "/halemind",
      rating: 0.0,
      reviews: 0,
      details:
        "Halemind is a Electronic Medical Records (EMR) and Hospital Management System (HMS) designed to elevate independent practices and hospitals. With advanced, secure, and specialty-driven EHR technology, it simplifies operations for private practices, hospitals, pharmacies, and labs. Halemind empowers healthcare professionals with evidence-based care, intuitive patient behavior tracking, and streamlined scheduling through a smart calendar. The platform offers a single-dashboard solution for administrators, encompassing connected records, billing, digital prescriptions, patient portals, and more. Beyond mere management, Halemind creates a connected healthcare platform, endorsed by satisfied users like Ophthalmologist Dr. Madhavi and Homeopathic Consultant Dr. Sandeep Selvinus, making it a comprehensive and user-friendly solution for modern healthcare needs.",
    },
    {
      name: "Acme Insight software",
      description: "Best Medical Store Software For Small Business",
      image: "/images/acme.jpg",
      imageWidth: 130,
      imageHeight: 10,
      altText: "acme",
      url: "/acme",
      rating: 0.0,
      reviews: 0,
      details:
        "Acme's Insight software is a comprehensive solution designed for pharmaceutical retailers, offering a Special GST Discount of up to 50%. This user-friendly software empowers medical retailers to efficiently manage sales, stock, inventory, CRM, accounting, and regulatory compliance, particularly adhering to the FDA rules and laws in India. With features such as barcode labeling, sales and purchase return, and robust reporting capabilities, Acme's Insight ensures tight control over medicine stock, enabling retailers to enhance profits and minimize losses. The software caters to the unique needs of medical businesses, fostering seamless operations and compliance while providing a valuable tool for business growth.",
    },
    {
      name: "e-Hospital",
      description: "Hospital billing software",
      image: "/images/ehospital.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "ehospital",
      url: "/ehospital",
      rating: 0.0,
      reviews: 0,
      details:
        "e-Hospital, an integral part of India's Ayushman Bharath Digital Mission, is a digital healthcare platform. Linked to the Ayushman Bharath Health Account (ABHA), it empowers patients with secure digital access to health records, lab reports, and prescriptions. Offering modules for patient registration, admission, billing, and clinic management, it enhances operational efficiency in outpatient and inpatient services. With seamless integration into the digital health ecosystem, e-Hospital is a transformative solution, fostering streamlined healthcare processes and patient-centric care.",
    },
    {
      name: "RetailGraph",
      description: "For Retail Stores & Chains",
      image: "/images/retail.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "retail",
      url: "/retailgraph",
      rating: 0.0,
      reviews: 0,
      details:
        "SwilERP, formerly known as RetailGraph, is a comprehensive business management software that seamlessly combines the trusted features of RetailGraph with new enhancements. This rebranded solution offers desktop applications such as SwilERP and Unisolve software, along with mobile apps like SwilPOS, SwilSORT, SwilDISPATCH, and SwilMart Ecomm. Additionally, web-based applications include Swil Cloud-based software and Swil Admin. SwilERP ensures a smooth transition for valued customers, providing a range of tools for various business needs, from point-of-sale solutions to cloud-based management, supported by a dedicated customer support system and a wealth of resources through its website.",
    },
    {
      name: "Wondersoft",
      description: "Retail POS for the entire Retail segment",
      image: "/images/wondersoft.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "wondersoft",
      url: "/wondersoft",
      rating: 0.0,
      reviews: 0,
      details:
        "Wondersoft's versatile POS software streamlines retail operations across various industries, offering tailored solutions for Apparel, Electrical & Electronics, Salon & Spa, Food & Beverage, Lifestyle & Fashion, Supermarkets, Pharmacy, and Specialty Retail. With features like sales management, inventory control, and customer relations, Wondersoft's POS ensures reliable and robust operations. The software provides a seamless and engaging user experience, with options for standalone and cloud-based solutions. Wondersoft's flagship products, Shopaid.Net and eShopaid, cater to independent outlets and medium to large retail stores, respectively, offering end-to-end functionalities from point of sale to loyalty programs and inventory management.",
    },
    {
      name: "Catalyst",
      description: "The Health Care Software Solution",
      image: "/images/catalyst.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "catalyst",
      url: "/catalyst",
      rating: 0.0,
      reviews: 0,
      details:
        "Catalyst is a Customer Success Platform designed to transform your customers into a formidable growth engine. With seamless integrations, real-time Salesforce sync, and top industry adoption, Catalyst empowers Sales and Success teams to maximize revenue through precise insights on retention risks and expansion opportunities. Anchored in the customer journey, Catalyst provides actionable data, unifying your entire organization to drive impact and revenue from your existing customer base. Its intuitive design minimizes administrative tasks, ensuring your team stays focused on high-value customer interactions. Trusted by leading technology companies, Catalyst offers a comprehensive solution for customer-led growth, combining automation, playbooks, and workflows to support every stage, from onboarding to expansion.",
    },
    {
      name: "VarthagamSoft",
      description: "Best software for Retail and Distribution business",
      image: "/images/varthagam.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "varthagam",
      url: "/varthagam",
      rating: 0.0,
      reviews: 0,
      details:
        "VarthagamSoft is a pharmaceutical billing software designed to optimize business operations in Chennai. With features like flexible inventory classification, 100% audit capability, and easy billing management, it ensures faster checkouts and efficient stock updates. The software facilitates precise inventory management, including stock age analysis for better working capital control. Tailored for diverse industries, it offers solutions for pharmaceutical distribution, pharmacy management, FMCG, supermarket operations, rice trading, hardware, electronics, and more. VarthagamSoft's user-friendly interface and robust functionalities make it a leading choice, recognized for enhancing customer service, supplier management, and overall business growth.",
    },
    {
      name: "San Pharmacy Billing",
      description: "Advanced Technology Billing Software for Pharmacy",
      image: "/images/san.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "san",
      url: "/sanpharmacy",
      rating: 0.0,
      reviews: 0,
      details:
        "San Software offers a Medical Shop Billing Software designed for small to large retail and wholesale medical shops. Packed with features such as barcode support, cash drawer and thermal printer compatibility, Tally integration, SMS capabilities, accurate inventory management, and loyalty programs, this software ensures efficient operations. With benefits like multiple billing counters, customizable reports, and both online and offline POS options, San Software provides an excellent customer support experience, works seamlessly on mobile and tablets, integrates with mobile apps and e-commerce platforms, and even offers a free Android mobile app for your store.",
    },
    {
      name: "Medeil Plus",
      description: "Simplify Medical Practice",
      image: "/images/medeilplus.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "medeilplus",
      url: "/medeilplus",
      rating: 0.0,
      reviews: 0,
      details:
        "Medeil Cloud POS is a pharmacy management software offering a range of features such as medication dispensing, inventory management, patient records, and billing. It integrates seamlessly with Point of Sale (POS) systems, enabling analytical pharmacy reporting and enhancing overall efficiency and productivity. The software supports various types and sizes of pharmacies, providing easy integration and a user-friendly interface. With positive feedback from satisfied customers, Medeil facilitates streamlined workflow processes, reduces manual work, and ensures accuracy in medication dispensing for improved patient safety.",
    },
    {
      name: "Bahmni",
      description: "Software by ThoughtWorks, Inc.",
      image: "/images/bhamni.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "bhamni",
      url: "/bhamni",
      rating: 0.0,
      reviews: 0,
      details:
        "Bahmni is a Electronic Medical Records (EMR) and hospital system designed for low-resource settings. It seamlessly integrates open source solutions like OpenMRS for patient management, OpenERP for inventory and billing, OpenELIS for laboratory management, and DICOM/PACS for diagnostic imaging. With an intuitive design, it enhances the efficiency and quality of patient care by providing accessible clinical, diagnostic, and management information. Bahmni is a modular, flexible, and infrastructure-appropriate solution, adaptable to various devices, allowing healthcare providers to improve decision-making in diverse healthcare environments globally.",
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
