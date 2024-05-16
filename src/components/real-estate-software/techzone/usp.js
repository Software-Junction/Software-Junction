import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Global Reach and Multi-Cultural Collaboration",
    content:
      "With a presence in over <span style=\"color:#FC5185 ;\"><strong> 10 countries</strong></span> and collaboration with teams from Switzerland to the US, Middle East, India, and African countries, Techzone provides a unique cross-cultural approach to project delivery, ensuring diverse perspectives and global expertise.",
  },
  {
    title: "Industry-Specific Expertise",
    content:
      "Techzone specializes in serving various industries, including real estate, retail, manufacturing, services, consumer internet, aviation, travel, and more. This industry-specific expertise allows them to tailor solutions to the unique requirements of different business sectors.",
  },
  {
    title: "Real Estate Dominance",
    content:
      "Techzone stands out as a leader in real estate solutions with a proven track record. Their real estate portal solutions are utilized in more than <span style=\"color:#FC5185 ;\"><strong>10</strong></span> countries, boasting over <span style=\"color:#FC5185 ;\"><strong>2 million</strong></span> property listings in <span style=\"color:#FC5185 ;\"><strong>five languages</strong></span>, making them a go-to choice for real estate businesses globally.",
  },
  {
    title: "Agile Development and Fast Deployment",
    content:
      "Techzone emphasizes fast development cycles, adaptable design, and a customer-first approach. With <span style=\"color:#FC5185 ;\"><strong>800+</strong></span> successful deliveries, they offer agile development processes and lifetime support for bug fixing, ensuring prompt and reliable solutions.",
  },
  {
    title: "Digital Marketing Expertise",
    content:
      "Techzone's digital marketing services set them apart, offering SEO audits, competitive analysis, social media management, email marketing, and PPC campaign management. Their strategies aim to bring organic and paid traffic to enhance clients' online presence and revenue.",
  },
  {
    title: "Impressive Portfolio with Top Brands",
    content:
      "Techzone's portfolio showcases successful projects with top brands across various sectors, including e-commerce, real estate, retail, and mobile technology. This track record adds credibility to their capabilities.",
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

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Techzone</h3>
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
