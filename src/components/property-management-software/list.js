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
      name: "Stayflexi",
      description: "Revolutionizing the basics of Hospitality",
      image: "/images/stayflexi.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "stayflexi",
      url: "/stayflexi",
      rating: 0.0,
      reviews: 0,
      details:
        "Stayflexi is an All-In-One platform revolutionizing the hospitality industry, offering a comprehensive Operating System for hotels and vacation rentals. Seamlessly integrating operations, sales, guest management, and payments, it provides a fully automated AI-powered Property Management System (PMS) to simplify tasks and reduce costs. With features like Magic Link automation, flexible booking options, and a global network of 2000+ trusted properties, Stayflexi ensures a hassle-free experience for hoteliers, enhancing guest satisfaction and driving revenue through direct bookings. It's the ultimate solution for modern property management, connecting last-minute unsold rooms with travelers, and supporting diverse property types worldwide.",
    },
    {
      name: "SYSOTEL.AI",
      description:
        "India’s First Single Sign-on Revenue & Yield Automation System",
      image: "/images/sysotel.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "sysotel",
      url: "/sysotel",
      rating: 0.0,
      reviews: 0,
      details:
        "SYSOTEL.AI is India's pioneering Revenue & Yield Automation System, revolutionizing the hospitality sector. This innovative AI/ML-based platform offers a comprehensive single sign-on solution for hoteliers, addressing challenges and enabling a 15-20% increase in topline, 12-18% optimization of the bottom line, and improved operational efficiency. With seamless integration, real-time data insights, and a user-friendly interface, SYSOTEL.AI empowers businesses to streamline operations, boost revenue through intelligent booking engines, and strategically optimize profitability through advanced solutions. Trusted by a diverse clientele, SYSOTEL.AI shapes the future of hospitality with powerful collaborations and unmatched technology in the realms of PMS, channel management, payment gateways, OTAs, and meta search.",
    },
    {
      name: "Buildium",
      description: "A cloud-based property management software",
      image: "/images/buildium.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "buildium",
      url: "/buildium",
      rating: 0.0,
      reviews: 0,
      details:
        "Buildium is an all-in-one property management software designed to streamline operations for property managers and real estate professionals. With a cloud-based platform, it offers features such as rental listings, tenant screening, lease management, rent collection, property accounting, maintenance requests, and communication tools. The software caters to a range of property types, including single-family homes, small multifamily units, community associations, student housing, commercial properties, and affordable housing. Buildium enhances efficiency by automating day-to-day tasks, improving organization through centralized data, and ultimately creating a better experience for property owners, tenants, and homeowners.",
    },
    {
      name: "AppFolio Realm",
      description: "A web-based property management software",
      image: "/images/appfolio-realm.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "appfolio-realm",
      url: "/appfolio-realm",
      rating: 4.4,
      reviews: 0,
      details:
        "AppFolio Realm is a AI-powered real estate management platform that centralizes data, offering a seamless and automated solution for efficient portfolio management. With a focus on next-level productivity, the platform provides an unrivaled user experience across devices, integrates seamlessly with various services, and positions itself as a trusted partner for continuous innovation. Designed to cover a diverse range of real estate sectors, AppFolio Realm empowers teams with dedicated onboarding, expert coaching, and robust support, ensuring businesses can swiftly adapt, maximize ROI, and confidently grow.",
    },
    {
      name: "MRI Software",
      description: "PMS software for multi-property management",
      image: "/images/mri-software.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "mri-software",
      url: "/mri-software",
      rating: 0.0,
      reviews: 0,
      details:
        "MRI Software is a proptech solution that empowers real estate visionaries by seamlessly connecting residential and commercial properties. With a focus on AI-first technology, it offers tailored solutions for multifamily owners, operators, and investors, addressing lead-to-lease processes, property management, accounting, ID verification, and online rent payment. The platform extends its capabilities to affordable and public housing, ensuring housing compliance, managing waitlists, and facilitating fee accounting. MRI@Work caters to commercial property needs with features like property management, accounting, investment management, lease abstraction, and facilities management. The software's open and connected approach, supported by a vast partner ecosystem, transforms the way people live, work, and play in thriving communities worldwide, with over 45,000 clients and operations in 170+ countries.",
    },
    {
      name: "Rent Manager",
      description: "An all-in-one property management system",
      image: "/images/rent-manager.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "rent-manager",
      url: "/rent-manager",
      rating: 0.0,
      reviews: 0,
      details:
        "Rent Manager is a property management software designed for companies overseeing real estate portfolios of varying sizes. Serving as an integrated solution, it amalgamates essential business features, including comprehensive accounting and reporting tools, intuitive marketing and mobile capabilities, thorough work order and management functionalities, and extensive software customization options. Whether handling large or small properties, Rent Manager empowers businesses to efficiently manage their operations. With top-notch customer care, onboarding support, and a variety of training options, Rent Manager ensures users maximize their software experience. Its flexibility extends to seamless integration with a growing network of technology providers, making it a versatile and indispensable tool for growing and streamlining property management businesses.",
    },
    {
      name: "PROMAS",
      description: "Easy-to-use property management accounting software",
      image: "/images/promas.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "promas",
      url: "/promas",
      rating: 0.0,
      reviews: 0,
      details:
        "PROMAS is a robust property management software with over 30 years of industry expertise, catering to property managers and homeowner associations. Whether in the cloud or on-site, it offers powerful reporting and rock-solid accounting features. The software's focus on management allows users to efficiently run their businesses without extensive accounting experience. With login access providing updates, support, documents, tutorials, and webinars, PROMAS ensures a seamless experience for users. Developed by Think Up Themes Ltd. and powered by WordPress, it stands out as a trusted solution for effective business operations in the real estate management sector.",
    },
    {
      name: "Property Manager Cloud",
      description: "A simple and efficient PMS software",
      image: "/images/property-manager-cloud.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "property-manager-cloud",
      url: "/property-manager-cloud",
      rating: 0.0,
      reviews: 0,
      details:
        "Property Manager Cloud (PMC) is an efficient and user-friendly online property management software offering a comprehensive set of 16 features with every plan. From paperless processes and tenant portals to work order systems and online rent collections, PMC streamlines tasks for hassle-free management. It includes tools like lease creation, communication simplification, tenant screening, accounting, vacancy publishing, and onboarding. With detailed property information, multiple income streams, and free tech support, PMC stands out as a cloud-based solution designed to save time, money, and headaches for property managers. Try it risk-free for 30 days, without any installations, and enjoy free automatic updates.",
    },
    {
      name: "Propertyware",
      description: "One of the best property management software in India",
      image: "/images/propertyware.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "propertyware",
      url: "/propertyware",
      rating: 0.0,
      reviews: 0,
      details:
        "Propertyware is a customizable property management software designed for Single Family rental property management companies. With powerful features such as custom dashboards, unlimited reports, and a self-service owner portal, it offers insights critical for monitoring business performance and impressing owners and investors. The software stands out with unmatched industry customization, enabling the development of unique workflows and automatic processes to provide superior service to both property owners and tenants. Its open platform simplifies management through data access and two-way data exchange (Open API), allowing seamless integration with chosen software systems for increased efficiency. Propertyware offers a clear pricing structure with options to suit varying business needs.",
    },
    {
      name: "Re-Leased",
      description: "PMS software for all property types",
      image: "/images/re-leased.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "re-leased",
      url: "/re-leased",
      rating: 0.0,
      reviews: 0,
      details:
        "Re-Leased is a Commercial Property Management Software, serving as the world's leading platform for property owners, managers, and corporate occupiers. This innovative solution empowers users to streamline daily operations, enhance tenant experiences, and maximize revenue through its connected cloud. Trusted by over 1300 companies globally, Re-Leased offers tailored solutions for landlords, property managers, and corporate occupiers, supported by a 170+ strong global team. With features such as lease administration, maintenance management, arrears control, and portfolio analytics, Re-Leased transforms property management, ensuring a 360-degree view, automated reminders, and lightning-fast onboarding for a seamless and efficient experience.",
    },
    {
      name: "SS&C SKYLINE",
      description: "Leading PMS software for real estate firms",
      image: "/images/ssandc.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "ssandc",
      url: "/ssandc",
      rating: 0.0,
      reviews: 0,
      details:
        "SS&C SKYLINE is a cloud-based property management software designed for both residential and commercial real estate owners and managers. With a focus on enhancing productivity, occupancy, and profitability, SKYLINE offers a comprehensive solution stack accessible across mobile, desktop, and portal platforms. This innovative technology automates and streamlines day-to-day operations, including marketing availabilities, payment processing, invoice approvals, and lease signings. With a dynamic and scalable design, SKYLINE supports diverse portfolios, providing powerful tools to optimize accounting workflows, facility operations, and performance metrics for investors. As a trusted industry pioneer, SS&C SKYLINE boasts over three decades of experience, serving over 1,000 clients and managing 35,000 properties spanning three billion square feet.",
    },
    {
      name: "RMS Cloud",
      description: "A complete booking and property management system",
      image: "/images/rms-cloud.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "rms-cloud",
      url: "/rms-cloud",
      rating: 0.0,
      reviews: 0,
      details:
        "RMS Cloud is a software trusted by over 7,000 properties in 70 countries, with a 40-year legacy of innovation. This all-in-one solution empowers hospitality businesses, including hotels, resorts, serviced apartments, and more, to seamlessly manage operations, boost revenue, and enhance guest experiences. With a comprehensive suite of features, RMS Cloud is a scalable and enterprise-enabled platform, offering a centralized database, group-level functionality, and 550+ integration partners. Trusted by global hospitality brands, RMS Cloud is the go-to solution for efficient property management, from reservation handling to dynamic rate management and beyond.",
    },
    {
      name: "Yardi",
      description: "Highly robust commercial property management software",
      image: "/images/yardi.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "yardi",
      url: "/yardi",
      rating: 0.0,
      reviews: 0,
      details:
        "Yardi is a leading provider of innovative property management software and services, catering to businesses of all sizes in diverse real estate markets. Their integrated platform covers Residential, Commercial, Affordable Housing, Senior Living, and PHA, offering technology solutions for property management, asset performance, marketing, leasing, procurement, energy management, risk management, care, market research, and learning. With over 35 years of experience, Yardi has earned client trust by delivering a unified system, exemplified by client success stories such as Rexford Industrial and MG Properties Group. Yardi's commitment to excellence is evident through their global presence, participation in industry events, and support for communities.",
    },
    {
      name: "TenantCloud",
      description: "Free-to-use rental property software",
      image: "/images/tenant-cloud.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "tenant-cloud",
      url: "/tenant-cloud",
      rating: 0.0,
      reviews: 0,
      details:
        "TenantCloud is a software designed to perfect the management of rental properties. This feature-rich solution facilitates listing vacant rentals on multiple sites, screening tenants through background and credit checks, collecting rent online via various payment methods, and executing paperless lease agreements with e-signatures. With easy accounting tools, users can efficiently manage financial data, generate comprehensive reports, and streamline tax preparation. The software also offers fast online maintenance request management, built-in tenant screening, and customizable rental applications. TenantCloud caters to landlords, property managers, tenants, and service professionals, providing a user-friendly platform to enhance efficiency, communication, and overall property management operations.",
    },
    {
      name: "Rentec Direct",
      description: "Top-rated property management system software",
      image: "/images/rentec-direct.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "rentec-direct",
      url: "/rentec-direct",
      rating: 0.0,
      reviews: 0,
      details:
        "Rentec Direct is a top-rated property management software offering comprehensive solutions for landlords and professional property managers. With pricing starting at $45/month for landlords and $55/month for property managers, it provides unlimited US-based support. The software includes features like a professional website for property listings, complete accounting tools, tenant screening with instant reports, free online tenant payments, and online file management. Rentec Direct is endorsed by prominent entities such as Entrepreneur, Forbes, and Realtor, and stands out for its exceptional customer service, guaranteeing the best service experience. Clients praise its user-friendly interface, efficiency, and the convenience of reaching support through phone, email, or chat.",
    },
    {
      name: "InnKey",
      description: "An effective PMS Software",
      image: "/images/innkey.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "innkey",
      url: "/innkey",
      rating: 0.0,
      reviews: 0,
      details:
        "InnKey – a revolutionary cloud-based solution that is reshaping the landscape of hotel management. InnKey sets itself apart by prioritizing simplicity and operational excellence, offering a centralized platform to streamline hotel operations. Say goodbye to the complexities of juggling multiple software versions and platforms as InnKey seamlessly integrates central reservation, front desk management, point of sale, and more. With a global footprint and cutting-edge property management system access, InnKey ensures efficient distribution and introduces genuine artificial price intelligence for advanced revenue management. Enjoy the perks of easy remote accessibility, scalability, and robust data security, making InnKey the go-to choice for hotels worldwide. Embark on a new era of hospitality management where efficiency meets exceptional customer service – welcome to the world of InnKey.",
    },
    {
      name: "The Hotel Management Software",
      description: "hotel software, club software, resort software",
      image: "/images/thms.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "thms",
      url: "/hms",
      rating: 0.0,
      reviews: 0,
      details:
        "The Hotel Management Software by Truelogics Infotech Pvt. Ltd. is a comprehensive and user-friendly solution designed for the hospitality industry. It offers a 24/7 support system, catering to hotels, chain outlets, guest houses, motels, resorts, sweet shops, bakeries, and related services. With modules for restaurant, club, bar, banquet, spa, salon, and more, the cloud-based ERP system streamlines operations, including front office management, reservation tracking, inventory control, and accounting. The software stands out with its true booking engine, CRM integration, and channel manager for efficient guest bookings and feedback management. The product ensures data security, easy configuration, and 24x7 technical support, making it a reliable choice for businesses in the hospitality sector.",
    },
    {
      name: "mycloud Hospitality",
      description: "Web Based property management system",
      image: "/images/mycloud.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "mycloud",
      url: "/my-cloud-hospitality",
      rating: 0.0,
      reviews: 0,
      details:
        "mycloud Hospitality is a leading cloud-based hotel management software developed by Prologic First, an award-winning hospitality software company. With over 15 years of industry expertise, mycloud offers a feature-rich and customizable solution for hotels worldwide. This all-in-one platform automates hotel operations, including contactless check-in, check-out, and dining services, ensuring efficiency and profitability. With zero upfront fees, a 4-hour PMS live setup, and 24/7 guaranteed support, mycloud is trusted by over 2000 hotels across 40+ countries. Its secure and GDPR-compliant system, along with a flexible cancellation policy, makes it a preferred choice for hoteliers seeking a seamless and reliable technology solution.",
    },
    {
      name: "SimplifyEm",
      description: "Software by SimplifyEm Inc",
      image: "/images/Simplifyem.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "Simplifyem",
      url: "/simplify-em",
      rating: 0.0,
      reviews: 0,
      details:
        "SimplifyEm is a efficient property management software designed for real estate professionals, offering a comprehensive suite of tools to streamline tasks for property managers and landlords. With features such as income and expense tracking, online rental payment collection, tenant screening, and digital lease signatures, SimplifyEm aims to simplify property management processes. The software also provides portals for seamless communication with tenants and owners, professional owner reports, and detailed financial reports, including tax reports. Notably, it stands out for its affordability, responsive US-based support, and over $42 billion in managed property assets since its establishment in 2006. Try SimplifyEm for free with no credit card required.",
    },
    {
      name: "WINHMS",
      description: "Software by Winsar infosoft",
      image: "/images/winhms.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "winhms",
      url: "/winhms",
      rating: 0.0,
      reviews: 0,
      details:
        "WINHMS is a hotel management software designed to meet the unique needs of the hospitality industry. Offering tailored solutions, it encompasses Front Office features like Call Monitoring and a Mobile Guest Application, ensuring efficient guest interactions. The Back Office modules ensure tight control over internal hotel operations, including Accounting, AR/AP, MIS, and Budgeting. With Material Management for procurement and inventory, Point-of-Sale for F&B outlets, and specialized modules for enhanced management, WINHMS streamlines day-to-day operations. Trusted by over 1400 clients in 20+ countries since 2000, it is praised for its user-friendly interface and reliable support, making it an excellent choice for hoteliers seeking optimal efficiency and guest satisfaction.",
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
