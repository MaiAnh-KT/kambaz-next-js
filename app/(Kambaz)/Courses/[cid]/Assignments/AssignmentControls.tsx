"use client";

import { Button, Form, InputGroup } from "react-bootstrap";
import { FaPlus, FaSearch } from "react-icons/fa";

export default function AssignmentControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap mb-4">
      {/* Buttons: +Group and +Assignment*/}
      <Button
        variant="danger"
        size="lg"
        className="me-2 float-end"
        id="wd-add-assignment-btn"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="me-3 float-end"
        id="wd-add-group-btn"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>

      {/* Search bar */}
      <div className="float-start" style={{ maxWidth: "300px" }}>
        <InputGroup size="lg">
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <Form.Control
            id="wd-search-assignment"
            placeholder="Search..."
            aria-label="Search for Assignments"
          />
        </InputGroup>
      </div>
    </div>
  );
}