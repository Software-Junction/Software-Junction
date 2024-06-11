import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../wrike/wrike.module.scss";

const uspData = [
  {
    title: "Trusted by 20,000+ Organizations Worldwide",
    content:
      "Wrike has gained the trust of a diverse range of organizations globally, including prominent names like Procter and Gamble, Sega, Lyft, Siemens, Pfizer, Oglivy, and T-Mobile.",
  },
  {
    title: "Reduce Emails by 90%",
    content:
      "Wrike significantly reduces email communication by providing a platform where teams can work at the task level, enhancing efficiency and reducing the need for extensive email correspondence.",
  },
  {
    title: "Extensive Integrations",
    content:
      'Wrike boasts <span style="color:#f95738 ;"><strong>400+</strong></span> integrations, catering to the preferences of project managers who may already be using tools like Slack, Google Docs, and more.',
  },
  {
    title: "Testimonials from Satisfied Users",
    content:
      "Positive testimonials from users such as Chad Svedin from House of Design, Courtney Hatch from Verizon Digital Media, and Symon More from Hootsuite highlight Wrike's impact in saving time, customization, and collaboration.",
  },
  {
    title: "Global Community of 2.4 Million Users",
    content:
      "Wrike emphasizes its large user community, including some of the world's leading organizations, showcasing its widespread adoption and acceptance.",
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
            <h3 className="mb-3">USP of Wrike</h3>
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
