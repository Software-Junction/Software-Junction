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
      name: "AssetThread",
      description: "Web Based Fixed Asset Accounting Software",
      image: "/images/asset.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "asset",
      url: "/medicin",
      rating: 0.0,
      reviews: 0,
      details:
        "AssetThread, a cutting-edge platform designed to streamline and revolutionize your asset management processes. This software offers a user-friendly interface, allowing businesses to effortlessly organize, track, and optimize their valuable assets. With robust features like real-time updates and comprehensive reporting, AssetThread empowers you to make informed decisions, enhancing overall efficiency. Say goodbye to tedious manual tracking and welcome a seamless asset management experience with AssetThread – where precision meets simplicity.",
    },
    {
      name: "FAMS",
      description: "Web Based Software to Manage Fixed Asset Register",
      image: "/images/fams.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "fams",
      url: "/logic",
      rating: 0.0,
      reviews: 0,
      details:
        "FAMS is the leading brand for recording and managing assets and calculating depreciation for corporates. It offers unmatched speed and functionality, an easy-to-use interface, and a robust reporting system that turns data into actionable information. FAMS is complete web based software in compliance with the Income Tax Act and Companies Act.",
    },
    {
      name: "Freshbooks",
      description: "Cloud Accounting Software Making Billing Painless",
      image: "/images/freshbooks.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "freshbooks",
      url: "/gofrugal",
      rating: 0.0,
      reviews: 0,
      details:
        "FreshBooks is a small-business accounting software product that's well-suited for freelancers and independent contractors. It stands out with its solid phone support and customizable invoicing features. However, it's not ideal for fast-growing businesses because of user and client limits on some of its plans.",
    },
    {
      name: "Sage Fixed Assets",
      description: "Web Based Fixed Asset Accounting Software",
      image: "/images/sage.jpg",
      imageWidth: 130,
      imageHeight: 10,
      altText: "sage",
      url: "/visual",
      rating: 0.0,
      reviews: 0,
      details:
        "Sage Fixed Assets, a comprehensive solution for efficient management of your organization's fixed assets. This powerful software simplifies the entire lifecycle of assets, from acquisition to disposal, ensuring accurate tracking and compliance with regulations. With user-friendly features and robust reporting capabilities, Sage Fixed Assets streamlines depreciation calculations, reduces risks, and enhances overall financial visibility. Experience seamless asset management and optimize your business processes with this cutting-edge solution from Sage.",
    },
    {
      name: "Embrace",
      description: "Globally recognized enterprise asset management.",
      image: "/images/embrace.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "embrace",
      url: "/ecogreen",
      rating: 0.0,
      reviews: 0,
      details:
        "Eambrace, a comprehensive Enterprise Asset Management (EAM) solution at the forefront of optimizing business operations. With a user-friendly interface, Eambrace empowers organizations to efficiently manage and maintain their assets, from equipment to facilities. This innovative software streamlines workflows, enhances asset performance, and provides real-time insights, ensuring businesses can make informed decisions. Experience the next level of asset management with Eambrace, a solution designed to elevate efficiency and maximize the lifecycle of your valuable assets.",
    },
    {
      name: "Viramati's ERP-FAMS",
      description: "Software by Virmati Software & Telecommunications Ltd.",
      image: "/images/virmati.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "virmati",
      url: "/meddoz",
      rating: 0.0,
      reviews: 0,
      details:
        "Viramati's ERP-FAMS, a cutting-edge Enterprise Resource Planning solution designed to streamline and enhance your business processes. With a user-friendly interface and robust functionality, ERP-FAMS empowers organizations to manage finances, automate workflows, and optimize resource utilization seamlessly. Tailored to meet diverse industry needs, this software offers real-time insights, fostering informed decision-making. Unlock efficiency and elevate your business operations with Viramati's ERP-FAMS, where innovation meets reliability.",
    },
    {
      name: "Mprofit",
      description: "Portfolio Management Solution",
      image: "/images/mprofit.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "mprofit",
      url: "/medeil",
      rating: 0.0,
      reviews: 0,
      details:
        "MProfit is a comprehensive financial management software designed to streamline your investment tracking and portfolio management. With user-friendly features, MProfit enables you to effortlessly monitor stocks, mutual funds, and other assets in real-time. Gain valuable insights into your financial performance, generate insightful reports, and make informed investment decisions. Whether you're a seasoned investor or just starting, MProfit offers a powerful tool to simplify and enhance your financial management experience. Explore a smarter way to manage your investments with MProfit today.",
    },
    {
      name: "Nitsotech's Fixed Asset Management Software",
      description: "Software by Nitso Technologies Pvt. Ltd",
      image: "/images/nitso.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "nitso",
      url: "/adysoft",
      rating: 0.0,
      reviews: 0,
      details:
        "Nitsotech's Fixed Asset Management Software, a game-changer in the world of asset tracking and optimization. This advanced software offers a comprehensive solution for businesses seeking precision and efficiency in managing their fixed assets. Nitsotech's platform goes beyond mere tracking, providing insightful data throughout the asset lifecycle, enabling informed decision-making. Experience seamless asset management like never before, and discover how Nitsotech is reshaping the landscape of asset optimization. Dive into the link to explore the features and benefits that make Nitsotech a standout choice for businesses worldwide.",
    },
    {
      name: "FACT Software",
      description: "FACT ERP.NG - the Next Generation ERP Software",
      image: "/images/fact.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "fact",
      url: "/evital",
      rating: 0.0,
      reviews: 0,
      details:
        "FACT Software, a dynamic business management solution poised to revolutionize your operational landscape. Boasting an intuitive interface, FACT Software brings together robust features for accounting, inventory management, and customer relationship management, all in one cohesive platform. Ideal for small and medium-sized enterprises, this software seamlessly integrates essential functions, providing a unified and efficient business management experience. Stay ahead in the competitive market by harnessing FACT Software's powerful tools, designed to optimize workflows and drive organizational success.",
    },
    {
      name: "Focus Softnet",
      description: "Accelerate | Innovate | Compete",
      image: "/images/focus.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "focus",
      url: "/cbo",
      rating: 0.0,
      reviews: 0,
      details:
        "Focus Softnet, established in 1992, has evolved into a multinational business solutions provider, offering cutting-edge ERP, CRM, and HCM software. Operating in 17 countries from 27 offices, Focus Softnet's cloud-based ERP solutions cater to diverse industries like automotive, manufacturing, education, and more. Recognized for compliance with regional tax regulations, especially India's GST, their ERP systems boast industry-specific features, customizable workflows, and real-time insights. With a focus on digital transformation, Focus Softnet provides scalable, award-winning solutions, earning trust from a growing customer base globally. Explore their feature-rich ERP, CRM, and HCM software for unparalleled efficiency and productivity.",
    },
    {
      name: "Tracet",
      description: "On-Cloud & Mobile-ready Asset Management Software",
      image: "/images/tracet.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "tracet",
      url: "/halemind",
      rating: 0.0,
      reviews: 0,
      details:
        "Tracet is a leading provider of enterprise asset management software, specializing in boosting fixed asset efficiency. Our comprehensive solution enhances visibility, control, and compliance, all while reducing costs and efforts. With features covering asset tracking, management, accounting, and seamless integration, Tracet empowers businesses to optimize their fixed asset performance.",
    },
    {
      name: "Spine Assets",
      description: "Simple Fixed Asset Accounting System",
      image: "/images/spine.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "spine",
      url: "/acme",
      rating: 0.0,
      reviews: 0,
      details:
        "Spine Technologies offers a comprehensive HRMS and Fixed Asset Management solution, empowering organizations to streamline processes and enhance accountability. With features like Asset Assignment, Compliance Tracking, and Repair & Maintenance Monitoring, the software ensures financial prosperity through efficient management of assets. It provides integrated regulatory compliance, insurance policies tracking, and full lifecycle history, enabling users to meet audit regulations and make informed business decisions. Spine Technologies prioritizes client satisfaction with a people-centric approach, exemplified by their high client retention.",
    },
    {
      name: "SmartAsset",
      description: "Fixed Asset Management as per Companies Act 2013",
      image: "/images/smartasset.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "smartasset",
      url: "/ehospital",
      rating: 0.0,
      reviews: 0,
      details:
        "SmartAsset is your trusted partner in financial planning, offering a free and easy-to-use platform to connect with vetted fiduciary financial advisors. Whether you're navigating retirement, home buying, taxes, or investing, our platform matches you with professionals dedicated to acting in your best interest. With over 50,000 monthly matches, our service empowers you to review pre-screened advisors, ensuring a secure and transparent financial journey.",
    },
    {
      name: "Busy Accounting",
      description: "The Complete Business Management Software for SMEs",
      image: "/images/busy.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "busy",
      url: "/retailgraph",
      rating: 0.0,
      reviews: 0,
      details:
        "BUSY is a versatile integrated billing and accounting software designed for micro, small, and medium enterprises. With its user-friendly interface and robust features, it adapts seamlessly to your business requirements. Whether you prefer Desktop, Cloud, or Mobile App access, BUSY Software offers a flexible solution to streamline your financial management tasks.",
    },
    {
      name: "TallyPrime",
      description: "Power of Simplicity",
      image: "/images/tally.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "tally",
      url: "/wondersoft",
      rating: 0.0,
      reviews: 0,
      details:
        "TallyPrime is a comprehensive business management software designed to streamline and enhance various aspects of your business operations. With a user-friendly interface and powerful features like customizable reports, multi-company management, and efficient cash flow control, TallyPrime empowers you to make informed decisions and focus on business growth.",
    },
    {
      name: "AsseTrack FAMS",
      description: "Fixed Asset Management Software",
      image: "/images/track.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "track",
      url: "/catalyst",
      rating: 0.0,
      reviews: 0,
      details:
        "AsseTrack FAMS is a sophisticated web-based Fixed Asset Management Software designed for efficient asset tracking in Kenya and beyond. With features like Tag It, Scan It, and Track It, it offers a custom-built solution for organizations to manage fixed assets seamlessly. The software provides centralized role-based data, supports barcode asset management, and enhances security with a well-established policy.",
    },
    {
      name: "FMIS",
      description: "Software by FMIS Ltd.",
      image: "/images/fmis.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "fmis",
      url: "/varthagam",
      rating: 0.0,
      reviews: 0,
      details:
        "FMIS offers comprehensive software solutions for fixed asset management, asset tracking, purchase-to-pay processes, stock and inventory control, equipment maintenance, and lease accounting. Their systems ensure compliance with GAAP, IFRS, and other relevant accounting standards, providing a seamless integration experience. With a range of add-ons tailored for Access Dimensions, Sage, and Deltek Vision users, FMIS enhances asset management and manufacturing capabilities. The software is endorsed by satisfied clients, such as Danny Mansfield from Express, Newspaper Group. Stay updated with FMIS through their informative articles, case studies, and certifications, showcasing their commitment to innovation and data security.",
    },
    {
      name: "Oracle Fusion Cloud ERP",
      description: "SaaS solution with top ERP features & capabilities",
      image: "/images/oracle.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "oracle",
      url: "/sanpharmacy",
      rating: 0.0,
      reviews: 0,
      details:
        "Oracle ERP, which stands for Enterprise Resource Planning, is a versatile suite of business software applications designed to simplify and improve an organization's core operations. This powerful and flexible platform gives businesses the tools they need to effectively handle their finances, procurement processes, HR functions, and the complexities of their supply chain. By offering a unified solution for crucial business tasks, Oracle ERP enables companies to operate more efficiently, make well-informed decisions, and enhance their competitiveness in today's dynamic business world.",
    },
    {
      name: "Asset Infinity",
      description: "Manage anything & everything of value to you!",
      image: "/images/infinity.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "infinity",
      url: "/medeilplus",
      rating: 0.0,
      reviews: 0,
      details:
        "Asset Infinity is a robust asset management software that offers a comprehensive solution for tracking and maintaining assets, equipment, inventory, and tools. Trusted by numerous organizations globally, including notable names like Sodexo, Amazon Logistics, and CMA CGM, Asset Infinity simplifies the entire asset lifecycle. From asset tracking using barcodes, QR codes, RFID, or NFC to preventive and breakdown maintenance management, the software ensures efficient control and visibility. With features like purchase management and seamless integration with ERP systems, Asset Infinity provides a user-friendly experience, helping organizations streamline operations and enhance productivity.",
    },
    {
      name: "mAssetTag",
      description: "Software by Innovapptive Inc.",
      image: "/images/tag.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "tag",
      url: "/bhamni",
      rating: 0.0,
      reviews: 0,
      details:
        "Innovapptive's mAssetTag is a SAP® Certified fixed asset tracking solution designed to streamline and automate fixed asset physical inventory and reconciliation processes. With its intuitive mobile interface, mAssetTag simplifies data entry using GPS, camera, and barcode readers, eliminating human errors and redundancies. This innovative tool integrates seamlessly with SAP or ERP systems, offering a centralized repository for efficient data analysis. Achieve over 40% improvement in employee productivity during audits, 10–20% reduction in tax overpayments, and a 15% decrease in insurance premiums.",
    },
    {
      name: "iProFX",
      description: "Software by Adept Infoways Private Limited",
      image: "/images/iprofx.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "iprofx",
      url: "/bhamni",
      rating: 0.0,
      reviews: 0,
      details:
        "iProFX is a sophisticated Fixed Asset Management software designed by Adept Infoways. This comprehensive solution automates the meticulous tracking of fixed assets, offering features such as auto depreciation calculations, easy asset disposal, transfer, and acquisition management. With user-friendly interfaces for entry and reporting, iProFX simplifies complex tasks, reducing manual effort significantly. Its robust features include master entry for vendors, item, and location, detailed registers, depreciation statements, and more. Choose iProFX for efficient and streamlined fixed asset management, ensuring accuracy and compliance in your financial processes.",
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
