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
      name: "Go GST Bill",
      description: "Best Billing Software for Retail Shop",
      image: "/images/go-gst-bill.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "go-gst-bill",
      url: "/go-gst-bill",
      rating: 0.0,
      reviews: 0,
      details:
        "Go GST Bill – India's leading free GST billing software designed for every business. Trusted by over 70,000 SMEs, this lifetime free solution offers a secure and efficient platform for seamless invoicing, inventory management, and business control. With features like 1-click E-Way Bill, easy sharing of invoices via WhatsApp and email, and a user-friendly mobile app, Go GST Bill simplifies your daily billing activities. Enjoy the convenience of quick invoicing, anytime access on any device, and responsive customer support. Elevate your business with Go GST Bill – where simplicity meets reliability.",
    },
    {
      name: "ProfitBooks",
      description: "Best billing software in India for small business",
      image: "/images/profitbooks.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "profitbooks",
      url: "/profit-books",
      rating: 0.0,
      reviews: 0,
      details:
        "ProfitBooks.net is a robust online accounting software designed for small businesses, offering powerful features to streamline financial management. With a focus on efficient invoicing, it allows users to create professional invoices effortlessly and accelerate payment processing. The software enables unlimited invoice creation, contact management, and online payment collection. It goes beyond basic invoicing by facilitating expense recording, automatic tax calculations, and providing detailed sales reports for informed decision-making. ProfitBooks prioritizes customer success with in-app chat support, a comprehensive Support Center, and additional resources for business growth. Sign up for a 100% free account today to elevate your invoicing and accounting experience.",
    },
    {
      name: "Zoho Invoices",
      description: "Best Billing Software in India",
      image: "/images/zohoinvoices.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "zohoinvoices",
      url: "/zoho-invoices",
      rating: 0.0,
      reviews: 0,
      details:
        "Zoho Books, a comprehensive online accounting software solution offered by Zoho Corporation. With a user-friendly interface and powerful features, Zoho Books simplifies your financial management tasks. It allows you to effortlessly manage your business's finances, track expenses, create invoices, and handle payroll. Whether you're a small business owner or a freelance professional, Zoho Books is designed to streamline your accounting processes, making it easier for you to focus on growing your business. Explore the world of efficient financial management with Zoho Books today.",
    },
    {
      name: "eRetail Cybertech - pranaPOS",
      description: "Breathing life into your Retail business with pran",
      image: "/images/eretail-cybertech.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "eretail-cybertech",
      url: "/eretail-cybertech",
      rating: 0.0,
      reviews: 0,
      details:
        "Prana, an innovative cloud-based POS software designed to streamline your business processes. From maintaining point-of-sale transactions to efficiently managing inventory and generating insightful reports, Prana empowers you to oversee your business from any location worldwide. Featuring a secure platform, our software ensures the utmost protection for your data and transactions. The intuitive interface simplifies tasks, allowing you to add inventory, facilitate sales, and effortlessly run your business on-the-go. Set up your POS system within minutes and embark on a 14-day trial to experience the convenience and power of Prana.",
    },
    {
      name: "IVEPOS",
      description: "Small Business Invoice Software in India",
      image: "/images/ivepos.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "ivepos",
      url: "/ivepos",
      rating: 0.0,
      reviews: 0,
      details:
        "IVEPOS is a POS (point-of-sale) software designed for small and medium-scale businesses, offering a full-stack super app to streamline billing, payments, accounting, inventory, customer management, and loyalty programs. With over 100 features and a user-friendly interface, IVEPOS caters to restaurants, retail stores, cafes, bars, bakeries, salons, food trucks, and more. Its cloud-based system provides real-time tracking of sales and inventory, employee management, and sales analytics, making it an essential tool to enhance operational efficiency and boost revenue. Trusted by over 30,000 businesses across 70 cities, IVEPOS stands out for its one-click billing, payment acceptance, and comprehensive business management solutions.",
    },
    {
      name: "CaptainBiz",
      description: "All in one Billing and Invoicing Software",
      image: "/images/captain-biz.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "captainbiz",
      url: "/captain-biz",
      rating: 0.0,
      reviews: 0,
      details:
        "CaptainBiz is your go-to solution for small businesses in India, offering an All-in-One GST Billing Software designed to streamline your invoicing, inventory management, and overall business operations. Trusted by over 46,000 SMBs across India and recommended by the GST Network, CaptainBiz ensures you get paid on time, control costs, and facilitate smooth business growth. With industry-specific invoice templates, real-time inventory tracking, and secure operation from anywhere, CaptainBiz is a comprehensive management solution. Choose from various pricing plans starting with a 14-day free trial, and experience the joy of doing business efficiently. Sign up today!",
    },
    {
      name: "QuickBooks Online",
      description: "Making Modern Businesses GST friendly",
      image: "/images/quickbooks.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "quickbooksonline",
      url: "/quickbooksonline",
      rating: 0.0,
      reviews: 0,
      details:
        "QuickBooks Online, a cloud-based solution that empowers small businesses and professionals in India. Seamlessly manage GST compliance, generate invoices, and access crucial financial data anytime, anywhere. Chartered accountants benefit from effortless GST return filing, while small business owners enjoy features like HSN/SAC lookup, auto-calculated taxes, and integration with popular apps. QuickBooks ensures accuracy with input tax credits, simplified data import-export, and customizable reports, providing a comprehensive accounting solution for diverse needs.",
    },
    {
      name: "Spectrum Billing Solution",
      description: "A comprehensive POS Billing System",
      image: "/images/spectrumbilling.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "spectrumbilling",
      url: "/spectrumbilling",
      rating: 0.0,
      reviews: 0,
      details:
        "Spectrum Billing Solutions is a leader in revenue cycle management services for healthcare providers, offering a distinct advantage through deep industry knowledge, advanced technology, and extensive experience. Our dedicated team ensures the efficient and streamlined management of your revenue cycle, working tirelessly to maximize your financial outcomes. Consider us your committed partner in navigating the complexities of billing, from benefits verification to insurance and patient collections. Our satisfied clients attest to our dedication, praising our ability to simplify billing processes and collect challenging claims. Join Spectrum Billing Solutions and experience the difference in optimizing your revenue cycle with a trusted and results-driven partner.",
    },
    {
      name: "Oracle Fusion Cloud ERP",
      description: "SaaS solution with top ERP features & capabilities",
      image: "/images/oracle.png",
      imageWidth: 130,
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
      imageWidth: 130,
      imageHeight: 10,
      altText: "mybillbook",
      url: "/billbook",
      rating: 0.0,
      reviews: 0,
      details:
        "MyBillBook is your friendly financial assistant, here to make billing and invoicing a breeze. It's designed with simplicity in mind, so you can effortlessly create, send, and keep track of invoices, saving you time and reducing mistakes. Plus, it goes beyond just invoices - it helps you manage expenses and provides clear financial reports. Whether you're a small business owner or a freelancer, MyBillBook is your partner in staying organized and taking charge of your finances. Say goodbye to financial headaches and hello to a smoother billing experience with MyBillBook.",
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
      name: "Oracle NetSuite ERP",
      description: "Handle All Your Accounting Operations With Ease",
      image: "/images/oraclenet.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "oraclenet",
      url: "/oracle-netsuite",
      rating: 0.0,
      reviews: 0,
      details:
        "NetSuite's ERP software is a comprehensive solution designed to streamline and enhance your business operations. With a focus on efficiency and scalability, NetSuite ERP offers a unified platform for financial management, order management, procurement, and more. It empowers businesses to gain real-time insights, improve decision-making, and optimize resource utilization. This cloud-based ERP system provides a flexible and customizable approach to address the unique needs of various industries, making it an ideal choice for companies seeking to elevate their productivity and competitiveness. Discover how NetSuite ERP can help your organization achieve greater success in managing critical aspects of your business.",
    },
    {
      name: "Ankpal",
      description: "A Cloud Based Online Accounting Software",
      image: "/images/ankpal.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "ankpal",
      url: "/ankpal",
      rating: 0.0,
      reviews: 0,
      details:
        "Ankpal is a versatile financial management software designed to streamline your accounting processes. With its user-friendly interface and robust features, Ankpal simplifies bookkeeping, expense tracking, and invoicing, making it an ideal solution for businesses of all sizes. This cloud-based platform offers real-time financial insights, helping you make informed decisions and stay in control of your finances. Experience greater efficiency and accuracy in managing your financial tasks with Ankpal, ensuring your business's fiscal health is always in check.",
    },
    {
      name: "Marg ERP 9+Accounting",
      description: "Manage your payables and receivables faster",
      image: "/images/marg.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "marg",
      url: "/margerp",
      rating: 0.0,
      reviews: 0,
      details:
        "Marg Compusoft is a powerful and versatile software platform designed to streamline and enhance your business operations. With a wide array of features, including inventory management, accounting, and point-of-sale solutions, Marg Compusoft caters to businesses of all sizes. Its user-friendly interface and real-time data access make managing your business a breeze. Experience the convenience of cloud-based operations and efficient resource management with Marg Compusoft, your trusted partner for growth and success.",
    },
    {
      name: "Smaket",
      description: "Smaket makes your Complex business Simple",
      image: "/images/smaket.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "smaket",
      url: "/smaket",
      rating: 0.0,
      reviews: 0,
      details:
        "Discover Smaket, the revolutionary cloud-based solution that simplifies accounting and billing processes. With Smaket, you can say goodbye to complexities and focus on business growth, all without needing prior accounting knowledge. Access your business data from any device, anywhere, and ensure data security through cutting-edge measures and auto backup. From GST compliance to inventory tracking, Smaket has your accounting needs covered. Embrace the future of accounting and propel your business to success with Smaket!",
    },
    {
      name: "GenieBooks",
      description: "Easy to use account software for small business",
      image: "/images/genie.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "genie",
      url: "/geniebooks",
      rating: 0.0,
      reviews: 0,
      details:
        "GenieBooks, your essential partner for small and medium-sized business success. We specialize in simplifying complex operations, offering unparalleled control, insightful analytics, and effortless compliance. Let us light the path to growth while we keep the lights on for your business. Welcome to a world of streamlined efficiency and strategic insights with GenieBooks by your side.",
    },
    {
      name: "ProfitBooks",
      description: "Best accounting software for small business",
      image: "/images/profitbooks.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "profitbooks",
      url: "/profitbooks",
      rating: 0.0,
      reviews: 0,
      details:
        "ProfitBooks is a versatile accounting software designed to simplify financial management for businesses of all sizes. With user-friendly features, it streamlines tasks like invoicing, expense tracking, and tax compliance, making it an ideal solution for entrepreneurs and small to medium-sized enterprises. Its cloud-based platform ensures accessibility from anywhere, while robust reporting tools empower informed decision-making. ProfitBooks is the go-to solution for those seeking to efficiently manage their finances and grow their business.",
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
        "BUSY is a versatile integrated billing and accounting software designed for micro, small, and medium enterprises. With its user-friendly interface and robust features, it adapts seamlessly to your business requirements. Whether you prefer Desktop, Cloud, or Mobile App access, BUSY Software offers a flexible solution to streamline your financial management tasks. Make your accounting hassle-free with BUSY!",
    },
    {
      name: "Horizon ERP",
      description: "GST Billing software with Inventory & Accounts",
      image: "/images/horizon.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "horizon",
      url: "/horizon",
      rating: 0.0,
      reviews: 0,
      details:
        "Horizon Tech Solutions, accessible at www.horizontechsolutions.co.in, is a leading technology company with a decade of experience in ERP solutions. They offer Horizon ERP, the finest ready-to-use GST billing and accounting software for small businesses in India. This user-friendly software streamlines back-end processes, such as billing, invoicing, and inventory management, allowing businesses in distribution, retail, and manufacturing to focus on revenue generation. Horizon ERP follows best technological practices and simplifies GST return filing, making it an invaluable tool for small enterprises. It provides full control and adapts seamlessly to existing business management systems.",
    },
    {
      name: "Giddh",
      description: "Books that make sense",
      image: "/images/giddh.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "giddh",
      url: "/giddh",
      rating: 0.0,
      reviews: 0,
      details:
        "Giddh is a versatile and user-friendly accounting software that simplifies financial management for businesses of all sizes. With an intuitive interface and powerful features, it streamlines tasks such as invoicing, expense tracking, and financial reporting. Giddh also offers seamless integration with banking and taxation systems, making it an indispensable tool for entrepreneurs and finance professionals. Whether you're a small startup or an established corporation, Giddh provides a comprehensive solution for all your accounting needs, helping you maintain financial clarity and efficiency. Try Giddh to enhance your financial management today!",
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
