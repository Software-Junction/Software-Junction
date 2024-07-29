import React, { useState } from "react";
import Image from "next/image";
// import styles from "./home.module.scss";

import {
    Container,
    Row,
    Col,
    Button,
    Form,
    InputGroup,
  } from "react-bootstrap";
import pagesData from './cat-pages-json';

const HomeBanners = ({styles}) => {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  //   const results = pagesData.filter((software) =>
  //     software.name.toLowerCase().startsWith(query.toLowerCase())
  //   );
  //   setSearchResults(results);
  // };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = pagesData.filter((software) =>
    software.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const handleSoftwareClick = (pageLink) => {
    window.location.href = pageLink;
  };

  return (
    <section className={styles["home-slidebanner"]}>
    <Container>
      <Row className="justify-content-center mb-5">
        <Col lg={12}>
          <h1 className="text-center mt-5 fw-bold text-secondary">
          Welcome Aboard Software Junction!
          </h1>
          <h3 className="text-center my-4 fw-bold text-secondary">Welcome to Software Junction, where we invite you to explore, experience, and elevate your digital journey.</h3>
        </Col>
        <Col lg={6}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search for Software, Categories"
              aria-label="Search"
              aria-describedby="basic-addon2"
              className="py-2"
              value={searchQuery}
                onChange={handleSearch}
            />
            <Button variant="outline-secondary" id="button-addon2">
              <Image
                src="/images/magnifying-glass.png"
                alt="search"
                height="20"
                width="20"
              />
            </Button>
          </InputGroup>
          {searchQuery && (
              <div className={`${styles['search-box']} box shadow p-4 rounded-3`}>
                {filteredData.length > 0 ? (
                  filteredData.map((software) => (
                    <div key={software.name} onClick={() => handleSoftwareClick(software.pageLink)} className={`${styles['search-txt-clr']} mb-3`}>
                      {software.name}
                    </div>
                  ))
                ) : (
                  <div>No results found.</div>
                )}
              </div>
            )}
        </Col>
      </Row>
    </Container>
  </section>
  );
};

export default HomeBanners;
