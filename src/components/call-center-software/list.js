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
      name: "Enthu",
      description: "Software by Enthu",
      image: "/images/enthu.png",
      imageWidth: 135,
      imageHeight: 10,
      altText: "enthu",
      url: "/enthu",
      rating: 0.0,
      reviews: 0,
      details:
        "Enthu.AI is an advanced agent coaching software designed to enhance sales team performance by automating sales monitoring, improving customer experience, and increasing revenue. It captures customer interactions across various channels and provides insights for multiple teams to optimize operations, sales, support, and marketing efforts. With Enthu.AI, you can evaluate agent performance, provide timely coaching interventions, and transform mediocre agents into sales rockstars. Trusted by over 100 brands, it offers trackable parameters, predictive call quality, and seamless speech-to-text accuracy, making it the go-to solution for driving consistency in revenue and predictability in outcomes.",
    },
    {
      name: "CloudTalk",
      description: "Call center software for sales and support teams",
      image: "/images/cloudtalk.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "cloudtalk",
      url: "/cloudtalk",
      rating: 0.0,
      reviews: 0,
      details:
        "CloudTalk is a VoIP business calling solution designed for customer service and sales teams. With over 70 features and seamless integration with CRMs and helpdesk tools, it offers automation, analytics, and scalability to optimize performance and enhance customer experience. Its AI-powered features include automatic call transcriptions and sentiment analytics, ensuring future-proofing for businesses. CloudTalk provides unparalleled control over the customer journey, facilitating faster, easier, and more efficient connections with customers globally.",
    },
    {
      name: "Servetel",
      description: "Software by Servetel Communications",
      image: "/images/servetel.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "servetel",
      url: "/servetel",
      rating: 0.0,
      reviews: 0,
      details:
        "Servetel's cloud telephony solution is a contact center platform designed to seamlessly connect businesses with their customers. With 65+ features including toll-free numbers, IVR, voice broadcasting, and real-time analytics, it offers efficient communication management. Servetel ensures optimal caller experiences through agent scheduling, call recording, and live call monitoring. Backed by a 99.99% uptime guarantee and end-to-end customer service, it provides hassle-free implementation and support. Integrated with API for CRM and third-party applications, Servetel empowers businesses to convert leads into customers effortlessly.",
    },
    {
      name: "Aavaz",
      description: "An Inbound, Outbound & Blended Call Center Platform",
      image: "/images/aavaz.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "aavaz",
      url: "/aavaz",
      rating: 0.0,
      reviews: 0,
      details:
        "Aavaz 360 is a customer communication platform that seamlessly integrates marketing, sales, and support functions. It enables businesses to engage with customers across multiple channels, creating fluid conversations and enhancing customer success. By breaking down barriers to communication, Aavaz ensures that businesses can easily and effectively interact with their customers, fostering brand engagement and loyalty. With features such as unified workflows and real-time insights, Aavaz empowers businesses to deliver customer-centric experiences and drive growth.",
    },
    {
      name: "Freshcaller",
      description: "Call center software for startups and small teams",
      image: "/images/freshcaller.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "freshcaller",
      url: "/freshcaller",
      rating: 0.0,
      reviews: 0,
      details:
        "Freshcaller is a cloud-based contact center solution designed to streamline customer interactions through intuitive voice AI capabilities. With features like advanced inbound routing, AI-powered voice bots, and seamless integration with Freshdesk, it enables businesses to provide exceptional customer service effortlessly. Its scalable and remote-ready platform empowers teams to collaborate effectively, monitor performance in real-time, and optimize operations for maximum efficiency. By offering personalized voice interactions, call recordings, and omnichannel service options, Freshcaller helps businesses enhance customer satisfaction and drive growth.",
    },
    {
      name: "Ameyo",
      description: "Call Center software",
      image: "/images/ameyo.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "ameyo",
      url: "/ameyo",
      rating: 0.0,
      reviews: 0,
      details:
        "Ameyo is an AI-powered Cloud Customer Engagement Platform that offers a suite of solutions for sales, service, and collections. It includes enterprise contact center solutions, remote call center solutions, omnichannel helpdesk, video contact center, WhatsApp Business API, communication platform integration, and more. Ameyo has been recognized for its leadership in customer experience and contact center solutions, receiving awards such as an honorable mention in the Gartner Magic Quadrant and the Frost & Sullivan Asia Pacific CCI Leadership Award. With features like interactive voice response, CRM integration, auto dialer, and extensive resources like ebooks and case studies, Ameyo empowers businesses to enhance customer experience and streamline operations.",
    },
    {
      name: "Zoho Desk",
      description: "Easy To Use Call Center Software",
      image: "/images/zoho-desk.jpg",
      imageWidth: 140,
      imageHeight: 10,
      altText: "zoho-desk",
      url: "/zoho-desk",
      rating: 0.0,
      reviews: 0,
      details:
        "Zoho Desk is a help desk software designed to streamline customer service operations, boost agent productivity, and foster enduring customer relationships. With its omnichannel support, empowered agents equipped with AI tools, and built-in analytics, Zoho Desk enables businesses of all sizes to deliver exceptional customer experiences. Integrated with over 200 third-party apps and offering fully mobile capabilities, Zoho Desk ensures seamless customer support anytime, anywhere. Trusted by over 100,000 businesses globally, Zoho Desk stands out for its fast implementation, customizable workspace, and transparent pricing, making it the preferred choice for efficient and cost-effective customer service solutions.",
    },
    {
      name: "Dialer360",
      description: "Complete Telecom Call Center Solutions",
      image: "/images/dialer360.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "dialer360",
      url: "/dialer360",
      rating: 0.0,
      reviews: 0,
      details:
        "Dialer360 is a call center dialer software designed to enhance agent productivity and streamline customer call handling. With its advanced features like Auto Dialer, Predictive Dialer, and Conversational AI Dialer, it optimizes sales and ensures smarter communication. Offering the fastest dialing solutions, secure data protection, and seamless CRM integrations, Dialer360 guarantees a higher contact rate and unparalleled efficiency. Trusted by over 300 businesses, it revolutionizes customer support with state-of-the-art AI-based technology, making every call a smart call.",
    },
    {
      name: "Knowlarity",
      description: "Stay Connected With Best Call Center Software",
      image: "/images/knowlarity.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "knowlarity",
      url: "/knowlarity",
      rating: 0.0,
      reviews: 0,
      details:
        "Knowlarity is a communication platform offering cloud-based solutions tailored for businesses of all sizes. With a focus on customer engagement, it provides voice, messaging, video, and AI-enabled services. Their highly secure and scalable platform integrates with leading CRMs, enabling businesses to streamline their communication processes. Key features include virtual numbers with advanced call management, partnerships catering to various industries, and solutions addressing specific business needs such as sales, customer service, and remote work. Knowlarity empowers businesses to connect with customers seamlessly, enhancing their overall communication experience.",
    },
    {
      name: "Exotel",
      description: "Remote-Ready Call Center Solutions",
      image: "/images/exotel.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "exotel",
      url: "/exotel",
      rating: 0.0,
      reviews: 0,
      details:
        "Exotel is a leading Connected Customer Conversation Platform, offering streamlined communication solutions for businesses worldwide. With a focus on fostering lasting customer loyalty, Exotel facilitates personalized interactions across various channels, enhancing engagement and driving advocacy. Their cloud-first approach ensures reliability and flexibility, empowering businesses to adapt and thrive in a rapidly evolving environment. Trusted by over 7000 businesses in 60+ countries, Exotel provides innovative tools such as AI-powered chatbots, omnichannel engagement, and secure data management, all geared towards delivering seamless customer experiences.",
    },
    {
      name: "MightyCall",
      description: "Call Center solution",
      image: "/images/mightycall.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "mightycall",
      url: "/mightycall",
      rating: 0.0,
      reviews: 0,
      details:
        "MightyCall is a cloud-based call center solution tailored for small and mid-sized businesses. With built-in AI, it ensures optimal call quality by monitoring and adjusting connections, while maintaining competitive pricing. Offering world-class security and reliability certified by PCI-DSS and AWS, it guarantees data protection and FCC compliance. Integrated with popular apps and CRM systems, MightyCall streamlines business communications efficiently and organically, empowering users to customize their communication workflows with ease.",
    },
    {
      name: "Zendesk",
      description: "Creates customized customer experiences easily",
      image: "/images/zendesk.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "zendesk",
      url: "/zendesk",
      rating: 0.0,
      reviews: 0,
      details:
        "Zendesk Voice is an integrated voice solution that allows businesses to engage with customers through personalized conversations. It offers instant access to customer information, seamless integration with other communication channels, and cloud-based functionality for immediate setup. With features like interactive voice response routing and real-time analytics, Zendesk Voice empowers companies to enhance their phone support operations and deliver exceptional customer service.",
    },
    {
      name: "AVOXI",
      description: "Flexible and Easy-to-Use Call Center Tool",
      image: "/images/avoxi.png",
      imageWidth: 140,
      imageHeight: 10,
      altText: "avoxi",
      url: "/avoxi",
      rating: 0.0,
      reviews: 0,
      details:
        "AVOXI is an international cloud voice solution designed to streamline global communication for businesses. With coverage in over 150 countries, it offers a comprehensive platform that enhances customer conversations and increases uptime. AVOXI's intelligent SaaS platform automates processes, provides analytics for better insights, and enables seamless integration with existing contact center and communication applications. Trusted by over 5,000 global brands, AVOXI delivers premium call quality, expert support, and dedicated customer success to optimize voice communication strategies worldwide.",
    },
    {
      name: "CrazyCall",
      description: "Increasing Sales with Cloud Call Center Software",
      image: "/images/crazycall.jpg",
      imageWidth: 140,
      imageHeight: 10,
      altText: "crazycall",
      url: "/crazycall",
      rating: 0.0,
      reviews: 0,
      details:
        "CrazyCall is a software solution designed to streamline calling efforts for businesses. It simplifies the process by offering features such as Inbound Calls, Click to Call Widget, and Auto Dialer, enabling users to easily connect with customers. With smart call scripts, call recordings, and monitoring capabilities, CrazyCall enhances productivity and customer satisfaction. Its Callback Widget automates lead generation, requiring minimal effort to expand customer base. Trusted by companies like Spazios and Virgin, CrazyCall offers a 14-day free trial without the need for credit card information.",
    },
    {
      name: "Avaya",
      description: "Software by Avaya Inc",
      image: "/images/avaya.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "avaya",
      url: "/avaya",
      rating: 0.0,
      reviews: 0,
      details:
        "Avaya Experience Platform is a software solution designed to revolutionize customer experience (CX) by seamlessly integrating digital channels, AI virtual agents, workflow automation, and actionable insights. Recognized as a leader in intelligent contact centers, Avaya enables businesses to deliver unforgettable experiences that drive ROI, empower teams, and nurture meaningful customer relationships. With Avaya, organizations can unlock new CX capabilities to meet rising customer expectations while keeping current operations intact. Whether it's boosting customer satisfaction like Atento, providing personalized healthcare services like Johns Hopkins Healthcare System, or facilitating digital transformations like DIRECTV in Latin America, Avaya empowers businesses across various industries to innovate, evolve, and thrive in the digital age.",
    },
    {
      name: "HoduCC",
      description: "Redefine Communication with Best Call Center Software",
      image: "/images/hoduCC.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "hoduCC",
      url: "/hoduCC",
      rating: 0.0,
      reviews: 0,
      details:
        "HoduCC is a contact center software designed to enhance customer engagement and streamline business productivity. It offers multichannel support, allowing customers to reach out through various digital touchpoints for quicker problem-solving. With intelligent features and seamless integrations like CRM and SMS, HoduCC empowers agents to efficiently track, prioritize, and resolve customer interactions. Easy to set up, maintain, and use, it's the ultimate solution for businesses seeking to strengthen relationships with customers while reducing costs.",
    },
    {
      name: "Wolken ServiceDesk",
      description: "Curated for customer service excellence",
      image: "/images/wolken.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "wolken",
      url: "/wolken-servicedesk",
      rating: 0.0,
      reviews: 0,
      details:
        "Wolken ServiceDesk is a customer service solution that transitions businesses from a case-centric to a customer-centric approach. It offers personalized, fast, and flexible customer support through omnichannel communication, intelligent ticket routing, and 24/7 backend support. With features like a centralized knowledge base, enterprise integrations, automation, and real-time reporting, Wolken ServiceDesk ensures quick query resolution, smoother operations, self-service capabilities, organized data, and ultimately, enhanced customer satisfaction.",
    },
    {
      name: "SparkTG",
      description: "Telephony Solution for Growing business",
      image: "/images/sparkTG.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "sparkTG",
      url: "/sparkTG",
      rating: 0.0,
      reviews: 0,
      details:
        "SparkTG is a cloud telephony solution providing top-notch IVR services, seamless call management, and real-time analytics. With features like custom IVR, blended calling, and real-time call monitoring, it empowers businesses to enhance customer experience and boost efficiency. Its 24/7 support ensures uninterrupted service, while its user-friendly interfaces and secure protocols guarantee reliability and trustworthiness.",
    },
    {
      name: "MyOperator",
      description: "Experience mobile-first cloud telephony",
      image: "/images/my-operator.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "myoperator",
      url: "/myoperator",
      rating: 0.0,
      reviews: 0,
      details:
        "MyOperator is a mobile-first cloud telephony solution trusted by over 10,000 businesses, offering no-code, zero-deployment SAAS platform for accelerating customer engagement and enterprise communication. It provides scalable contact center technology, simless mobile workforce empowerment, and omni-channel integrations for seamless communication across various platforms. With high uptime, mobile-first design, and enterprise-grade security, MyOperator redefines business communication, enabling automation of customer engagement workflows and providing powerful reporting insights. Join leading brands across industries in leveraging MyOperator to revolutionize communication and enhance customer interactions.",
    },
    {
      name: "MCUBE",
      description: "Complete Call Center on Cloud",
      image: "/images/mcube.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "mcube",
      url: "/mcube",
      rating: 0.0,
      reviews: 0,
      details:
        "MCUBE is a cloud telephony service that revolutionizes business communication. It offers advanced solutions like IVR, call recording, and CRM integration, enhancing customer service and operational efficiency. With high reliability, security, and compliance features, MCUBE ensures seamless and cost-effective communication. Its user-friendly interface, zero capital investment, and simplified integration make it the preferred choice for businesses of all sizes. Trusted by leading companies worldwide, MCUBE empowers businesses to drive growth, improve efficiencies, and deliver exceptional customer experiences.",
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
