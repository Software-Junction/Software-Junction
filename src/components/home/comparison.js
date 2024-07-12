import React, { useState,useRef } from "react";
import Image from "next/image";
import { Container, Row, Col, Button, Tab, Tabs } from "react-bootstrap";
import Accounting from '../accounting-software/cmpchat';
import Erp from '../erp-software/cmpchat';
import Hr from '../hr-software/cmpchat';
import Crm from '../crm-software/cmpchat';
import Ecommerce from '../e-commerce-software/cmpchat';
import Billing from '../billing-and-invoicing-software/cmpchat';
import Event from '../event-management-software/cmpchat';
import Project from '../project-management-software/cmpchat';
import Hotel from '../hotel-management/cmpchat';
import Call from '../call-center-software/cmpchat';
import Property from '../property-management-software/cmpchat';
import Hospital from '../hospital-management-software/cmpchat';
import Inventory  from '../inventory-management-software/cmpchat';
import App from '../app-development-software/cmpchat';
import Retailing from '../retailing/cmpchat';



const Comparison = ({ styles }) => {

  const [ToggleState, setToggleState] = useState(1);

  const tabListRef = useRef(null);

  const toggleTab = (index) => {
    setToggleState(index);
    scrollToTab(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  const scrollToTab = (index) => {
    const tabList = tabListRef.current;
    const tab = tabList.children[index - 1]; // index starts from 1, but children array is 0-based

    if (tab) {
      tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };
  
  return (
    <>
      <section className={`${styles["comparison"]} my-4`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="mb-4">Comparison Table</h3>
            {/* </Col> */}
            {/* <Col lg={12}>
              <div className={`${styles['tabs-overflow']} compare-tab`}>
            <Tabs
          defaultActiveKey="Accounting"
          id="justify-tab-example"
          className={`${styles["compare-tab-overflow"]}`}
          justify
        >
          <Tab eventKey="Accounting" title="Accounting Software">
           <Accounting styles={styles}/>
          </Tab>

          <Tab eventKey="Education" title="Education Software">
            <Education styles={styles} />
            
          </Tab>
          <Tab eventKey="ERP" title="ERP Software">
            <Erp styles={styles} />
          </Tab>
          <Tab eventKey="HR" title="HR Software">
            <Hr styles={styles} />
          </Tab>
          <Tab eventKey="CRM" title="CRM Software">
            <Crm styles={styles} />
          </Tab>
          <Tab eventKey="Agriculture" title="Agriculture Software">
            <Agriculture styles={styles} />
          </Tab>
          <Tab eventKey="App" title="App Development Software">
            <App styles={styles} />
          </Tab>
          <Tab eventKey="Billing" title="Billing Software">
            <Billing styles={styles} />
          </Tab>
        </Tabs>
        </div>
            </Col> */}
            {/* <Col lg ={12}> */}
            <div className={styles["ul-wraps"]}>
              <ul className={styles["tab-list"]} ref={tabListRef}>
                <li
                  className={`${styles["tabs"]} ${getActiveClass(1, styles["active-tabs"])}`}  onClick={() => toggleTab(1)}>
                    Accounting Software
                </li>
                <li className={`${styles["tabs"]} ${getActiveClass(2, styles["active-tabs"])}`}  onClick={() => toggleTab(2)}>
                    Hr Software
                </li>
                <li className={`${styles["tabs"]} ${getActiveClass(3, styles["active-tabs"])}`}  onClick={() => toggleTab(3)}>
                    Crm Software
                </li>
                <li className={`${styles["tabs"]} ${getActiveClass(4, styles["active-tabs"])}`}  onClick={() => toggleTab(4)}>
                    ERP Software
                </li>
                <li className={`${styles["tabs"]} ${getActiveClass(5, styles["active-tabs"])}`}  onClick={() => toggleTab(5)}>
                    Ecommerce Software
                </li>
                <li className={`${styles["tabs"]} ${getActiveClass(6, styles["active-tabs"])}`}  onClick={() => toggleTab(6)}>
                    Billing Software
                </li>
                <li className={`${styles["tabs"]} ${getActiveClass(7, styles["active-tabs"])}`}  onClick={() => toggleTab(7)}>
                    Event Software
                </li>
                <li className={`${styles["tabs"]} ${getActiveClass(8, styles["active-tabs"])}`}  onClick={() => toggleTab(8)}>
                    Project Software
                </li>
                <li className={`${styles["tabs"]} ${getActiveClass(9, styles["active-tabs"])}`}  onClick={() => toggleTab(9)}>
                    Hotel Software
                </li>
                <li className={`${styles["tabs"]} ${getActiveClass(10, styles["active-tabs"])}`}  onClick={() => toggleTab(10)}>
                    Call Center Software
                </li>
                <li className={`${styles["tabs"]} ${getActiveClass(11, styles["active-tabs"])}`}  onClick={() => toggleTab(11)}>
                    Property Software
                </li>
                <li className={`${styles["tabs"]} ${getActiveClass(12, styles["active-tabs"])}`}  onClick={() => toggleTab(12)}>
                    Hospital Management Software
                </li>
                <li className={`${styles["tabs"]} ${getActiveClass(13, styles["active-tabs"])}`}  onClick={() => toggleTab(13)}>
                    Inventory Software
                </li>
                <li className={`${styles["tabs"]} ${getActiveClass(14, styles["active-tabs"])}`}  onClick={() => toggleTab(14)}>
                    App Development Software
                </li>
                <li className={`${styles["tabs"]} ${getActiveClass(15, styles["active-tabs"])}`}  onClick={() => toggleTab(15)}>
                    Retailing Software
                </li>
              </ul>
          </div>
          <div className={styles["table-content"]}>
          <div className={`${styles["content"]} ${getActiveClass(1, styles["active-content"])}`}>
            <Accounting styles={styles} />
          </div>

          <div className={`${styles["content"]} ${getActiveClass(2, styles["active-content"])}`}>
            <Hr styles={styles} />
          </div>

          <div className={`${styles["content"]} ${getActiveClass(3, styles["active-content"])}`}>
            <Crm styles={styles} />
          </div>

          <div className={`${styles["content"]} ${getActiveClass(4, styles["active-content"])}`}>
            <Erp styles={styles} />
          </div>

          <div className={`${styles["content"]} ${getActiveClass(5, styles["active-content"])}`}>
            <Ecommerce styles={styles} />
          </div>

          <div className={`${styles["content"]} ${getActiveClass(6, styles["active-content"])}`}>
            <Billing styles={styles} />
          </div>

          <div className={`${styles["content"]} ${getActiveClass(7, styles["active-content"])}`}>
            <Event styles={styles} />
          </div>

          <div className={`${styles["content"]} ${getActiveClass(8, styles["active-content"])}`}>
            <Project styles={styles} />
          </div>

          <div className={`${styles["content"]} ${getActiveClass(9, styles["active-content"])}`}>
            <Hotel styles={styles} />
          </div>

          <div className={`${styles["content"]} ${getActiveClass(10, styles["active-content"])}`}>
            <Call styles={styles} />
          </div>

          <div className={`${styles["content"]} ${getActiveClass(11, styles["active-content"])}`}>
            <Property styles={styles} />
          </div>

          <div className={`${styles["content"]} ${getActiveClass(12, styles["active-content"])}`}>
            <Hospital styles={styles} />
          </div>

          <div className={`${styles["content"]} ${getActiveClass(13, styles["active-content"])}`}>
            <Inventory styles={styles} />
          </div>

          <div className={`${styles["content"]} ${getActiveClass(14, styles["active-content"])}`}>
            <App styles={styles} />
          </div>

          <div className={`${styles["content"]} ${getActiveClass(15, styles["active-content"])}`}>
            <Retailing styles={styles} />
          </div>

          </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Comparison;


