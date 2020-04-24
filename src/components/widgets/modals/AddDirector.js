import React from "react";
import { Modal } from "react-bootstrap";
import "../../../assets/css/dashboard.css";
import DirectorForm from "../forms/Director_form";

const AddDirector = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="text-grey">Add a Director</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DirectorForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddDirector;
