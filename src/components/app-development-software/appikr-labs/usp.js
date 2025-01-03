import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../appikr-labs/appikr-labs.module.scss";

const uspData = [
  {
    title: "Proven Expertise and Experience",
    content:
      'Appikr Labs boasts over <span style="color:#f95738 ;"><strong>10</strong></span> years of industry experience and a track record of delivering successful mobile app solutions. With <span style="color:#f95738 ;"><strong>350+</strong></span> apps delivered and a team of <span style="color:#f95738 ;"><strong>175+</strong></span> skilled developers, they have established themselves as a leading mobile app development company.',
  },
  {
    title: "Global Recognition and Trust",
    content:
      'Recognized as the <span style="color:#f95738 ;"><strong>#1</strong></span> App & Web Development Company since <span style="color:#f95738 ;"><strong>2016</strong></span>, Appikr Labs has garnered a global reputation for being a trusted development partner. They have worked with clients from diverse industries and have achieved high client retention rates <span style=\"color:#f95738 ;\"><strong>(90%)</strong></span>.',
  },
  {
    title: "Wide Range of Services",
    content:
      'Appikr Labs offers <span style="color:#f95738 ;"><strong>360-degree</strong></span> solutions for brands, serving as a one-stop development solution. Their services include Android and iOS app development, Flutter app development, Android game development, Xamarin app development, AR & VR technology, and Unity <span style="color:#f95738 ;"><strong>3D</strong></span> game development.',
  },
  {
    title: "Client-Centric Benefits",
    content:
      'Appikr Labs provides several client-centric benefits to distinguish themselves, such as a <span style="color:#f95738 ;"><strong>100%</strong></span> money-back guarantee, <span style="color:#f95738 ;"><strong>7%</strong></span> penalty enforcement, <span style="color:#f95738 ;"><strong>9</strong></span> months of free app promotion, and free <span style="color:#f95738 ;"><strong>2</strong></span> years of maintenance and support.',
  },
  {
    title: "Global Presence",
    content:
      "Appikr Labs has a global footprint with offices in Bahrain, the USA, the UK, and the UAE, making them accessible to clients worldwide.",
  },
];
{
  /* <span style=\"color:#f95738 ;\"><strong> */
}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Appikr Labs</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                <h5>{item.title}</h5>
                <br />
                {/* <p dangerouslySetInnerHTML={{ __html: item.content }} /> */}
                {renderHTML(item.content)}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Usp;
