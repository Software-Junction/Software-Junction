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
      name: "Intellicus",
      description: "Enterprise data analytics Platform",
      image: "/images/intellicus.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "intellicus",
      url: "/intellicus",
      rating: 0.0,
      reviews: 0,
      details:
        "Intellicus is a business intelligence (BI) solution offering seamless data integration, analytics, and automation. With its modular design, Intellicus empowers enterprises of all sizes to unify data sources, expedite implementation, and enhance user adoption. From real-time predictions to mobile access of insights, Intellicus enables informed decision-making across operations. Trusted by over 17,000 enterprises worldwide, Intellicus transforms BI journeys with its customizable, scalable, and intuitive platform.",
    },
    {
      name: "Stata",
      description: "Data Analysis Software BY StataCorp LP",
      image: "/images/stata.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "stata",
      url: "/stata",
      rating: 0.0,
      reviews: 0,
      details:
        "Stata is statistical software designed for data science, offering a broad suite of features for mastering data analysis. With publication-quality graphics and automated reporting, it ensures truly reproducible research. Boasting Python integration and advanced programming capabilities, Stata is trusted by researchers worldwide for its ease of use, extensive documentation, and world-class technical support. It's a versatile tool that's easy to grow with, automate, and extend, making it an invaluable asset across various disciplines for generating insights and making a difference in research and decision-making.",
    },
    {
      name: "Oracle Database",
      description: "Leading enterprise-grade relational database",
      image: "/images/oracle-database.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "oracle-database",
      url: "/oracle-database",
      rating: 0.0,
      reviews: 0,
      details:
        "Oracle Database is a comprehensive, high-performance database management system offering various services and products tailored to meet diverse data needs. It encompasses cutting-edge features like autonomous management, integrated AI capabilities, and seamless deployment options across cloud and on-premises environments. With its market-leading performance, scalability, reliability, and security, Oracle Database empowers organizations to streamline their data management processes and drive innovation efficiently.",
    },
    {
      name: "Zoho Analytics",
      description: "Transform raw business data to refined statistical data.",
      image: "/images/zoho-analytics.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "zoho-analytics",
      url: "/zoho-analytics",
      rating: 0.0,
      reviews: 0,
      details:
        "Zoho Analytics is a analytics platform that empowers users to seamlessly connect, prepare, and analyze data. With its intuitive interface and AI-driven capabilities, users can effortlessly create visually stunning reports and dashboards, uncovering valuable insights in minutes. Trusted by thousands of customers and millions of users worldwide, Zoho Analytics offers flexible deployment options, low total cost of ownership, and robust security features, making it a top choice for organizations seeking to transform data into actionable insights.",
    },
    {
      name: "Oracle Analytics",
      description: "Empower all types of users to access and process d",
      image: "/images/oracle-analytics.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "oracle-analytics",
      url: "/oracle-analytics",
      rating: 0.0,
      reviews: 0,
      details:
        "Oracle Analytics is a cloud-native service designed to streamline the entire analytics process, from data ingestion and modeling to visualization and collaboration. With embedded machine learning and natural language processing, it fosters an analytics-driven culture within organizations. Offering flexible deployment options and support for various data sources, it enables users to build compelling visual stories, unify data for analysis, and leverage built-in data preparation and enrichment functionalities. Oracle Analytics empowers users to uncover insights, make informed decisions, and drive business growth through actionable information, all while ensuring security, governance, and scalability.",
    },
    {
      name: "NVivo",
      description: "Tools by QSR International",
      image: "/images/nvivo.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "nvivo",
      url: "/nvivo",
      rating: 0.0,
      reviews: 0,
      details:
        "NVivo is a leading qualitative data analysis software offering AI-powered autocoding, sentiment analysis, and user-driven machine learning. It facilitates rapid thematic analysis, enhances team collaboration with real-time sharing, and streamlines transcription processes. NVivo 14 empowers researchers to uncover richer insights, make robust conclusions, and deliver comprehensive findings efficiently. With features like integration with Citavi and free integrations for apps like SurveyMonkey, NVivo 14 ensures a seamless and productive research experience for individuals and teams across various industries.",
    },
    {
      name: "Domo",
      description: "Domo puts data to work for everyone",
      image: "/images/domo.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "domo",
      url: "/domo",
      rating: 0.0,
      reviews: 0,
      details:
        "Domo is a data platform designed to empower organizations to harness the power of their data. Through intuitive business intelligence and analytics, seamless data integration, and robust app creation tools, Domo enables users to make informed decisions quickly. With a focus on trust and security, Domo's data foundation ensures reliable and efficient data management. Trusted by businesses across various industries, Domo fosters a culture of data-driven decision-making, driving transformative actions and multiplying impact.",
    },
    {
      name: "SAS Analytics Pro",
      description: "Tools by SAS Institute Inc.",
      image: "/images/sas.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "sas",
      url: "/sas-analytic-pro",
      rating: 0.0,
      reviews: 0,
      details:
        "SAS Analytics Pro is a software package designed for data scientists, offering powerful capabilities for accessing, manipulating, analyzing, and presenting information. With intuitive features and advanced statistical techniques, it provides a unified solution for data analysis and reporting needs. Its integrated environment, including Base SAS, SAS/STAT, and SAS/GRAPH, ensures consistency and efficiency across enterprises. Moreover, SAS Analytics Pro facilitates easy data integration, compliance adherence, and creation of visually compelling reports, making it a versatile tool for organizations seeking actionable insights from their data.",
    },
    {
      name: "WebFOCUS",
      description: "Tools by Information Builders",
      image: "/images/webfocus.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "webfocus",
      url: "/webfocus",
      rating: 0.0,
      reviews: 0,
      details:
        "WebFOCUS by ibi is a analytics platform that empowers organizations to harness the power of their data for informed decision-making. With seamless cloud integration and AI-driven insights, WebFOCUS offers highly scalable, self-service analytics accessible to users across roles. Its pixel-perfect reporting, embedded analytics, and location intelligence capabilities enable businesses to create custom applications and gain actionable insights. Whether through Natural Language Queries or predictive analytics, WebFOCUS facilitates data-driven decisions with ease and efficiency. With features like ReportCaster and native cloud support, it ensures efficient data distribution and scalability, making it an essential tool for modern enterprises.",
    },
    {
      name: "Ideata Analytics",
      description: "Big Data Analytics Made Easy",
      image: "/images/ideata.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "ideata",
      url: "/ideata-analytics",
      rating: 0.0,
      reviews: 0,
      details:
        "Ideata Analytics is a transformative software solution that empowers businesses to thrive in the digital era. By leveraging cutting-edge technologies such as cloud, AI, and data analytics, it enables companies to unlock untapped value, streamline processes, and drive innovation. With a focus on resilience and integration, Ideata Analytics helps businesses navigate industry complexities and achieve strategic objectives. Its comprehensive suite of services includes consulting, digital transformation, enterprise solutions, and AI capabilities, tailored to meet the diverse needs of modern enterprises. Positioned as catalysts for digital evolution, Ideata Analytics partners with leading tech giants like Google, AWS, and IBM to deliver exceptional results and craft digital success stories.",
    },
    {
      name: "Minitab",
      description: "Tools by Minitab",
      image: "/images/minitab.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "minitab",
      url: "/minitab",
      rating: 0.0,
      reviews: 0,
      details:
        "Minitab is a powerful statistical software offering best-in-class solutions for businesses, facilitating data-driven decision-making anytime, anywhere through its cloud accessibility. With market-leading products like Minitab Statistical Software and Minitab Engage, it enables organizations to unlock the full potential of their data, manage improvement initiatives, and achieve business excellence efficiently. Backed by robust technical support and a range of resources including webinars and customer stories, Minitab empowers users to harness valuable insights from their data, driving impactful outcomes and facilitating continuous improvement within their organizations.",
    },
    {
      name: "PatSnap",
      description: "Connecting the dots so you can innovate better",
      image: "/images/patsnap.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "patsnap",
      url: "/patsnap",
      rating: 0.0,
      reviews: 0,
      details:
        "PatSnap is an advanced AI-powered platform revolutionizing collaboration between IP and R&D teams. It streamlines the innovation lifecycle, offering tools to ideate, validate, review, submit, and monitor inventions. With features like Idea, Refinement, Insight, Analysis, and Collaboration, it accelerates processes, enhances decision-making, and ensures data security, trusted by over 12,000 innovators worldwide. PatSnap empowers enterprises to eliminate workflow friction, saving time and resources while unlocking competitive advantages in the intellectual property landscape.",
    },
    {
      name: "Algolytics",
      description: "Power your business with data!",
      image: "/images/agolytics.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "agolytics",
      url: "/agolytics",
      rating: 0.0,
      reviews: 0,
      details:
        "Algolytics offers solutions and products aimed at empowering businesses with data-driven insights. Their Algoline suite encompasses innovative tools like AlgoMaps for Location Intelligence, Algoline for real-time customer scoring, and Customer Intelligence for precise targeting. With a focus on advanced data mining, machine learning, and stream data processing, Algolytics provides high-end tools such as AdvancedMiner and Scoring.One, enabling businesses to derive maximum value from their data. Through case studies featuring reputable clients like PGE and DHL Parcel, Algolytics demonstrates its expertise in driving business growth and efficiency through innovative applications of data analytics.",
    },
    {
      name: "MAXQDA",
      description: "Tools by VERBI Software",
      image: "/images/maxqda.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "maxqda",
      url: "/maxqda",
      rating: 0.0,
      reviews: 0,
      details:
        "MAXQDA is the qualitative data analysis software, seamlessly integrating AI for streamlined analysis. It offers versatile solutions for organizing, analyzing, and visualizing data, catering to various research methodologies. With user-friendly interfaces, comprehensive tutorials, and robust customer support, MAXQDA ensures efficient collaboration and learning. Trusted by researchers worldwide, it facilitates mixed methods analysis, interview transcriptions, literature reviews, and more, making it indispensable for academia and industry alike.",
    },
    {
      name: "Nanobi",
      description: "Visual Full Stack analytics platform",
      image: "/images/nanobi.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "nanobi",
      url: "/nanobi",
      rating: 0.0,
      reviews: 0,
      details:
        "Nanobi is an advanced platform offering interactive testing and visual full-stack capabilities. Utilizing patented Nanomart Neural Metadata technology, it enables swift data assembly and exploration of external influences. With deep analytical solutions tailored for various industries and customizable options, Nanobi simplifies complex data management and fosters actionable insights. Its expertise-driven services, backed by years of global BI and analytics experience, ensure efficient deployment and scaling of analytics solutions. Based in Bengaluru, Nanobi empowers businesses with transformative analytics, catering to diverse needs from BFSI to healthcare and retail sectors.",
    },
    {
      name: "ATLAS.ti",
      description: "Tools by ATLAS.ti",
      image: "/images/atlas.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "atlas",
      url: "/atlas",
      rating: 0.0,
      reviews: 0,
      details:
        "ATLAS.ti is a qualitative data analysis software that empowers researchers across various fields with AI-driven insights. Offering a seamless user experience, it streamlines research workflows for scientific researchers, students, universities, UX/product designers, marketers, and data analysts. With its intuitive interface, robust feature set, and real-time collaboration capabilities, ATLAS.ti enables users to import, organize, analyze, and visualize diverse data types efficiently. Trusted by leading institutions and companies worldwide, it stands out for its exceptional customer support, flexibility in licensing, and innovative AI-powered tools, making it the go-to solution for qualitative research projects.",
    },
    {
      name: "Quirkos",
      description: "Tools by Quirkos Limited",
      image: "/images/quirkos.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "quirkos",
      url: "/quirkos",
      rating: 0.0,
      reviews: 0,
      details:
        "Quirkos is a qualitative analysis software designed to simplify the interpretation of qualitative text data. With its intuitive interface and essential tools, researchers can easily organize, categorize, and filter their data, allowing for quick understanding and identification of patterns. Offering both cloud-based collaboration and offline options, Quirkos ensures seamless teamwork and accessibility across various devices. Affordable and accessible, Quirkos provides an indispensable tool for researchers, empowering them to delve deep into their data and uncover valuable insights efficiently.",
    },
    {
      name: "SimplifyAnalytics",
      description: "Retail Analytics Platform",
      image: "/images/simplify-analytics.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "simplify-analytics",
      url: "/simplify-analytics",
      rating: 0.0,
      reviews: 0,
      details:
        "SimplifyAnalytics is an intuitive web analytics platform offering visitor tracking, session replays, heatmaps, goal tracking, and real-time analytics. It prioritizes efficient, privacy-conscious data analysis and offers diverse subscription plans, including a free option and agency plans. Designed for businesses of all sizes, it provides comprehensive insights into website performance, empowering users to make informed decisions and optimize user experiences. With its lightweight mode, SimplifyAnalytics ensures fast website performance while delivering essential analytics features. Trusted by professionals across various industries, it stands as a reliable alternative to traditional analytics tools like Google Analytics.",
    },
    {
      name: "Panoply",
      description: "Tools by Panoply Technologies Ltd",
      image: "/images/panoply.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "panoply",
      url: "/panoply",
      rating: 0.0,
      reviews: 0,
      details:
        "Panoply is an all-in-one data platform designed to streamline data management for businesses. With 30 times faster implementation and 50% cheaper costs, it offers seamless integration of over 10,000 data sources. This platform empowers users to effortlessly store, analyze, and visualize data, enabling informed decision-making. Trusted by thousands, Panoply ensures data flows freely, promoting efficiency and productivity across organizations. Experience the ease of data management with Panoply's intuitive interface and comprehensive features.",
    },
    {
      name: "Funnel",
      description: "All costs and results, in one place, all the time.",
      image: "/images/funnel.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "funnel",
      url: "/funnel",
      rating: 0.0,
      reviews: 0,
      details:
        "Funnel is a marketing data hub that centralizes and streamlines reporting and analytics processes. With its ISO & SOC2 certifications, it ensures data security and reliability. It seamlessly connects, stores, organizes, and shares marketing data from various sources, enabling faster and accurate reporting. Trusted by over 2000 global customers, it empowers teams with actionable insights, leading to improved efficiency and optimized marketing budgets. With no credit card required and expert support available, Funnel offers a transparent and hassle-free solution for businesses seeking to gain control of their data.",
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
