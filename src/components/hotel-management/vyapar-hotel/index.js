import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FaPenToSquare, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Details from "./details";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "../vyapar-hotel/vya.module.scss";
import { useRouter } from "next/router";

const Index = () => {

const router = useRouter();

  const handleReviewClick = () => {
    const extractedSoftwareName = router.pathname.split("/")[1]; // Extract the softwareName from the URL
    const formattedSoftwareName = extractedSoftwareName
    .split('-') // Split the string by hyphens
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' '); // Join the words back with spaces
    // Redirect or perform other actions
    router.push(
      `/review?softwareName=${encodeURIComponent(formattedSoftwareName)}`
    );
  };

  return (
    <>
      <section className={styles["heading"]}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${styles["breadcr"]} `}>
                <ul>
                  <li>
                    {" "}
                    <Link href="/#">Home</Link>
                  </li>
                  &nbsp;
                  <span style={{ color: "#f95738 " }}>
                    <MdKeyboardDoubleArrowRight />
                  </span>
                  &nbsp;
                  <li>
                    <Link href="/hotel-management">
                      Hotel Management Software
                    </Link>
                  </li>
                  &nbsp;
                  <span style={{ color: "#f95738 " }}>
                    <MdKeyboardDoubleArrowRight />
                  </span>
                  &nbsp;
                  <li>
                    <Link href="">Vyapar</Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="d-flex">
                  <Image
                    src="/images/vyaparhotel.png"
                    alt="vyaparhotel"
                    width="150"
                    height="10"
                    className={`${styles["box-img"]} border bg-light p-4 rounded-3 shadow me-4`}
                  />
                  <div>
                    <h3 className="text-light">Vyapar</h3>
                    <h5 className="text-light">
                      Simplified hotel accounting software
                    </h5>
                    <span className="span-style">
                      0.0 <FaStar className="star-size" />
                    </span>
                    <div className="d-flex mt-3">
                      <Link href="" onClick={handleReviewClick}>
                        <p className="text-light">
                          <span style={{ color: "#f95738 " }}>
                            <FaPenToSquare />
                          </span>
                          &nbsp; Write a review
                        </p>
                      </Link>
                      <Link href="">
                        <p className="ms-4 text-light">
                          Visit Website &nbsp;
                          <span style={{ color: "#f95738 " }}>
                            <FaArrowUpRightFromSquare />
                          </span>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles["detail-bg"]} pb-5`}>
        <Details styles={styles} />
      </section>
    </>
  );
};

export default Index;
