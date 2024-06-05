import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../oracle-cloud-infrastructure/oracle-cloud-infrastructure.module.scss";

const uspData = [
  {
    title: "Next-Generation Cloud Infrastructure",
    content:
      "OCI is positioned as a next-generation cloud designed to run any application faster and more securely for less cost.",
  },
  {
    title: "Oracle-Microsoft Partnership",
    content:
      "The partnership between Oracle and Microsoft is highlighted, with the availability of Oracle Database@Azure in the Microsoft Azure East US region. This collaboration aims to deliver Oracle database services on Oracle Cloud Infrastructure within Microsoft Azure.",
  },
  {
    title: "Multicloud Capabilities",
    content:
      "OCI offers multicloud solutions, making multiple clouds work together. There's direct database integration with Microsoft Azure, emphasizing high performance interconnection.",
  },
  {
    title: "Distributed Cloud Options",
    content:
      "OCI provides solutions for hybrid cloud deployments, with trusted cloud solutions for various locations, including Oracle Exadata Cloud@Customer deployed in over<span style=\"color:#FC5185 ;\"><strong> 60 countries</strong></span>.",
  },
  {
    title: "Dedicated Cloud Offerings",
    content:
      "OCI Dedicated Region and Oracle Alloy are highlighted as unique products providing over<span style=\"color:#FC5185 ;\"><strong> 100 cloud services</strong></span> at public cloud pricing, entirely within the customer's data centers.",
  },
  {
    title: "Comprehensive Cloud Services",
    content:
      "OCI offers a common set of<span style=\"color:#FC5185 ;\"><strong> 100+ services</strong></span> in each cloud region, covering a wide range of categories such as compute, storage, databases, machine learning, AI, analytics, and more.",
  },
  {
    title: "Global Cloud Data Center Coverage",
    content:
      "OCI spans <span style=\"color:#FC5185 ;\"><strong>48 </strong></span>interconnected geographic commercial and government cloud regions, providing consistent services and pricing worldwide.",
  },
  {
    title: "Cost-Effective Pricing",
    content:
      "OCI claims to offer competitive pricing with features such as flexible compute, auto-tuning storage, committed use discounts, software license portability, and loyalty rewards.",
  },
  {
    title: "Purpose-Built Solutions",
    content:
      "OCI provides purpose-built solutions for specific industries, such as finance, healthcare, government, and telecommunications.",
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
            <h3 className="mb-3">USP of  Oracle Cloud Infrastructure (OCI)</h3>
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
