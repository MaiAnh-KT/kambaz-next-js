"use client";

import { Form, Button, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={`A1 - ENV + HTML`} />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3" controlId="wd-description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            defaultValue="The assignment is available online. Submit a link to the landing page of"
          />
        </Form.Group>

        {/* Points and Assignment Group */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="wd-points">
              <Form.Label>Points</Form.Label>
              <Form.Control type="number" defaultValue={100} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="wd-group">
              <Form.Label>Assignment Group</Form.Label>
              <Form.Select defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Display Grade and Submission Type */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="wd-display-grade-as">
              <Form.Label>Display Grade As</Form.Label>
              <Form.Select defaultValue="PERCENTAGE">
                <option value="PERCENTAGE">Percentage</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="wd-submission-type">
              <Form.Label>Submission Type</Form.Label>
              <Form.Select defaultValue="ONLINE">
                <option value="ONLINE">Online</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Online Entry Options */}
        <Form.Group className="mb-3">
          <Form.Label>Online Entry Options</Form.Label>
          <div>
            <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
            <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
            <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
            <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
            <Form.Check type="checkbox" id="wd-file-upload" label="File Upload" />
          </div>
        </Form.Group>

        {/* Assign To */}
        <Form.Group className="mb-3" controlId="wd-assign-to">
          <Form.Label>Assign To</Form.Label>
          <Form.Control type="text" defaultValue="Everyone" />
        </Form.Group>

        {/* Due and Availability Dates */}
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="wd-due-date">
              <Form.Label>Due</Form.Label>
              <Form.Control type="date" defaultValue="2024-05-13" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="wd-available-from">
              <Form.Label>Available From</Form.Label>
              <Form.Control type="date" defaultValue="2024-05-06" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="wd-available-until">
              <Form.Label>Available Until</Form.Label>
              <Form.Control type="date" defaultValue="2024-05-06" />
            </Form.Group>
          </Col>
        </Row>

        {/* Action Buttons */}
        <div className="text-end">
          <Button variant="secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}
