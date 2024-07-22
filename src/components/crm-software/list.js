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
      name: "Zoho CRM",
      description: "Zoho CRM System for Small Business",
      image: "/images/zohocrm.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "zohocrm",
      url: "/zoho-crm",
      rating: 0.0,
      reviews: 0,
      details:
        "Zoho CRM, hailed as the world's favorite CRM and proudly made in India, has once again been recognized as a Visionary in the 2023 Gartner Magic Quadrant for Sales Force Automation Platforms. Trusted by over 250,000 businesses globally, Zoho CRM stands out for its sensational yet affordable software, offering features like omnichannel presence, workflow automation, deep analytics, and extensive customization. With accolades such as winning the highest score in CRM Watchlist 2022, Zoho CRM is not just a CRM; it's a comprehensive solution for building lasting customer relationships, ensuring maximum productivity, and achieving business success.",
    },
    {
      name: "NetHunt CRM",
      description: "Gmail CRM for sales teams and small businesses",
      image: "/images/nethunt.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "nethunt",
      url: "/nethunt",
      rating: 0.0,
      reviews: 0,
      details:
        "NetHunt CRM is a powerful sales automation tool designed for sales and marketing teams. Integrated seamlessly with Gmail and LinkedIn, it streamlines lead management, nurtures customer relationships, and enhances sales efficiency. With features like automated lead generation, centralized communication channels, and real-time reports, NetHunt ensures that no lead falls through the cracks. Trusted by businesses like Ethika, MSE, and Neural Guard, it offers a user-friendly interface to organize customer data, manage pipelines, and track sales activities. Experience the benefits of NetHunt CRM, a Google Cloud Partner, and elevate your sales process.",
    },
    {
      name: "Freshsales",
      description:
        "Popular CRM Software to streamline sales, support, & marketing",
      image: "/images/freshsales.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "freshsales",
      url: "/freshsales",
      rating: 0.0,
      reviews: 0,
      details:
        "Freshsales is a robust Sales CRM designed to empower your team, helping you sell smarter and close deals faster. Trusted by over 60,000 businesses, it offers an AI-powered contact scoring feature through Freddy AI, allowing you to swiftly identify high-intent leads for personalized engagement. With predictive deal insights, the platform harnesses intelligent sales data to maximize efficiency and optimize your sales strategy. The intelligent workflow automation enables seamless task management, email communication, and lead assignments, ensuring productivity. Moreover, Freshsales Suite provides a unified CRM for sales, marketing, and support teams, breaking down silos and offering a single source of truth across the customer journey.",
    },
    {
      name: "Salesforce",
      description: "CRM Solution for Fast Growing Businesses",
      image: "/images/salesforce.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "salesforce",
      url: "/salesforce",
      rating: 0.0,
      reviews: 0,
      details:
        "Salesforce, the world's leading customer relationship management (CRM) platform, seamlessly integrates data, artificial intelligence, and trusted CRM functionalities to elevate your business to new heights. With Sales Cloud, Service Cloud, and Marketing Cloud, Salesforce empowers your teams to work collaboratively from anywhere, ensuring customer satisfaction at every touchpoint. Whether you're a small business seeking unified sales and service solutions or a Fortune 100 company aiming to enhance workplace experiences, Salesforce offers a comprehensive suite of tools. Join over 150,000 companies worldwide, including esteemed names like Balaji, Genpact, and Mahindra, in growing your business through Salesforce's innovative technology. Explore free learning resources on Trailhead and discover how Salesforce values contribute to building stronger customer relationships.",
    },
    {
      name: "NetSuite CRM",
      description: "Oracle NetSuite for 360-Degree Detailed CRM",
      image: "/images/oraclenet.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "oraclenet",
      url: "/netsuite-crm",
      rating: 0.0,
      reviews: 0,
      details:
        "NetSuite CRM is a Customer Relationship Management (CRM) solution by Oracle that consolidates interactions with customers, partners, and suppliers in one unified platform. Offering traditional CRM features such as sales force automation, marketing automation, and customer service management, NetSuite CRM goes beyond by seamlessly managing quotes, commissions, sales forecasts, and partner relationships. With a 360-degree customer view, it enables sales, marketing, and support teams to deliver consistent and relevant experiences. The platform's benefits include a single data source, improved sales performance, effective campaign management, and increased customer satisfaction. NetSuite CRM addresses challenges like multiple data sources and poor visibility into lead and sales activity, providing a streamlined and efficient solution for businesses of all sizes.",
    },
    {
      name: "Salesflare",
      description: "Intelligent CRM for sales teams",
      image: "/images/salesflare.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "salesflare",
      url: "/salesflare",
      rating: 0.0,
      reviews: 0,
      details:
        "Salesflare is a user-friendly CRM designed for small and medium-sized B2B businesses. Streamlining the sales process, it automates tasks like updating contact information, enriching data from public sources, and syncing emails, meetings, and calls. With features such as automated reminders, visual sales pipelines, and shared communications, Salesflare ensures efficient follow-ups and collaborative customer management. It integrates seamlessly with popular platforms like Gmail, Microsoft 365, LinkedIn, and Zapier, providing a comprehensive solution to boost sales productivity. Award-winning and highly praised for its intuitive and time-saving capabilities, Salesflare is a go-to CRM for teams looking to enhance their sales strategies effortlessly.",
    },
    {
      name: "Free CRM",
      description: "100% Free CRM Software for Your Business",
      image: "/images/freecrm.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "freecrm",
      url: "/free-crm",
      rating: 0.0,
      reviews: 0,
      details:
        "Free CRM Software designed to streamline your business operations. With cloud-based accessibility, manage every aspect of your business seamlessly from any device. The mobile apps for Android and iOS ensure you stay connected on the go, while integrations with WhatsApp, Facebook, Twitter, Google, and more enhance communication. From comprehensive contact management to robust sales pipeline tracking and marketing campaigns, Cogmento's Free CRM empowers businesses to increase sales by 30%. Experience enterprise-level security, real-time analytics, and verifiable credentials management to take your business to the next level.",
    },
    {
      name: "AutomateCRM",
      description: "Software by Automate SMB",
      image: "/images/automate.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "automate",
      url: "/automatecrm",
      rating: 0.0,
      reviews: 0,
      details:
        "automateCRM is a versatile and customizable CRM and automation platform designed to streamline, automate, and monitor various business processes. Celebrating its 10th anniversary, the platform offers a limited-time offer with unlimited users, free training, and implementation support. With a focus on sales, marketing, support, projects, orders, payments, services, and affiliates, automateCRM provides a unified solution to enhance operational efficiency. The software boasts an array of features, including data access control, lead capture from diverse sources, omnichannel communication, SLA management, rewards programs, personalized customer journeys, social media engagement, subscription and billing management, AI capabilities, custom modules, and robust reporting and dashboard functionalities.",
    },
    {
      name: "iCRM",
      description: "iCRM - Customer Relationship Management Software",
      image: "/images/icrm.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "icrm",
      url: "/icrm",
      rating: 0.0,
      reviews: 0,
      details:
        "iCRM by iEnterprises is a powerful and user-friendly Customer Relationship Management (CRM) solution designed to seamlessly integrate with Gmail and Outlook. This robust software empowers users to efficiently manage leads and enhance sales growth by providing a flexible platform for building and maintaining critical customer information. With a focus on simplicity and affordability, iCRM facilitates the closure of more deals and the establishment of enduring customer relationships. Start your free trial today and experience the convenience of a CRM solution that works directly within your familiar email environment.",
    },
    {
      name: "TigerLRM",
      description: "Next-Generation CRM and Sales Enablement Solution",
      image: "/images/tigerlrm.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "tigerlrm",
      url: "/tigerlrm",
      rating: 0.0,
      reviews: 0,
      details:
        "TigerLRM, the ultimate CRM with Sales Enablement designed to transform your sales teams into powerhouses of efficiency and success. Fueled by AI and ChatGPT, TigerLRM goes beyond traditional CRMs, offering an all-in-one solution that combines intuitive CRM tools with cutting-edge Sales Enablement features. Experience a 300% boost in conversion rates as TigerLRM automates tasks, simplifies workflows, and maximizes your team's output. From AI-powered lead scoring to comprehensive sales reports, TigerLRM provides a seamless and effective approach to managing leads, closing deals, and delivering superior customer service. Ready to revolutionize your sales process? Sign up for TigerLRM today – where innovation meets results.",
    },
    {
      name: "Kapture CRM",
      description: "Mobile First Platform for Sales and CRM",
      image: "/images/kapture.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "kapture",
      url: "/kapture",
      rating: 0.0,
      reviews: 0,
      details:
        "Elevate your customer experience to new heights with Kapture CRM - the forefront AI-driven platform tailored for enterprises across diverse industries like Retail, BFSI, Consumer Durables, and Travel. Boasting built-in customizations and unmatched flexibility, Kapture stands as the go-to CX partner for major businesses. Praised by over 1000 enterprises, it optimizes contact center efficiency and cost-effectiveness. Empowering both support teams and customers, Kapture features an intelligent Agent Assistant Bot, a comprehensive Customer 360 View, and robust Knowledge Management. Utilizing generative AI, it ensures hyper-personalized support, delivering unique resolutions based on individual customer profiles. With seamless automation, hassle-free migration, and top-tier security measures, Kapture CRM is the ultimate choice for businesses aiming to revolutionize their customer interactions.",
    },
    {
      name: "Salesmate",
      description: "Enhance Sales management in 2024 with Salesmate CRM",
      image: "/images/salesmate.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "salesmate",
      url: "/salesmate",
      rating: 0.0,
      reviews: 0,
      details:
        "Salesmate redefines the CRM experience, putting control back in the hands of users. This AI-powered platform is not just a tool but a solution crafted for human efficiency. Trusted by over 6500 companies, Salesmate offers a 15-day free trial without the need for a credit card. Its modern CRM is infinitely flexible, customizable to your unique business needs. With features like automation suites, productivity tools, and analytics, Salesmate is designed to work for you, making it a refreshing departure from traditional CRM frustrations. Take charge of your CRM experience with Salesmate and discover a new level of adaptability and ease.",
    },
    {
      name: "EngageBay",
      description: "CRM Software for Small Business",
      image: "/images/engagebay.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "engagebay",
      url: "/engagebay",
      rating: 0.0,
      reviews: 0,
      details:
        "EngageBay, your all-in-one solution for Marketing, Sales, and Support. With a limited-time offer of a lifetime 40% discount, this comprehensive CRM software enables you to store unlimited contacts, automate marketing processes, and deliver exceptional customer support. Trusted by industry leaders like Neil Patel, Forbes, and Inc., EngageBay simplifies your business activities with features such as contact and deal management, sales automation, marketing tools, helpdesk support, and more. Don't miss out on this opportunity to streamline your operations and elevate your business success with EngageBay's affordable and unified software solution.",
    },
    {
      name: "Tranquil CRM",
      description: "Best Customer Relationship Management Software",
      image: "/images/tranquil.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "tranquil",
      url: "/tranquil",
      rating: 0.0,
      reviews: 0,
      details:
        "Transform your sales approach with Tranquil CRM, a specialized ERP-based solution designed exclusively for the dynamics of the Indian sales landscape. This powerful tool integrates seamlessly with lead management, offering a pathway to automate sales processes and elevate overall organizational efficiency. With a focus on centralizing information, Tranquil CRM becomes the nerve center for project details, marketing collateral, and customer interactions, accessible through both desktop and mobile applications. Realize the potential of real-time tracking, communication tools, and automated workflows, ensuring your team excels in timely follow-ups and personalized engagements. Embrace Tranquil CRM for its cloud-based functionality, advanced analytics, marketing automation, and strategic drip campaigns, revolutionizing your sales strategy.",
    },
    {
      name: "Vtiger CRM",
      description: "Best Online CRM System for Small Business",
      image: "/images/vtiger.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "vtiger",
      url: "/vtiger",
      rating: 0.0,
      reviews: 0,
      details:
        "Vtiger CRM, a leading AI-powered solution, seamlessly integrates marketing, sales, and support teams through its unified platform, fostering collaboration and maximizing customer engagement. With its user-friendly interface and easy customization, Vtiger offers a 360-degree view of customer data, empowering businesses of all sizes. The affordable and adaptable CRM solution includes advanced features such as lead generation optimization, intelligent sales automation, and comprehensive customer support. Trusted by over 300,000 companies globally, Vtiger is recognized as a proven leader in the industry, with accolades from Gartner and other review sites, ensuring data security compliance and a seamless customer journey.",
    },
    {
      name: "LeadForce",
      description: "Smart CRM Tool for 2024",
      image: "/images/leadforce.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "leadforce",
      url: "/leadforce",
      rating: 0.0,
      reviews: 0,
      details:
        "Discover the future of CRM with LeadForce, a dynamic software solution at the forefront of lead performance optimization. With an inception rooted in innovative thinking and perfectionism, LeadForce seamlessly integrates with cloud PBX systems to reclaim 25% of lost inbound call traffic. Transforming communication opportunities into instant task tracking, our platform enables companies to evaluate and seize every prospect efficiently. Since our establishment in June 2021, LeadForce has been on a mission to redefine success, offering flexible solutions and a location-independent approach. Join us in shaping the next era of effective and sustainable CRM performance.",
    },
    {
      name: "Stingo",
      description: "Full CRM with In-built Cloud Telephony Solutions",
      image: "/images/stingo.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "stingo",
      url: "/stingo",
      rating: 0.0,
      reviews: 0,
      details:
        "Stingo, your ultimate solution for supercharging sales and optimizing customer interactions. This innovative software offers a suite of tools, including auto-lead capture, WhatsApp chatbot integration, and real-time team collaboration, making it a game-changer in the realm of sales acceleration. Stingo's unique features, such as IVR Cloud Telephony, complaint desk automation, and toll-free options, provide a holistic approach to customer relationship management. With a user-friendly interface and flexibility for customization, Stingo stands out as the go-to platform for businesses aiming to enhance productivity, automate tasks, and witness significant sales growth.",
    },
    {
      name: "Solid Performers CRM",
      description: "Robust CRM Software for Sales and Closure Management",
      image: "/images/solid.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "solid",
      url: "/solid-performers",
      rating: 0.0,
      reviews: 0,
      details:
        "Solid Performers CRM is your ultimate solution to stop losing lead conversions. With the ongoing Black Friday & Cyber Monday Sale, seize the opportunity to pay for a 1-year subscription and enjoy a 2-year validity or opt for a 2-year subscription with an extended 5-year validity. Experience zero setup, training, and AMC costs. Achieve a 4.9/5-star rating with industry leaders, automating your sales process seamlessly, from lead collection and allocation to automated follow-ups, ensuring zero missed opportunities. Choose Solid Performers CRM for highly affordable sales automation, efficient team management, and an all-in-one platform to boost your sales productivity.",
    },
    {
      name: "HubSpot CRM",
      description: "HubSpot CRM Software - Track Lead Status",
      image: "/images/hubspot.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "hubspot",
      url: "/hubspot",
      rating: 0.0,
      reviews: 0,
      details:
        "HubSpot CRM offers a free solution for teams, providing essential tools for Sales Leaders, Salespeople, Marketers, Customer Service Teams, Operations Managers, and Business Owners. With a user-friendly interface, it enables real-time tracking and analysis of sales activities, offering insights into productivity and individual performance. The platform supports unlimited data and up to 1,000,000 contacts, ensuring scalability for teams of any size. From an award-winning meeting scheduler to an AI-driven email writer, HubSpot CRM streamlines processes, enhances collaboration, and facilitates seamless communication, making it an indispensable asset for businesses seeking an efficient CRM solution.",
    },
    {
      name: "SoulCRM",
      description: "Simple and Efficient CRM System",
      image: "/images/soulcrm.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "soulcrm",
      url: "/soulcrm",
      rating: 0.0,
      reviews: 0,
      details:
        "SoulCRM is an all-in-one CRM solution tailored for Indian businesses, offering seamless organization, sales growth, and exceptional support. With features spanning marketing, sales, support, inventory, purchase, accounting, and reporting, SoulCRM stands out as a cloud-based application that streamlines processes and boosts efficiency. Trusted by over 1,000 businesses, it facilitates lead management, customizable email campaigns, and insightful reporting, ensuring a comprehensive approach to customer relationship management. Accessible from anywhere, SoulCRM simplifies data management, saving time and enhancing decision-making for businesses of all sizes. Request a free trial today and experience the SoulCRM way of accelerating your business success.",
    },
    {
      name: "GOT CRM",
      description: "Reach your sales target with Got CRM",
      image: "/images/got.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "got",
      url: "/gotcrm",
      rating: 0.0,
      reviews: 0,
      details:
        "Revolutionize your sales strategy with GOT CRM, the 2020 game-changer in customer relationship management. Tailored for businesses of all sizes, our CRM boasts comprehensive features, including streamlined contact and lead management, efficient sales follow-ups, and seamless product and quote customization. Trusted by 2000 customers worldwide, we offer a secure and user-friendly platform to keep you on top of your business. Explore the synergy of integrating 60+ social apps, and discover why businesses choose GOT CRM for its unparalleled performance. Start your 15-day free trial today – no credit card required – and witness the future of CRM.",
    },
    {
      name: "Insightly",
      description: "CRM Software Solution for All Types of Business",
      image: "/images/insightly.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "insightly",
      url: "/insightly",
      rating: 0.0,
      reviews: 0,
      details:
        "Welcome to Insightly, your gateway to a transformative CRM experience. Discover the perfect blend of power, flexibility, and affordability as you elevate your business to new heights. Whether streamlining sales processes, orchestrating personalized marketing campaigns, or exceeding customer service expectations, Insightly is your trusted partner. With seamless integration through AppConnect, we ensure your connection to the tools you already love. Join a community of satisfied users who consistently rate Insightly as a leader in the CRM landscape. Experience innovation, efficiency, and growth – welcome to the future of CRM.",
    },
    {
      name: "LeadSquared",
      description: "Land More Leads, Close More Deals",
      image: "/images/leadsquare.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "leadsquare",
      url: "/leadsquared",
      rating: 0.0,
      reviews: 0,
      details:
        "LeadSquared revolutionizes the landscape of sales and CRM with its dynamic platform, providing a game-changing approach to high-velocity sales operations. With a focus on eliminating lead leakage, manual work, and accelerating speed-to-lead, LeadSquared has become the driving force behind the success stories of 2000+ companies worldwide. From empowering higher education institutions with a one-stop admission management solution to enabling tech-first learning businesses with EdTech CRM, LeadSquared's industry-specific solutions cater to diverse needs. This platform's proven track record, coupled with endorsements from industry leaders like Byju's and Amazon Pay, underscores its commitment to ushering in a new era of sales efficiency and productivity.",
    },
    {
      name: "Cratio CRM",
      description: "Cloud and Mobile Sales CRM Software",
      image: "/images/cratio.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "cratio",
      url: "/cratio",
      rating: 0.0,
      reviews: 0,
      details:
        "Cratio CRM, a result-driven sales management solution with over 15 years of expertise, has earned the trust of 100,000+ users and 1,000+ companies in India. Seamlessly integrating lead automation and distribution, this software ensures efficient lead capture, categorization, and routing, maximizing your sales team's responsiveness. With features like an Android GSM SIM-based built-in dialer, real-time call tracking, WhatsApp marketing automation, and robust customization options, Cratio CRM empowers businesses across various industries, providing a tailored approach for B2B companies, real estate, financial services, education, travel, recruitment, professional services, and more. Experience high sales efficiency with Cratio CRM's comprehensive suite of tools tailored to meet your industry-specific needs.",
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
