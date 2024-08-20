import { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import Link from "next/link";

const Scoringmodal = ({ show, handleClose }) => {

  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // size="sm"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          At Software Junction, our mission is to empower visitors and software
          companies with the most insightful, reliable, and transparent
          information available in the software marketplace. We understand that
          choosing the right software is a critical decision, whether you&#39;re
          a business owner seeking to optimize operations or a software company
          looking to showcase your product&#39;s strengths. To guide you through
          this decision-making process, we&#39;ve meticulously developed a
          comprehensive scoring methodology that evaluates software products on
          our platform through four key metrics: Review Rating Score, Product
          Page Score, Content Score, and Market Presence Score. These metrics,
          each contributing equally to the overall evaluation, ensure a balanced
          and thorough assessment of every software product listed on Software
          Junction.
          <Link href="/scoring-methodology" style={{color:"#f95738",fontWeight:"600"}}> View More...</Link>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Scoringmodal;
