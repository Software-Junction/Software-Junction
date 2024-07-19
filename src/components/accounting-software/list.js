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
      name: "Zoho Books",
      description:
        "Best Accounting and Bookkeeping software for Small Businesses",
      image: "/images/zohobooks.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "zohobooks",
      url: "/zoho-books",
      rating: 0.0,
      reviews: 0,
      details:
        "Zoho Books, a comprehensive online accounting software solution offered by Zoho Corporation. With a user-friendly interface and powerful features, Zoho Books simplifies your financial management tasks. It allows you to effortlessly manage your business's finances, track expenses, create invoices, and handle payroll. Whether you're a small business owner or a freelance professional, Zoho Books is designed to streamline your accounting processes, making it easier for you to focus on growing your business. Explore the world of efficient financial management with Zoho Books today.",
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
      name: "Deskera",
      description: "Best Accounting Software for Small Businesses",
      image: "/images/deskera.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "deskera",
      url: "/deskera",
      rating: 0.0,
      reviews: 0,
      details:
        "Introducing Deskera's Accounting Software, a powerful financial management solution designed to streamline your business's financial operations. With its user-friendly interface and robust features, you can easily manage your accounting tasks, from invoicing and expense tracking to payroll and financial reporting. Deskera's cloud-based platform ensures real-time collaboration and data accessibility, enabling you to make informed financial decisions anytime, anywhere. Say goodbye to manual bookkeeping and embrace efficiency with Deskera Accounting Software. Experience the future of accounting today!",
    },
    {
      name: "Wave Accounting",
      description: "100% free accounting system for your business",
      image: "/images/wave.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "wave",
      url: "/wave-accounting",
      rating: 0.0,
      reviews: 0,
      details:
        "Wave is a versatile online accounting software designed to simplify financial management for small businesses and entrepreneurs. With its user-friendly interface, Wave offers a range of essential financial tools, including invoicing, expense tracking, and payroll services. It's an ideal choice for those looking to streamline their accounting processes, all while ensuring compliance and staying on top of their financial health. Whether you're a freelancer or a small business owner, Wave provides the tools you need to take control of your finances and make informed decisions. Best of all, it's a cost-effective solution, offering many essential features for free.",
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
      name: "Freshbooks",
      description: "Cloud Accounting Software Making Billing Painless",
      image: "/images/freshbooks.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "freshbooks",
      url: "/freshbooks",
      rating: 0.0,
      reviews: 0,
      details:
        "FreshBooks is a small-business accounting software product that's well-suited for freelancers and independent contractors. It stands out with its solid phone support and customizable invoicing features. However, it's not ideal for fast-growing businesses because of user and client limits on some of its plans.",
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
      name: "AlignBooks",
      description: "Accounting For Smart Business",
      image: "/images/alignbooks.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "alignbooks",
      url: "/alignbooks",
      rating: 0.0,
      reviews: 0,
      details:
        "Welcome to AlignBooks, your all-in-one financial management solution. Whether you're a small business owner or a large corporation, AlignBooks offers a comprehensive suite of tools to streamline your financial operations. From accounting and invoicing to inventory management and tax compliance, our software simplifies complex financial tasks. With user-friendly features and real-time insights, AlignBooks empowers you to make informed decisions and drive your business towards success. Experience efficiency and accuracy in your financial management with AlignBooks.",
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
      name: "HyperDrive Solutions' POS Billing Software",
      description: "Billing, Accounts and Inventory Management",
      image: "/images/hdpos.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "hdpos",
      url: "/hyperdrive",
      rating: 0.0,
      reviews: 0,
      details:
        "HyperDrive Solutions' POS Billing Software! This cutting-edge solution revolutionizes point-of-sale management, offering seamless and efficient transaction processing. With user-friendly interfaces and robust features, this software streamlines your business operations, from inventory management to sales tracking. Enjoy real-time insights and customizable reports to optimize your business. Say goodbye to manual calculations and hello to a faster, more accurate, and customer-centric checkout experience with HyperDrive Solutions' POS Billing Software.",
    },
    {
      name: "Saral Account",
      description: "Empowering your business",
      image: "/images/saral.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "saral",
      url: "/saral",
      rating: 0.0,
      reviews: 0,
      details:
        "Saral Accounts by Relyonsoft - your comprehensive solution for efficient and user-friendly accounting management. This software simplifies financial tasks, allowing you to effortlessly handle invoices, expenses, and financial reports. With its intuitive interface and robust features, Saral Accounts streamlines bookkeeping and ensures compliance with tax regulations. Experience hassle-free accounting and financial control with this powerful software, designed to empower businesses of all sizes. Visit the website to learn more and take control of your finances today.",
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
    {
      name: "Book Keeper",
      description: "Easy-to-use mobile accounting app for SMBs",
      image: "/images/bookkeeper.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "bookkeeper",
      url: "/book-keeper",
      rating: 0.0,
      reviews: 0,
      details:
        "BookkeeperApp is a powerful and user-friendly financial software designed to streamline your financial management needs. Whether you're a small business owner, freelancer, or an individual looking to take control of your finances, BookkeeperApp offers a comprehensive suite of tools for budgeting, expense tracking, and income management. With its intuitive interface and robust features, you can effortlessly monitor your financial health, create customized reports, and plan for a secure financial future. Join thousands of satisfied users and experience the convenience and control that BookkeeperApp brings to your financial world. Start making smarter financial decisions today with BookkeeperApp.",
    },
    {
      name: "Xero Accounting",
      description: "Software by Xero Limited",
      image: "/images/xero.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "xero",
      url: "/xero-accounting",
      rating: 0.0,
      reviews: 0,
      details:
        "Xero, an innovative cloud-based accounting software, is designed to simplify financial management for businesses of all sizes. With its user-friendly interface, Xero offers a comprehensive suite of tools for bookkeeping, invoicing, payroll, and financial reporting. It enables seamless collaboration with accountants and supports real-time access to financial data, making it easier than ever to stay on top of your company's finances. Whether you're a small startup or a large corporation, Xero provides the digital solutions you need to streamline your financial processes and make informed business decisions.",
    },
    {
      name: "EasY GST",
      description: "Best GST Software for CA & Tax Professionals",
      image: "/images/easygst.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "easygst",
      url: "/easy-gst",
      rating: 0.0,
      reviews: 0,
      details:
        "Easy-GST, your one-stop solution for hassle-free GST (Goods and Services Tax) compliance. This user-friendly software simplifies the complexities of tax management, making it effortless for businesses of all sizes. With its intuitive interface, real-time updates, and comprehensive features, Easy-GST streamlines tax filing, invoice generation, and financial reporting. Say goodbye to the complexities of GST, and say hello to a smoother, more efficient way to manage your tax obligations. Join countless businesses already benefiting from the convenience of Easy-GST.",
    },
    {
      name: "AcmeInsight",
      description: "Billing, accounting and inventory software",
      image: "/images/acme.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "acme",
      url: "/acmeinsight",
      rating: 0.0,
      reviews: 0,
      details:
        "AcmeInsight: Revolutionize your business with our cutting-edge software. AcmeInsight is a powerful, user-friendly platform designed to streamline operations and boost efficiency. Whether you're in retail, hospitality, or any other industry, our software offers a range of features to optimize inventory management, sales tracking, and customer engagement. With AcmeInsight, you can make data-driven decisions, enhance customer experiences, and propel your business to new heights. Experience the future of business management with AcmeInsight today!",
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
