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
      name: "Agworld Farm Management Software",
      description: "Software by Agworld",
      image: "/images/agworld.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "agworld",
      url: "/agworld",
      rating: 0.0,
      reviews: 0,
      details:
        "Agworld Farm Management Software is a farm information management ecosystem designed for growers, agronomists, retailers, and service providers. This data management solution facilitates collaboration by enabling stakeholders to work together seamlessly on the same set of farm data, ensuring efficient farm planning, budgeting, product input tracking, job management, compliance, agronomy, logistics, and grower services. With a cloud-based system, Agworld allows easy access and sharing of farm data, promoting real-time updates and reducing errors. Offering a 7-day trial, Agworld boasts a decade of commitment, stability, and a global presence, empowering users with insightful, actionable data for informed decision-making in agriculture.",
    },
    {
      name: "AGRIVI's Farm Management Software",
      description: "Best agriculture management software",
      image: "/images/agrivi.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "agrivi",
      url: "/agrivi",
      rating: 0.0,
      reviews: 0,
      details:
        "AGRIVI's Farm Management Software is a digital agriculture solution empowering growers and stakeholders across the agrifood value chain. It offers data-driven insights, real-time analytics, and decision-making support for farms of varying sizes, enterprise farms, cooperatives, and food & beverage companies. The platform includes modules like Farm Insights for small-to-mid sized production, Farm Enterprise for large operations, and Agriculture Supply Chain for vertically integrated management. Trusted by Fortune 500 companies, AGRIVI's software facilitates sustainability goals, enhances productivity, and optimizes resource use, making it a crucial tool for informed and efficient farming decisions.",
    },
    {
      name: "Croptracker",
      description: "Software by Dragonfly",
      image: "/images/croptracker.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "croptracker",
      url: "/croptracker",
      rating: 0.0,
      reviews: 0,
      details:
        "Croptracker is an award-winning farm management software designed for fruit and vegetable growers. Leveraging cutting-edge computer vision technology called Harvest Quality Vision, it enables growers to assess produce size and quality objectively and efficiently. Since 2006, Croptracker has collaborated with growers, packers, and associations to prioritize features that enhance productivity, workforce connectivity, traceability, and cloud-based record accessibility. The software streamlines record-keeping, scheduling, work crew communications, analytics, and traceability, simplifying food safety compliance. With comprehensive support, Croptracker aims to make crop production more profitable, efficient, and safe for agricultural businesses of all sizes.",
    },
    {
      name: "EasyFarm",
      description: "Best software for agriculture management",
      image: "/images/easyfarm.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "easyfarm",
      url: "/easyfarm",
      rating: 0.0,
      reviews: 0,
      details:
        "EasyFarm is a pioneering farm and ranch management tool that has redefined record-keeping in agriculture since its inception in 1993. With over 30 years of proven excellence, this software offers unparalleled price-performance value. It simplifies farm accounting through a real-time, single-entry input approach, eliminating the need for month-end closures or transaction postings. EasyFarm effortlessly manages diverse aspects of farming, including crops, livestock, machinery, and inventory, with easy-to-use screens and powerful reports. Experience the efficiency of EasyFarm – a comprehensive, fully supported solution that streamlines bookwork, saving farmers valuable time.",
    },
    {
      name: "Farmbrite",
      description: "Software by Farmbrite",
      image: "/images/farmbrite.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "farmbrite",
      url: "/farmbrite",
      rating: 0.0,
      reviews: 0,
      details:
        "Farmbrite is an all-in-one farm management software designed for multi-species and biodiverse farms and ranches. It provides integrated tools for livestock management, farm organization, financial tracking, and direct online selling. With features like livestock record-keeping, crop planning, and collaborative task management, Farmbrite aims to streamline operations, boost farm efficiency, and increase profitability. The software also offers a seamless e-commerce platform for farmers to sell products directly to consumers online, coupled with comprehensive reporting and analytics to provide a complete overview of the entire farming operation.",
    },
    {
      name: "FieldMargin",
      description: "Software by fieldmargin",
      image: "/images/fieldmargin.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "fieldmargin",
      url: "/fieldmargin",
      rating: 0.0,
      reviews: 0,
      details:
        "FieldMargin is a farm management software designed to streamline agricultural operations. With a living map feature, users can efficiently map their farm, record crops, and plan rotations, incorporating details like fences, gateways, buildings, and water pipes. The platform facilitates livestock management, enabling users to set up herds, track animal numbers, and calculate grazing and pasture rest days. Additionally, FieldMargin aids in planning and sharing field tasks, allowing users to check and record inputs, assign jobs to team members, and track completion dates. Trusted by thousands of farms globally, this next-generation tool offers offline functionality, seamless team synchronization, and an intuitive design for both mobile and computer use.",
    },
    {
      name: "Chetu",
      description: "World-Class Software Solutions.",
      image: "/images/chetu.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "chetu",
      url: "/chetu",
      rating: 0.0,
      reviews: 0,
      details:
        "Chetu's Agriculture Software Development is a comprehensive suite of solutions that leverages advanced AgTech technologies to transform farming operations. From precision agriculture and intelligent chemical spraying to AI-driven crop monitoring and autonomous harvesting, Chetu's software enhances efficiency, productivity, and sustainability in agriculture. The platform covers areas such as Land Management, Farm Management, Livestock Management, Seed-to-Sale solutions, and Agriculture Drones. With expertise in AI, machine learning, and smart farming, Chetu provides tailored software solutions that empower farmers to optimize resource usage, increase yields, and stay compliant with regulatory standards.",
    },
    {
      name: "AgriSys ERP",
      description: "Software by Source Edge Software Technologies Pvt Ltd",
      image: "/images/agrisys.png",
      imageWidth: 140,
      imageHeight: 10,
      altText: "agrisys",
      url: "/agrisys",
      rating: 0.0,
      reviews: 0,
      details:
        "AgriSys ERP is an integrated Enterprise Resource Planning (ERP) solution designed for corporate farming and agricultural processes. This software streamlines, integrates, and standardizes various aspects of seed production, offering benefits such as controlled inventory management, precise production planning, and efficient working capital control. Its modules cover finance and accounting, purchase management, production planning, quality control, inventory management, fixed asset tracking, and comprehensive HR and payroll functionalities. AgriSys ERP empowers seed producers with insights into their processes, ensuring better decision-making, cost management, and overall business efficiency in the dynamic agriculture sector.",
    },
    {
      name: "FarmERP",
      description: "Software by Shivrai Technologies Pvt. Ltd",
      image: "/images/farmerp.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "farmerp",
      url: "/farmerp",
      rating: 0.0,
      reviews: 0,
      details:
        "FarmERP is a farm business management software that has led the agricultural industry's digital transformation since 2001. Operating in over 25 countries, FarmERP focuses on sustainable agriculture, aligning with UN SDGs like Zero Hunger and Climate Change. As a member of GLOBALG.A.P and Sustainable Rice Platform, it elevates food safety standards globally. FarmERP's comprehensive platform supports Fresh Fruit and Vegetable businesses, ensuring safe food production, climate resilience, and traceability. With a single ERP tool, it streamlines processes for various agribusiness verticals, promoting productivity and profitability while minimizing environmental impact.",
    },
    {
      name: "AgriWebb",
      description: "One of the best agriculture management software",
      image: "/images/agriwebb.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "agriwebb",
      url: "/agriwebb",
      rating: 0.0,
      reviews: 0,
      details:
        "AgriWebb is a Livestock Management Software designed to propel your farm towards success. This all-in-one solution simplifies ranch management, offering features like ranch mapping, individual and herd management, grazing insights, inventory management, and task management. With offline functionality, it ensures seamless operation anywhere. AgriWebb empowers farmers to enhance productivity through record-keeping, gain instant insights into profitability, and promote sustainability by providing detailed grazing analytics. Trusted by 16,000 farmers worldwide, it streamlines operations, increases team productivity, and contributes to the long-term success of your farming enterprise.",
    },
    {
      name: "Cropwise",
      description: "DIGITAL FARMING CONNECTED",
      image: "/images/cropwise.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "cropwise",
      url: "/cropwise",
      rating: 0.0,
      reviews: 0,
      details:
        "Cropwise is a digital farming platform powered by Syngenta, designed to optimize agricultural efficiency and decision-making. This innovative solution integrates various services, including planning, monitoring, crop protection, and sustainability assessment, all within a unified platform. Cropwise simplifies data management, allowing farmers and advisors to save time, act swiftly, and make informed decisions for crop optimization. With practical tools, seamless connectivity, and personalized solutions, Cropwise transforms the digital landscape of agriculture, supporting users worldwide across diverse crops, farm sizes, and operations.",
    },
    {
      name: "AgriXP",
      description: "Software by AgriXP",
      image: "/images/agrixp.png",
      imageWidth: 110,
      imageHeight: 10,
      altText: "agrixp",
      url: "/agrixp",
      rating: 0.0,
      reviews: 0,
      details:
        "AgriXP, a online agriculture management system, serves as a free crop planning app for farmers and their consultants. Offering features such as secure record-keeping, crop planning, and budgeting, AgriXP supports seamless interaction between farmers, employees, and agronomists. With continuous updates, the software provides tools like a crop budget calculator, spray record keeping, and detailed weather forecasts. It ensures data confidentiality, regulatory compliance, and easy export of information to Excel and shapefiles. AgriXP's commitment to small farms includes a free version, with premium options available for larger operations.",
    },
    {
      name: "Kizeo Forms",
      description: "Form automation and data collection application",
      image: "/images/kizeo.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "kizeo",
      url: "/kizeo",
      rating: 0.0,
      reviews: 0,
      details:
        "Kizeo Forms is a mobile forms application designed to streamline and automate various activities across industries. Comprising an intuitive drag-and-drop online form builder and a mobile application, it empowers users to transform paper documents into digital equivalents effortlessly. With features like custom workflows, data sharing, and seamless integration, Kizeo Forms facilitates efficient data collection, automates processes, and enhances overall productivity. The mobile application enables users to create, customize, and act on forms, offering benefits such as time savings, increased efficiency, and improved responsiveness. Trusted by professionals globally, it caters to diverse sectors, offering industry-specific solutions for tasks ranging from audits and security reports to timesheets and invoices.",
    },
    {
      name: "Marg Mandi Software",
      description: "800+Centers for Training & Support, 10 Lakh+ Users",
      image: "/images/marg-mandi-software.png",
      imageWidth: 110,
      imageHeight: 10,
      altText: "marg-mandi-software",
      url: "/marg-mandi-software",
      rating: 0.0,
      reviews: 0,
      details:
        "Marg Mandi Software is a agricultural market solution that empowers farmers with smart mandi software, offering features like market analysis, inventory management, and efficient trading. With over 1 million businesses served worldwide, Marg ERP ensures seamless operations, including 100% free e-invoicing, auto cloud backup, robust data security, and easy, fast billing. The software covers diverse aspects such as GST filing, auto-bank reconciliation, annual reporting, credit limit monitoring, and live tracking of billing and dispatch. Marg Mandi Software revolutionizes the agri-market experience, maximizing profits, and optimizing operations for a hassle-free and modern market management approach.",
    },
    {
      name: "John Deere",
      description: "Software by Deere & Company",
      image: "/images/john-deere.png",
      imageWidth: 110,
      imageHeight: 10,
      altText: "john-deere",
      url: "/john-deere",
      rating: 0.0,
      reviews: 0,
      details:
        "John Deere's Precision Agriculture Solution, AutoTrac™, is a groundbreaking automated vehicle guidance system, enhancing farming efficiency in India. Integrating advanced technology with power, John Deere offers a range of tractors from 28 HP to 75 HP, backed by a 5-year warranty. The Precision Ag system includes components like the Display Gen - 4, Steering ATU 300, and Receiver StarFire™ 6000. Complemented by the customizable John Deere combine harvester featuring a 100 HP engine and the innovative SynchroSmart feature, this solution elevates agricultural practices. Explore a comprehensive selection of tractor implements designed for diverse farming needs, ensuring optimal performance and productivity.",
    },
    {
      name: "SPL Technologies",
      description: "Software by SPL Technologies Pvt. Ltd.",
      image: "/images/spl.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "spl",
      url: "/spl-tech",
      rating: 0.0,
      reviews: 0,
      details:
        "SPL Technologies' Scanalyzer suite is an advanced agricultural technology solution designed for precision farming. The software integrates tools like Scanalyzer 3D, Scanalyzer HTS, Scanalyzer PL, and Scanalyzer Field, offering plant phenotyping, water management, information management, crop sensing, yield monitoring, and guidance systems. Developed by SPL Technologies Pvt. Ltd., this innovative software optimizes farming processes, enhances productivity, and contributes to resource conservation, revolutionizing the agriculture sector with cutting-edge technology.",
    },
    {
      name: "Meri Dairy",
      description: "Milk Collection Center Software AMCU",
      image: "/images/meri-dairy.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "meri-dairy",
      url: "/meri-dairy",
      rating: 0.0,
      reviews: 0,
      details:
        "Meri Dairy is a dairy management software available for mobile and computer platforms. It facilitates easy and secure daily milk entries, allowing users to manage shifts, morning, and evening entries either by customer ID or name. The software offers customizable rate charts based on Fat and SNF, supports multiple languages, and ensures data security through AWS Cloud servers. With features like customer management, sell-purchase records, and a user-friendly payment register, Meri Dairy provides a complete solution for milk collection centers, dairy plants, and milk delivery services. The software is available for download on Windows, iOS, and Android platforms, with pricing plans catering to various durations and support levels.",
    },
    {
      name: "AgVision Agribusiness Software",
      description: "Software by DMI Computer Technologies",
      image: "/images/agvision.png",
      imageWidth: 160,
      imageHeight: 10,
      altText: "agvision",
      url: "/agvision",
      rating: 0.0,
      reviews: 0,
      details:
        "AgVision Agribusiness Software is a leading provider of accounting and inventory management solutions tailored for agribusinesses and cooperatives. Established in 1976, AgVision has been serving the technology needs of grain elevators, seed processors, cooperatives, feed mills, fertilizer retailers, and large farms nationwide. Their user-friendly and powerful software, developed with four generations of experience, is praised for its ease of use and effectiveness. The AgVision Scale Interface, highlighted by satisfied customers like Ruth Mascarelli from A.M. Bickley, Inc., is noted for its efficiency in processing grain deliveries and issuing checks, making it a valuable time-saving tool for agribusinesses. For more information, interested parties can contact AgVision at 800.759.9492 or through their Online Request For Information form.",
    },
    {
      name: "Produce Inventory Control System",
      description: "Software by WaudWare",
      image: "/images/produce-inventory.png",
      imageWidth: 110,
      imageHeight: 10,
      altText: "produce-inventory",
      url: "/produce-inventory",
      rating: 0.0,
      reviews: 0,
      details:
        "Produce Inventory Control System (PICS) is a robust and reliable software designed for businesses in the dynamic produce industry. It combines inventory management and traceability seamlessly, eliminating the need for separate software packages. PICS ensures accurate record-keeping through streamlined entries for receipts, shipments, and adjustments, making it more accurate, user-friendly, and cost-effective. The software, available through monthly subscription, meets regulatory requirements such as the Food Safety Modernization Act (FSMA) and the Safe Food for Canadians Act (SFCA). With features spanning buying, selling, production, and more, PICS caters to wholesalers, distributors, growers, and other produce-related businesses, providing comprehensive solutions since 1989.",
    },
    {
      name: "Macadamia Management System",
      description: "Software by Plan-A-Head Computer Systems",
      image: "/images/macadamia.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "macadamia",
      url: "/macadamia",
      rating: 0.0,
      reviews: 0,
      details:
        "Macadamia Management System is a specialized software designed for efficient macadamia farming. Tailored for Windows (compatible with Parallels for Mac), it seamlessly integrates with an innovative in-field weighing device, Weigh Track, to automate data collection of harvested nuts. This comprehensive system analyzes block records, soil analyses, and weather data, providing insightful production and quality graphs. With features like detailed field information, soil analysis, inventory management, and compatibility with Global GAP standards, it ensures accurate recording of farming operations. Trusted by farmers and consultants for over 32 years, it stands out as an easy-to-use, up-to-date solution with seamless integration to streamline agricultural administration.",
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
