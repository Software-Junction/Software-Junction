import { useState } from "react";
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
        <Modal.Header closeButton>Techscout Scoring Methedology</Modal.Header>
        <Modal.Body>
          These metrics, each contributing equally to the overall evaluation,
          ensure a balanced and thorough assessment of every software product
          listed on TechScout.
          <Link
            href="/scoring-methodology"
            style={{ color: "#f95738", fontWeight: "600" }}
          >
            View More...
          </Link>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Scoringmodal;
