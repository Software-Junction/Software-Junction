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
    <Container className={styles["parent-container"]}>
      <Row className="justify-content-center pb-5">
        <Col lg={12}>
          <h1 className="text-center pt-5 ">
          Discover, Compare, and Choose the Right Business Software on Techtraverse
          </h1>
          <h5 className="text-center py-4 ">
          Quit wasting time with endless vendor calls, With Techtraverse you can thoroughly explore and evaluate software options, saving time and ensuring you make the best choice for your business.
          </h5>
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
