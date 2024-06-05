import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../john-deere/john-deere.module.scss";

const uspData = [
  {
    title: "Power and Technology",
    content:
      "John Deere tractors are built with both power and cutting-edge technology, providing farmers with efficient and advanced machinery for their agricultural needs.",
  },
  {
    title: "Wide Range of Tractor Models",
    content:
      "John Deere offers a diverse range of tractor models, catering to different power requirements ranging from <span style=\"color:#FC5185 ;\"><strong>28 HP </strong></span>to <span style=\"color:#FC5185 ;\"><strong>75 HP</strong></span>. This variety allows farmers to choose the right tractor for their specific needs.",
  },
  {
    title: "5-Year Warranty",
    content:
      "The company stands behind the durability and reliability of its tractors by offering a <span style=\"color:#FC5185 ;\"><strong>5-year warranty</strong></span> on all models. This commitment to quality provides peace of mind to customers.",
  },
  {
    title: "Precision Agriculture Solutions",
    content:
      "John Deere introduces precision agriculture solutions, such as AutoTrac™, an automated vehicle guidance system. This technology enhances the accuracy and efficiency of farming operations.",
  },
  {
    title: "Reputation and Heritage",
    content:
      "Leveraging the long-standing reputation and heritage of the John Deere brand, customers can trust the company's expertise and commitment to excellence in the agriculture industry.",
  },
];
{
  /* <span style=\"color:#FC5185 ;\"><strong> */
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
            <h3 className="mb-3">USP of John Deere</h3>
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
