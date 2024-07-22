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
      name: "MMI Softwares Pvt. Ltd",
      description: "A Unique Solution for every Unique Business",
      image: "/images/xpert.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "xpert",
      url: "/mmi-software",
      rating: 0.0,
      reviews: 0,
      details:
        "MMI Softwares Pvt. Ltd. offers a software solution designed for a range of businesses, including departmental stores, electronic showrooms, garments showrooms, hardware tiles and sanitary showrooms, as well as any retail showroom and manufacturing units. This versatile software encompasses modules for website design and development, mobile app development, digital marketing, and social media marketing. With a user-friendly interface, MMI Software streamlines operations, making it the ideal choice for diverse businesses looking to enhance their online presence, manage inventory, and optimize overall efficiency. Take advantage of MMI's tailored solutions to transform your business processes and stay ahead in the digital landscape.",
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
      name: "My Bill Book",
      description: "Best Accounting Software for Financial Reporting",
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
      name: "LOGIC ERP",
      description: "End-to-end retail management solution",
      image: "/images/logic.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "logic",
      url: "/logic-erp",
      rating: 0.0,
      reviews: 0,
      details:
        "LOGIC ERP is an Enterprise Resource Planning (ERP) and Point of Sale (POS) software designed to streamline retail store management. With robust features encompassing billing, inventory management, CRM, loyalty programs, schemes, discounts, e-commerce, accounts, and GST filing, it caters to diverse industries including Apparel & Footwear, FMCG, Pharma & Healthcare, Lifestyle & Fashion, Electrical & Electronics, Food & Beverages, Wellness & Salon, and Hardware. The software supports various retail formats such as COCO, COFO, SIS, LFS, FOFO, and FOCO, offering a flexible organizational structure with multiple operating units, retail outlets, warehouses, and supply points. It also facilitates dynamic pricing, rewards, customer loyalty programs, and omnichannel retailing, making it a versatile solution for modern businesses.",
    },
    {
      name: "Vastralaya",
      description: "Textile Shop Software By Dataman Computer Systems.",
      image: "/images/vastralaya.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "vastralaya",
      url: "/vastralaya",
      rating: 0.0,
      reviews: 0,
      details:
        "Vastralaya is a premier garment and apparel management software, offering a comprehensive CRM + ERP solution tailored for global retailers and wholesalers. This web-based solution seamlessly integrates organizational systems, ensuring error-free transactions and streamlined production processes. With modules for sales, billing, inventory, and more, Vastralaya centralizes operations for efficient management and increased profitability in the textile manufacturing sector. Its user-friendly interface, combined with features like customized invoice printing, barcode scanning, and graphical reports, makes it a top choice for enhancing business operations in the fashion and apparel industry.",
    },
    {
      name: "Ginesys Retail ERP",
      description: "Complete software ecosystem for your retail",
      image: "/images/ginesys.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "ginesys",
      url: "/ginesys-retail",
      rating: 0.0,
      reviews: 0,
      details:
        "Ginesys Retail ERP is a flexible cloud-based software designed specifically for the retail value chain. It offers a modular and scalable solution to cater to various business needs, including procurement, inventory management, sales and distribution, warehouse automation, accounting, custom reporting, production, secondary sales tracking, and audit logs. With features like offline and online cloud POS, business intelligence, and seamless integrations, Ginesys ensures a streamlined retail management experience. Its cloud computing advantage eliminates the need for infrastructure management, enhances security, and provides 24/7 access, making it an ideal choice for business owners seeking a ready-to-use, minimal customization, and zero IT management ERP solution.",
    },
    {
      name: "Pretture",
      description: "Smart, Easy & Affordable",
      image: "/images/pretture.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "pretture",
      url: "/pretture",
      rating: 0.0,
      reviews: 0,
      details:
        "Pretture is a cloud solution designed to streamline manufacturing processes for small to mid-sized businesses in the fashion industry. This software offers real-time inventory tracking, allowing users to monitor raw materials, work-in-progress, wastage, and finished goods seamlessly. With easy accessibility via smartphones, Prêtture provides insights into manufacturing unit activities, job works status, and precise costing at any production stage. The system ensures organized inventory management, eliminates missing inventories, and proactively alerts users about overdue job works or pending purchase orders. Prêtture's user-friendly curation program ensures a smooth onboarding process for teams, enhancing overall operational efficiency in the fashion manufacturing sector.",
    },
    {
      name: "Uprow POS",
      description: "A complete Retail POS Software for small to big retailers",
      image: "/images/uprow.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "uprow",
      url: "/uprow-pos",
      rating: 0.0,
      reviews: 0,
      details:
        "Uprow POS is a cloud-based inventory management software designed to elevate retail businesses. Seamlessly integrating sales, purchase, barcoding, accounting, and customer management, it offers a centralized solution for streamlined operations. With features such as real-time data access, multi-store management, and smart reporting, it empowers businesses to make informed decisions. Uprow POS caters to diverse industries, from fashion and grocery stores to bakery shops and beyond. Its commitment to automation, seamless invoicing, and stress-free accounting, coupled with excellent customer support, makes it an essential tool for businesses aiming for efficiency, growth, and an enhanced customer experience.",
    },
    {
      name: "Busy Accounting",
      description: "The Complete Business Management Software for SMEs",
      image: "/images/busy.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "busy",
      url: "/busy-accounting",
      rating: 0.0,
      reviews: 0,
      details:
        "Busy Accounting is a comprehensive business management software designed for small and medium-sized enterprises (SMEs). It enhances operational efficiency with features like reservation management, real-time channel updates, and a mobile PMS. This cloud-based software helps increase revenue by 20%, boosts online bookings by 45%, and saves 60% in staff time. Trusted by hoteliers in over 100 countries, Busy Accounting provides a unified dashboard for managing multiple properties and a powerful web booking engine for commission-free direct bookings. It offers 24x7 support and a subscription-based model for cost-effective operations and real-time decision-making.",
    },
    {
      name: "Horizon ERP",
      description: "The Complete Business Management Software for SMEs",
      image: "/images/horizon.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "horizon",
      url: "/horizon",
      rating: 0.0,
      reviews: 0,
      details:
        "Horizon ERP is a leading technology company with a decade of experience in ERP solutions. Offering Horizon ERP, the finest ready-to-use GST billing and accounting software for small businesses in India. It streamlines back-end processes like billing, invoicing, and inventory management, allowing businesses to focus on revenue generation. Horizon ERP follows best technological practices and simplifies GST return filing, making it an invaluable tool for small enterprises. It provides full control and adapts seamlessly to existing business management systems.",
    },
    {
      name: "CaptainBiz",
      description: "Online Retail Management Software in India",
      image: "/images/captainbiz.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "captainbiz",
      url: "/captainbiz",
      rating: 0.0,
      reviews: 0,
      details:
        "CaptainBiz is a GST billing software designed for small businesses in India, offering seamless invoicing, inventory management, and accounting solutions. Trusted by over 46,000 SMBs nationwide and recommended by the GST Network, it ensures timely payments, cost control, and smooth business growth. With industry-specific invoice templates, real-time inventory tracking, and secure operations accessible from anywhere, CaptainBiz caters to manufacturers, traders, and service providers. Choose from flexible pricing plans, starting with a 14-day free trial, to experience the power of this online business management solution.",
    },
    {
      name: "QuickBill",
      description: "Simple solutions for your business",
      image: "/images/quickbill.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "quickbill",
      url: "/quickbill",
      rating: 0.0,
      reviews: 0,
      details:
        "QuickBill is a business solution catering to small, midsize, and large enterprises, accommodating operations from single stores to expansive chains. Offering seamless integration, it empowers businesses with enhanced control over inventory, POS/trading operations, and financials. Known for its quick implementation and user-friendly interface, QuickBill is a comprehensive tool that supports growth plans effortlessly. Key features include easy installation, robust billing, inventory management, dynamic reporting, and streamlined GST compliance, making it the go-to solution for businesses at any stage. Elevate your business efficiency with QuickBill – the simple solution for your diverse operational needs.",
    },
    {
      name: "Marg Retail Software",
      description: "500+Centers for Training & Support, 6 Lakh+ Users",
      image: "/images/marg.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "marg",
      url: "/marg-retail",
      rating: 0.0,
      reviews: 0,
      details:
        "Marg Retail Software is an integrated solution designed for retail businesses, offering centralized management of billing, accounting, and inventory. With features like fast billing, GST readiness, connected banking, and touch screen POS, it empowers businesses to enhance efficiency by 40%. Handling 20 billion+ invoices and 100 billion+ transactions annually, it caters to 1 million+ businesses worldwide. The software excels in inventory and expiry management, barcode systems, and offers discounts/schemes to boost sales. It also facilitates home delivery, re-order management, and online purchase imports, providing a comprehensive solution for retailers to streamline operations and increase profits by 20% or more.",
    },
    {
      name: "FusionRetail",
      description: "Simplifying Retail Businesses",
      image: "/images/fusion-retail.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "fusion retail",
      url: "/fusionretail",
      rating: 0.0,
      reviews: 0,
      details:
        "FusionRetail is a Retail Store Management Software designed to streamline retail businesses. Offering features such as POS Billing, Inventory Management, Customer Loyalty Programs, Financial Accounting, Payroll Management, and Store Analytics, it caters to diverse retail sectors globally. With over 35,000 installations in 40 countries and 20 years of industry experience, FusionRetail stands out for its efficiency in increasing sales by 20-30%, reducing inventory holding costs, optimizing staff productivity, and maximizing margins. Its innovative interface, continuous enhancements, and dedicated support make it the preferred choice for retailers seeking a unified platform for POS, back office, and web store management.",
    },
    {
      name: "Retail Pro",
      description:
        "Software by Integrated Retail Management Consulting Pte Ltd",
      image: "/images/retail-pro.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "retail-pro",
      url: "/retail-pro",
      rating: 0.0,
      reviews: 0,
      details:
        "Retail Pro is a software designed to optimize business operations globally. With over 35 years of innovation, Retail Pro offers rich functionality, multi-national capabilities, and unparalleled flexibility. This powerful solution provides deep store management functionality, customizable platform POS software, and centralized and localized global support for all channels and devices. With features such as powerful POS and retail management, end-to-end integration, and a subscription pricing model, Retail Pro empowers businesses to build data-driven operations, ensuring a seamless and efficient retail experience. Trusted by retailers in 130+ countries, Retail Pro is a leader in omni-channel strategy, facilitating customer engagement and capitalizing on retail trends.",
    },
    {
      name: "eLiteERP",
      description: "Software by ZipBooks Software Solutions Pvt. Ltd.",
      image: "/images/eliteerp-retail.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "eliteerp retail",
      url: "/eliteerp",
      rating: 0.0,
      reviews: 0,
      details:
        "eLiteERP is a windows-based ERP solution tailored for Micro and Small enterprises seeking a cost-effective transition from manual processes to an integrated business solution. With multi-location and multi-currency support, it facilitates global business operations. The user-friendly software, built on the latest Microsoft .NET platform, integrates modules like Financial Accounting, Sales and Distribution, and Procurement. eLiteERP ensures 360° development, control, and operational efficiency, offering an oomph factor for businesses to smoothly navigate and succeed in the dynamic modern business landscape. Trusted by various industries, it is a smart choice for streamlining business functionalities and achieving optimal performance.",
    },
    {
      name: "eShopaid",
      description: "Software by Wondersoft Pte Ltd.",
      image: "/images/eshopaid.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "eshopaid",
      url: "/eshopaid",
      rating: 0.0,
      reviews: 0,
      details:
        "eShopaid is a web application designed for retail chains, offering a unified Point of Sale (POS) solution. It operates on the latest technologies, providing a device-agnostic experience at the store front. With real-time data synchronization and robust security measures, eShopaid caters to the needs of stores, warehouses, and head offices seamlessly. Its deployment models include an entirely online cloud POS for businesses with stable internet connectivity and a thin offline POS suitable for high transaction volumes or locations with inconsistent internet access. This versatile software ensures businesses of all sizes and industries, from apparel to healthcare, can thrive with tailored POS solutions.",
    },
    {
      name: "eFacto",
      description: "Complete ERP for Retail & Distribution",
      image: "/images/efacto.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "efacto",
      url: "/efacto",
      rating: 0.0,
      reviews: 0,
      details:
        "eFacto® is a Retail ERP Software designed for diverse retail formats, including supermarkets, departmental stores, and hypermarkets in India, particularly in Delhi NCR. With optimized POS operations, it accommodates a large number of concurrent users and extends its effectiveness to industries like cosmetics, fashion, gifts, manufacturing, and warehousing. Boasting 1000+ users in grocery stores, 300+ in gift galleries, and significant presence in cosmetic retail, apparels, and footwear, eFacto® stands out for its comprehensive modules covering procurement, POS billing, order management, repacking, CRM, loyalty programs, accounting, GST compliance, manufacturing, and more. Backed by strong support, customization capabilities, and a secure infrastructure, eFacto® is not just a retail billing software but a complete ERP solution trusted by prominent names like L'occitane India, Weedo Supermarket, Mamraj Retail Ltd, and Khera Departmental Store.",
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
