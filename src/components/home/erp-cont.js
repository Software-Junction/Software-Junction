import React from 'react'
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";

const erpcont = ({ styles }) => {

  const cardData = [
    {
      badgeText: "10",
      imageSrc: "/images/horizon.png",
      imageAlt: "Horizon",
      headingText: "Horizon ERP"
    },
    {
      badgeText: "10",
      imageSrc: "/images/horizon.png",
      imageAlt: "Horizon",
      headingText: "Horizon ERP"
    },
    {
      badgeText: "10",
      imageSrc: "/images/horizon.png",
      imageAlt: "Horizon",
      headingText: "Horizon ERP"
    },
    {
      badgeText: "10",
      imageSrc: "/images/horizon.png",
      imageAlt: "Horizon",
      headingText: "Horizon ERP"
    },
    // Add more data objects as needed
  ];


  return (
    <>
        <Container className={styles['erp-container']}>
      <Row>
      {cardData.map((data, index) => (
                <Col lg={3} className={`${styles["col-mob"]} mb-3`} key={index}>
                  <div className={`${styles['card-flip']} justify-content-center `}>
                  <div
              className={` ${styles["card-flip-inner"]} box border shadow rounded-3  p-4 text-center d-flex justify-content-center bg-light`}
            >
              <div className={styles['card-front']}>
                  <div className={styles['badge']}>
                      <p className={`${styles['badge-cont']} badge rounded-pill`}>{data.badgeText}</p>
                    </div>
                    <div>
                      <Image
                        src={data.imageSrc}
                        alt={data.imageAlt}
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">{data.headingText}</h5>
                    <Button size="sm" variant="primary" className="w-100">
                      Free Demo
                    </Button>
                    </div>
                    <div className={styles['card-back']}>
                <p>back side</p>
              </div>
                  </div>
                  </div>
                </Col>
))}
                {/* <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
                  <div className="box border shadow rounded-3 p-4 text-center bg-light">
                  <div className={styles['badge']}>
                      <p className={`${styles['badge-cont']} badge rounded-pill`}>10</p>
                    </div>
                    <div>
                      <Image
                        src="/images/horizon.png"
                        alt="horizon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">Horizon ERP</h5>
                    <Button size="sm" variant="primary" className="w-100">
                      Free Demo
                    </Button>
                  </div>
                </Col>

                <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
                  <div className="box border shadow rounded-3 p-4 text-center bg-light">
                  <div className={styles['badge']}>
                      <p className={`${styles['badge-cont']} badge rounded-pill`}>10</p>
                    </div>
                    <div>
                      <Image
                        src="/images/horizon.png"
                        alt="horizon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">Horizon ERP</h5>
                    <Button size="sm" variant="primary" className="w-100">
                      Free Demo
                    </Button>
                  </div>
                </Col>

                <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
                  <div className="box border shadow rounded-3 p-4 text-center bg-light">
                  <div className={styles['badge']}>
                      <p className={`${styles['badge-cont']} badge rounded-pill`}>10</p>
                    </div>
                    <div>
                      <Image
                        src="/images/horizon.png"
                        alt="horizon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">Horizon ERP</h5>
                    <Button size="sm" variant="primary" className="w-100">
                      Free Demo
                    </Button>
                  </div>
                </Col>

                <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
                  <div className="box border shadow rounded-3 p-4 text-center bg-light">
                  <div className={styles['badge']}>
                      <p className={`${styles['badge-cont']} badge rounded-pill`}>10</p>
                    </div>
                    <div>
                      <Image
                        src="/images/horizon.png"
                        alt="horizon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">Horizon ERP</h5>
                    <Button size="sm" variant="primary" className="w-100">
                      Free Demo
                    </Button>
                  </div>
                </Col>

                <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
                  <div className="box border shadow rounded-3 p-4 text-center bg-light">
                  <div className={styles['badge']}>
                      <p className={`${styles['badge-cont']} badge rounded-pill`}>10</p>
                    </div>
                    <div>
                      <Image
                        src="/images/horizon.png"
                        alt="horizon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">Horizon ERP</h5>
                    <Button size="sm" variant="primary" className="w-100">
                      Free Demo
                    </Button>
                  </div>
                </Col>

                <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
                  <div className="box border shadow rounded-3 p-4 text-center bg-light">
                  <div className={styles['badge']}>
                      <p className={`${styles['badge-cont']} badge rounded-pill`}>10</p>
                    </div>
                    <div>
                      <Image
                        src="/images/horizon.png"
                        alt="horizon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">Horizon ERP</h5>
                    <Button size="sm" variant="primary" className="w-100">
                      Free Demo
                    </Button>
                  </div>
                </Col>

                <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
                  <div className="box border shadow rounded-3 p-4 text-center bg-light">
                  <div className={styles['badge']}>
                      <p className={`${styles['badge-cont']} badge rounded-pill`}>10</p>
                    </div>
                    <div>
                      <Image
                        src="/images/horizon.png"
                        alt="horizon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">Horizon ERP</h5>
                    <Button size="sm" variant="primary" className="w-100">
                      Free Demo
                    </Button>
                  </div>
                </Col> */}
              </Row>
              </Container>
    </>
  )
}

export default erpcont
