import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Trusted Worldwide",
    "content": "With a presence in <span style=\"color:#FC5185 ;\"><strong>43</strong></span> countries, Roomsy has earned the trust of hotels, motels, apartments, condos, campgrounds, RV parks, retreats, resorts, and student/staff resident facilities globally."
  },
  {
    "title": "No Credit Card Required for Trial",
    "content": "The software allows potential users to experience its power with a <span style=\"color:#FC5185 ;\"><strong>14-day</strong></span> free trial, emphasizing a commitment to a risk-free experience without the need for credit card information."
  },
  {
    "title": "Necessary Features Only",
    "content": "Roomsy focuses on providing only the essential features that most hotels need, ensuring a clean and simple booking calendar, efficient room management, customizable invoices, an online booking engine, robust reports, employee management, housekeeping tools, and secure payment processing."
  },
  {
    "title": "Integration with Top Hospitality Technologies",
    "content": "Roomsy sets itself apart by being partnered and integrated with over <span style=\"color:#FC5185 ;\"><strong>250</strong></span> Online Travel Agencies (OTAs), saving time for property owners by syncing with top hospitality technologies."
  },
  {
    "title": "Global Team and Origin",
    "content": "The software is developed by a small team in Vancouver, Canada, consisting of ex-hotel employees who understand the challenges of hotel operations. This adds a personal touch to the product's origin and a dedication to serving small independent property owners globally."
  },
  {
    "title": "Zero Commission",
    "content": "The <span style=\"color:#FC5185 ;\"><strong>14-day</strong></span> free trial is emphasized as being <span style=\"color:#FC5185 ;\"><strong>'Risk-Free with 0 Commission,'</strong></span> which is a significant advantage for property owners looking to test the software without financial commitment."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Roomsy</h3>
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
