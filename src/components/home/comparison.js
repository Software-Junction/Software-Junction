import React from "react";
import Image from "next/image";
import { Container, Row, Col, Button, Tab, Tabs } from "react-bootstrap";
import Accounting from '../accounting-software/cmpchat';
import Education from '../cms/cmpchat';
import Erp from '../erp-software/cmpchat';
import Hr from '../hr-software/cmpchat';
import Crm from '../crm-software/cmpchat';

const Comparison = ({ styles }) => {
  return (
    <>
      <section className={`${styles["comparison"]} my-4`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="mb-4">Comparison Table</h3>
            </Col>
            <Col lg={12}>
              <div className="compare-tab">
            <Tabs
          defaultActiveKey="Accounting"
          id="justify-tab-example"
          className={`${styles["compare-tab"]}`}
          justify
        >
          <Tab eventKey="Accounting" title="Accounting">
           <Accounting styles={styles}/>
            {/* <List styles={styles} />
            <Related styles={styles} /> */}
           
          </Tab>
          <Tab eventKey="Education" title="Education">
            <Education styles={styles} />
            
          </Tab>
          <Tab eventKey="ERP" title="ERP">
            <Erp styles={styles} />
          </Tab>
          <Tab eventKey="HR" title="HR">
            <Hr styles={styles} />
          </Tab>
          <Tab eventKey="CRM" title="CRM">
            <Crm styles={styles} />
          </Tab>
        </Tabs>
        </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Comparison;

{
  /* <Col lg={3} className={styles["col-margin-mob"]}>
<div className={`${styles["box"]} shadow h-100`}>
  <div className="d-flex">
    <div className="img pt-3 ms-4">
      <div className=" mt-2 me-4">
        <Image
          src="/images/mybillbook.png"
          alt="billbook"
          height="100"
          width="100"
          className="shadow"
        />
      </div>
      <p className={`${styles["box-p-font"]} pt-3`}>
        My Bill Book
      </p>
    </div>
    <div className="hr">
      <hr className={styles["vs-hr"]} />
    </div>
    <div>
      <p className={`${styles["vs-box"]} p-2`}>vs</p>
    </div>
    <div className="img pt-3">
      <div className=" mt-2 me-3">
        <Image
          src="/images/vyaparlogo.png"
          alt="billbook"
          height="100"
          width="100"
          className=" shadow "
        />
      </div>
      <p className={`${styles["box-p-font"]} pt-3`}>
        Vyapar Billing software
      </p>
    </div>
  </div>
  <div className="text-center my-3">
    <Button size="sm" variant="primary" href="">
      Compare
    </Button>
  </div>
</div>
</Col>

<Col lg={3} className={styles["col-margin-mob"]}>
<div className={`${styles["box"]} shadow h-100`}>
  <div className="d-flex">
    <div className="img pt-3 ms-4">
      <div className=" mt-2 me-4">
        <Image
          src="/images/mybillbook.png"
          alt="billbook"
          height="100"
          width="100"
          className="shadow"
        />
      </div>
      <p className={`${styles["box-p-font"]} pt-3`}>
        My Bill Book{" "}
      </p>
    </div>
    <div className="hr">
      <hr className={styles["vs-hr"]} />
    </div>
    <div>
      <p className={`${styles["vs-box"]} p-2`}>vs</p>
    </div>
    <div className="img pt-3">
      <div className=" mt-2 me-3">
        <Image
          src="/images/mybillbook.png"
          alt="billbook"
          height="100"
          width="100"
          className=" shadow "
        />
      </div>
      <p className={`${styles["box-p-font"]} pt-3`}>
        My Bill Book{" "}
      </p>
    </div>
  </div>
  <div className="text-center my-3">
    <Button size="sm" variant="primary" href="">
      Compare
    </Button>
  </div>
</div>
</Col>

<Col lg={3} className={styles["col-margin-mob"]}>
<div className={`${styles["box"]} shadow h-100`}>
  <div className="d-flex">
    <div className="img pt-3 ms-4">
      <div className=" mt-2 me-4">
        <Image
          src="/images/mybillbook.png"
          alt="billbook"
          height="100"
          width="100"
          className="shadow"
        />
      </div>
      <p className={`${styles["box-p-font"]} pt-3`}>
        My Bill Book
      </p>
    </div>
    <div className="hr">
      <hr className={styles["vs-hr"]} />
    </div>
    <div>
      <p className={`${styles["vs-box"]} p-2`}>vs</p>
    </div>
    <div className="img pt-3">
      <div className=" mt-2 me-3">
        <Image
          src="/images/mybillbook.png"
          alt="billbook"
          height="100"
          width="100"
          className=" shadow "
        />
      </div>
      <p className={`${styles["box-p-font"]} pt-3`}>
        My Bill Book
      </p>
    </div>
  </div>
  <div className="text-center my-3">
    <Button size="sm" variant="primary" href="">
      Compare
    </Button>
  </div>
</div>
</Col>

<Col lg={3} className={styles["col-margin-mob"]}>
<div className={`${styles["box"]} shadow h-100`}>
  <div className="d-flex">
    <div className="img pt-3 ms-4">
      <div className=" mt-2 me-4">
        <Image
          src="/images/mybillbook.png"
          alt="billbook"
          height="100"
          width="100"
          className="shadow"
        />
      </div>
      <p className={`${styles["box-p-font"]} pt-3`}>
        My Bill Book
      </p>
    </div>
    <div className="hr">
      <hr className={styles["vs-hr"]} />
    </div>
    <div>
      <p className={`${styles["vs-box"]} p-2`}>vs</p>
    </div>
    <div className="img pt-3">
      <div className=" mt-2 me-3">
        <Image
          src="/images/mybillbook.png"
          alt="billbook"
          height="100"
          width="100"
          className=" shadow "
        />
      </div>
      <p className={`${styles["box-p-font"]} pt-3`}>
        My Bill Book
      </p>
    </div>
  </div>
  <div className="text-center my-3">
    <Button size="sm" variant="primary" href="">
      Compare
    </Button>
  </div>
</div>
</Col> */
}
