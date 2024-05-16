import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Comprehensive Hotel Management Suite",
    "content": "KWHotel offers a complete suite of solutions for hotel management, covering desktop and web-based versions, rental management for apartments, online booking engine, channel management, and more."
  },
  {
    "title": "Pandemic Preparedness",
    "content": "Special features like the Digital Registration Card and Hotel Clean App are designed to enhance safety during the pandemic, providing efficient check-in processes and streamlined communication for cleaning."
  },
  {
    "title": "OTA Integration and Channel Management",
    "content": "Streamline operations by automating availabilities, rates, and reservations with major OTAs like Booking.com and Expedia, reducing manual efforts and minimizing the risk of overbooking."
  },
  {
    "title": "Customizable Modules",
    "content": "KWHotel offers a range of modules, including parking management, SMS marketing, POS system integration, and door access control, allowing hotels to tailor the system to their specific needs."
  },
  {
    "title": "Innovative Technology",
    "content": "Features like self-check-in kiosks <span style=\"color:#FC5185 ;\"><strong>(Sezam24)</strong></span> and integration with POSbistro POS system showcase KWHotel's commitment to adopting innovative technology for the benefit of both hoteliers and guests."
  },
  {
    "title": "Long-Term Rental Management",
    "content": "KWHotel facilitates the management of long-term apartment rentals, automating the generation of invoices based on specific criteria."
  },
  {
    "title": "Global Reach",
    "content": "With over <span style=\"color:#FC5185 ;\"><strong>5,000</strong></span> customers in <span style=\"color:#FC5185 ;\"><strong>160</strong></span> countries and support for <span style=\"color:#FC5185 ;\"><strong>21</strong></span> languages, KWHotel demonstrates its global appeal and adaptability to diverse hotel environments."
  },
  {
    "title": "Free Version with Hotel Audit",
    "content": "The offer of a free version, coupled with a hotel audit providing over <span style=\"color:#FC5185 ;\"><strong>60+</strong></span> professional tips, showcases KWHotel's commitment to supporting hoteliers in optimizing their operations."
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
            <h3 className="mb-3">USP of KWHotel</h3>
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
