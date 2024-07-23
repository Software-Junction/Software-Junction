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
      name: "Uniware",
      description: "Multi Vendor Shopping Cart Software",
      image: "/images/uniware.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "uniware",
      url: "/uniware",
      rating: 0.0,
      reviews: 0,
      details:
        "Uniware E-commerce Technology Enablement Platform is a cloud-based solution that streamlines and automates the supply chain for businesses globally. Trusted by over 20,000 businesses, Unicommerce offers a comprehensive suite of solutions, including Warehouse Management, Order Management, Inventory Management, and Omnichannel Retailing. With a focus on D2C brands, the platform provides batch management for efficient fulfillment, seamless B2B and B2C order management, and advanced features like future-ready returns. Boasting 200+ plug-and-play integrations, cutting-edge technologies, and industry recognition, Unicommerce is a leading choice for e-commerce businesses seeking to maximize productivity and profitability.",
    },
    {
      name: "BigCommerce",
      description: "Best eCommerce Platform for Small Business",
      image: "/images/bigcommerce.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "bigcommerce",
      url: "/bigcommerce",
      rating: 0.0,
      reviews: 0,
      details:
        "BigCommerce is a leading enterprise-level ecommerce platform that offers a simplified and flexible solution for businesses. Recognized by industry analysts, including Gartner and Forrester, it combines the strengths of SaaS and API-enabled openness, providing integrations, scalability, and agility. With a comprehensive suite of features, including native B2C and B2B capabilities, multi-storefront support, omnichannel options, and a composable architecture, BigCommerce empowers businesses to customize and grow sales efficiently. Supported by a trusted partner ecosystem and praised for its customer-centric approach, BigCommerce is a preferred choice for achieving ecommerce success with freedom, lower total cost of ownership, and unparalleled support.",
    },
    {
      name: "PrestaShop",
      description: "Ecommerce Store Builder BY PrestaShop",
      image: "/images/prestashop.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "prestashop",
      url: "/prestashop",
      rating: 0.0,
      reviews: 0,
      details:
        "PrestaShop, a leading ecommerce solution, empowers businesses to create fully customizable online stores with features tailored for successful sales. From a rich marketplace offering modules and themes to essential suites for efficient selling, PrestaShop provides a comprehensive ecosystem. With a focus on control, customization, scalability, and dedicated support, it caters to both new entrepreneurs and established leaders. Backed by a robust community, numerous experts, and strategic partnerships, PrestaShop ensures the success of over 300,000 merchants worldwide. Stay updated on ecommerce trends and benefit from valuable resources through their blog, fostering a platform built for commerce and success.",
    },
    {
      name: "StoreHippo",
      description: "Most Advanced Ecommerce Platform",
      image: "/images/storehippo.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "storehippo",
      url: "/storehippo",
      rating: 0.0,
      reviews: 0,
      details:
        "StoreHippo is a leading enterprise ecommerce platform that empowers brands globally, catering to diverse B2B and B2C business models across 40+ industries. With a robust set of features, it enables businesses to create tailored solutions for their unique needs, supporting both local and international markets. The platform's mobile-first architecture ensures a seamless buying experience on Android and iOS apps, with zero additional costs. Boasting rapid performance, MACH architecture for scalability, and top-notch security, StoreHippo is the go-to solution for businesses looking to thrive in the competitive ecommerce landscape.",
    },
    {
      name: "Shopnix",
      description:
        "eCommerce Website Solutions BY Cloudnix Software Labs Pvt. Ltd.",
      image: "/images/shopnix.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "shopnix",
      url: "/shopnix",
      rating: 0.0,
      reviews: 0,
      details:
        "Shopnix is a cutting-edge SaaS platform designed to empower merchants in India to effortlessly establish and manage their own eCommerce stores. With a range of sales channels, including a website, web store, Facebook store, Android Store App, and iOS Store App, Shopnix offers a comprehensive solution to boost revenue by up to 30%. This platform provides essential features such as domain and email IDs, responsive web, and mobile stores, Android and iPhone apps, built-in SEO, marketing tools, various payment gateways, beautiful store designs, and efficient email and SMS notifications. Shopnix caters to businesses of all sizes with its flexible and affordable pricing plans.",
    },
    {
      name: "Primaseller",
      description: "eCommerce software For Your Business",
      image: "/images/primaseller.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "primaseller",
      url: "/primaseller",
      rating: 0.0,
      reviews: 0,
      details:
        "Primaseller is a multichannel retail solution that seamlessly integrates inventory and sales management across various online and physical sales channels. Tailored for Retail 3.0, it empowers businesses to adapt to changing retail landscapes by offering a robust feature set. From synchronized stock and automated replenishment to warehouse management and omnichannel integration, Primaseller streamlines operations for growth. Its user-friendly interface ensures easy setup within minutes, allowing users to manage inventory, process orders, and synchronize sales effortlessly across platforms. Trusted by businesses globally, Primaseller provides a unified solution for efficient retail management in the modern era.",
    },
    {
      name: "OroCommerce",
      description: "Award-winning open source B2B eCommerce software",
      image: "/images/orocommerce.png",
      imageWidth: 180,
      imageHeight: 10,
      altText: "orocommerce",
      url: "/orocommerce",
      rating: 0.0,
      reviews: 0,
      details:
        "Oro Inc. presents a versatile suite of B2B solutions with OroCommerce CRM, a best-in-class open-source CRM, and OroCommerce, the #1 digital commerce platform tailored for manufacturers, distributors, and wholesalers. Boasting robust out-of-the-box features, Oro's products facilitate seamless digital transformations, offering flexible tools for creating customer-centric experiences, connecting with existing business systems, and managing scalable marketplaces. With a global presence and recognition from industry experts, Oro serves over 40,000 companies worldwide, providing a comprehensive solution for B2B businesses to grow, connect, and thrive in the digital landscape.",
    },
    {
      name: "3dcart",
      description: "Ecommerce Online Shopping Software BY 3dCart",
      image: "/images/3dcart.png",
      imageWidth: 110,
      imageHeight: 10,
      altText: "3dcart",
      url: "/3dcart",
      rating: 0.0,
      reviews: 0,
      details:
        "3dcart stands out as a robust and versatile eCommerce software, celebrating a remarkable 20 years of business experience. As the 2018 Best Shopping Cart, it offers a comprehensive suite of features, customizable themes, and seamless integration with various platforms, ensuring a hassle-free online store setup. With PCI Certified hosting, SSL technology, and anti-fraud measures, 3dcart prioritizes security. Boasting a responsive design and 99.99% uptime, it caters to businesses of all sizes, from startups to enterprises. The platform's success stories, such as eLeMeNO-Pee and Florida Tobacco Shop, highlight its proven track record in facilitating online business growth.",
    },
    {
      name: "Shopify",
      description: "eCommerce Software by Shopify Inc.",
      image: "/images/shopify.png",
      imageWidth: 110,
      imageHeight: 10,
      altText: "shopify",
      url: "/shopify",
      rating: 0.0,
      reviews: 0,
      details:
        "Shopify is a e-commerce platform that empowers entrepreneurs and established brands alike to create and manage online stores effortlessly. With a global presence spanning 170+ countries, it facilitates seamless online selling, in-person transactions, and international commerce. Shopify offers a comprehensive suite of tools, including a drag-and-drop store creator, customizable templates, and a robust app store for enhanced functionality. From built-in marketing tools and flexible point-of-sale systems to centralized business operations management, Shopify provides an end-to-end solution for businesses of all sizes, enabling them to thrive in the dynamic world of e-commerce.",
    },
    {
      name: "CommerceUp",
      description: "Platform that empowers you to run your ecommerce business",
      image: "/images/commerceUp.png",
      imageWidth: 110,
      imageHeight: 10,
      altText: "commerceUp",
      url: "/commerceUp",
      rating: 0.0,
      reviews: 0,
      details:
        "CommerceUp is an advanced SaaS e-commerce platform designed to effortlessly create dynamic, responsive websites and mobile applications. Tailored for diverse business needs, it offers customizable, reliable, and scalable solutions with a focus on boosting productivity. Trusted by industry leaders like Vperfumes and Elmart, CommerceUp stands out with features such as multi-language support, advanced SEO, and seamless integration with various platforms. With 24x7 support, easy migration, and a range of hosting solutions, CommerceUp empowers businesses to establish a global online presence, offering a comprehensive solution for end-to-end e-commerce success.",
    },
    {
      name: "Browntape",
      description: "Sell Everywhere",
      image: "/images/browntape.png",
      imageWidth: 180,
      imageHeight: 10,
      altText: "browntape",
      url: "/browntape",
      rating: 0.0,
      reviews: 0,
      details:
        "Browntape a eCommerce management software designed to meet the intricate demands of modern retail businesses. With 2028-bit encrypted security, it offers features such as inventory and order management, courier and warehouse management, and seamless integration with leading ERP systems like SAP, Microsoft Dynamics, Oracle, IBM, Ginesys, and Salesforce. The software ensures efficient online sales with automatic order processing, location-wise user access, and a powerful API for extendability. Boasting a remarkable support system, Browntape aims to help businesses achieve higher seller ratings, reduce return rates, and streamline operations for effortless growth in the competitive eCommerce landscape.",
    },
    {
      name: "AnywhereCommerce",
      description: "Build Fast and Delightful Omnichannel Experiences",
      image: "/images/anywhere-software.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "anywhere-commerce",
      url: "/anywhere-commerce",
      rating: 0.0,
      reviews: 0,
      details:
        "AnywhereCommerce offers a suite of solutions for seamless mobile payment transactions at the point of service. As pioneers in mobile payments, their expertise spans over 20 million card readers sold globally since 2006. The AnyPay™ developer tool empowers businesses to payment-enable any application across platforms and languages, providing faster EMV setup with industry-leading mPOS technology. With connectivity for any device, transaction, and destination, AnywhereCommerce ensures a versatile and credible mobile payment experience, catering to enterprises, MSPs/Acquirers, and developers worldwide.",
    },
    {
      name: "Zencommerce",
      description: "Software by Zencommerce",
      image: "/images/zen-commerce.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "zencommerce",
      url: "/zencommerce",
      rating: 0.0,
      reviews: 0,
      details:
        "Zencommerce – the perfect platform for visionary entrepreneurs seeking a modern and flexible solution to establish and manage their online stores. Designed for ease and innovation, Zencommerce offers a 14-day free trial without the need for a credit card. With a wealth of features, including 0% commission on sales, integrated graphic and payment systems, and free technical support, it empowers creators to bring their online business dreams to life. Whether you're starting from scratch or adapting ready-made solutions, Zencommerce provides the tools to craft a unique and successful online presence.",
    },
    {
      name: "Sendcloud",
      description: "Software by Sendcloud",
      image: "/images/sendcloud.png",
      imageWidth: 130,
      imageHeight: 30,
      altText: "sendcloud",
      url: "/sendcloud",
      rating: 0.0,
      reviews: 0,
      details:
        "Sendcloud is Europe's leading shipping software designed to streamline and enhance the e-commerce shipping experience. Trusted by over 23,000 businesses, it offers a comprehensive suite of tools, including shipping automation, customizable returns portals, and a seamless checkout process. With access to 100+ carriers and 50+ integrations, Sendcloud simplifies order processing, label printing, and tracking, ultimately enabling businesses to ship smarter, reduce errors, and provide a delightful customer journey. Its powerful APIs seamlessly integrate into various systems, offering core shipping functionalities with minimal engineering effort. From automating tasks to expanding global reach, Sendcloud empowers businesses to grow efficiently and elevate their shipping strategies.",
    },
    {
      name: "Adobe Commerce",
      description: "Software by Adobe",
      image: "/images/adobe-commerce.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "adobe-commerce",
      url: "/adobe-commerce",
      rating: 0.0,
      reviews: 0,
      details:
        "Adobe Commerce, formerly known as Magento, is a scalable commerce platform designed to empower businesses in creating personalized B2B and B2C experiences across multiple brands. With native AI capabilities, it facilitates the delivery of real-time, AI-driven personalized content, promotions, and recommendations, enhancing customer engagement. Adobe Commerce offers a composable commerce solution for IT teams, enabling them to launch secure and high-performance commerce experiences efficiently. The platform also empowers commerce teams with omnichannel personalization, AI-driven tools for marketing and merchandising, and scalable operations to adapt to evolving customer needs. Recognized as a leader in the 2023 Gartner Magic Quadrant for Digital Commerce, Adobe Commerce stands out for its innovation and impact on global brands.",
    },
    {
      name: "OhoShop",
      description: "Mobilizing Retail Stores",
      image: "/images/oho-shop.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "oho-shop",
      url: "/oho-shop",
      rating: 0.0,
      reviews: 0,
      details:
        "OhoShop is a solution that empowers businesses to effortlessly launch personalized iOS and Android mobile apps, responsive websites, and progressive web apps (PWAs). With features like catalog management, order and payment processing, and delivery management, OhoShop offers a seamless buying experience. Utilizing a Pay As You Go (SaaS) model, it ensures no big investment, requires no IT maintenance, and comes with free upgrades. The platform's sale booster features, including social media sharing, push notifications, and SEO-friendly websites, cater to diverse industries, making it an ideal choice for businesses seeking a mobile retail presence with minimal hassle.",
    },
    {
      name: "Sellfy",
      description: "Software by Sellfy",
      image: "/images/sellfy.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "real-builder",
      url: "/sellfy",
      rating: 0.0,
      reviews: 0,
      details:
        "Sellfy is an intuitive and hassle-free eCommerce platform tailored for creators, offering an all-in-one solution to sell merchandise or digital products. With a 14-day free trial and no credit card required, it provides a quick and easy setup process, allowing users to have their stores up and running in just five minutes. Ideal for those who value simplicity without compromising results, the platform includes built-in marketing features, supports print-on-demand merch, facilitates digital product sales, and offers seamless integration for selling across various channels, including social media and personal websites. Backed by a 24/7 support team, it empowers a community of over 32,000 creators to turn their passion into income.",
    },
    {
      name: "CCAvenue",
      description: "Software by Avenues India Pvt. Ltd.",
      image: "/images/cc-avenue.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "cc-avenue",
      url: "/cc-avenue",
      rating: 0.0,
      reviews: 0,
      details:
        "CCAvenue is an all-encompassing e-commerce solution that empowers businesses to effortlessly create and manage online stores. Seamlessly integrated with India's premier payment gateway, it enables global transactions in 27 currencies, offering a frictionless checkout experience. With cutting-edge marketing and analytical tools, users can elevate sales efforts, gain insights into performance, and maximize business potential. The software facilitates social network selling, invoice payments via email/SMS, and secure phone transactions. CCAvenue's mobile app ensures real-time business management, supported by a dedicated team available 24/7 for comprehensive assistance, making it a go-to choice for successful online ventures.",
    },
    {
      name: "OpenCart",
      description: "Software by OpenCart",
      image: "/images/open-cart.jpg",
      imageWidth: 200,
      imageHeight: 30,
      altText: "open-cart",
      url: "/open-cart",
      rating: 0.0,
      reviews: 0,
      details:
        "OpenCart is a leading open-source eCommerce platform designed for businesses of all sizes. With a user-friendly interface and powerful store management features, it enables seamless control over products, customers, orders, and more. The platform's marketplace offers a diverse selection of 13,000+ modules and themes, allowing for easy customization and expansion. Users can enjoy reliable support through a vibrant community forum with over 110,000 members or opt for dedicated technical assistance. OpenCart Cloud provides a hassle-free experience, allowing users to launch their store on Amazon-hosted solutions with a complimentary 7-day trial.",
    },
    {
      name: "Ecwid",
      description: "Software by Ecwid",
      image: "/images/ecwid.png",
      imageWidth: 150,
      imageHeight: 30,
      altText: "ecwid",
      url: "/ecwid",
      rating: 0.0,
      reviews: 0,
      details:
        "Ecwid is a powerful E-commerce platform that enables individuals and small businesses to effortlessly sell their products online. With a free forever plan, users can establish their online store with just a few clicks, reaching a vast audience on various platforms such as websites, social media, and marketplaces like Amazon. Boasting the title of the №1 fastest implementation e-commerce platform in 2023, Ecwid simplifies management through a centralized dashboard for inventory, order tracking, pricing, and more. Additionally, it offers robust marketing tools, including Google and Facebook advertising, to accelerate business growth. Expert support, a mobile app for on-the-go management, and an extensive app store further enhance the Ecwid experience.",
    },
    {
      name: "Sellacious",
      description: "NextGen Software to create eCommerce & Marketplace",
      image: "/images/sellacious.png",
      imageWidth: 150,
      imageHeight: 30,
      altText: "sellacious",
      url: "/sellacious",
      rating: 0.0,
      reviews: 0,
      details:
        "Sellacious is a versatile eCommerce and marketplace software with a global footprint, boasting 204,593+ downloads and trusted by 8,500+ businesses across 85+ countries. This professional platform supports multi-currency transactions and offers a diverse range of payment options. With features such as a user-friendly administrator panel and optimized store fronts, Sellacious enables users to effortlessly launch online stores or Joomla Marketplaces within minutes. Its rich functionalities, including detailed rule filters, product comparisons, multiple variants, and a native multivendor architecture, make it the go-to solution for creating efficient and customizable online selling experiences.",
    },
    {
      name: "Shopaccino",
      description: "a smarter way to create your online store",
      image: "/images/shopaccino.jpg",
      imageWidth: 140,
      imageHeight: 30,
      altText: "shopaccino",
      url: "/shopaccino",
      rating: 0.0,
      reviews: 0,
      details:
        "Shopaccino is an all-in-one ecommerce platform designed for small and medium-sized businesses, offering a smarter way to effortlessly create, manage, and grow online stores. With a user-friendly interface, it allows users to seamlessly execute marketing strategies, receive orders, accept payments, generate invoices, process shipping, and manage inventory, all within a single software. The platform provides a comprehensive set of tools for product cataloging, SEO-friendly website creation, customer engagement through discounts and rewards, and integration with major payment gateways and shipping agencies. Trusted by popular brands, Shopaccino is recognized for its ease of use and has been featured in various industry accolades.",
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
