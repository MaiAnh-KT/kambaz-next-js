"use client";

import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find(a => a.id === aid);

  if (!assignment) {
    return <div className="p-4">Assignment not found.</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={assignment.title} />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3" controlId="wd-description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            defaultValue={assignment.description || "No description provided."}
          />
        </Form.Group>

        {/* Points and Assignment Group */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="wd-points">
              <Form.Label>Points</Form.Label>
              <Form.Control type="number" defaultValue={assignment.points || 100} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="wd-group">
              <Form.Label>Assignment Group</Form.Label>
              <Form.Select defaultValue={"ASSIGNMENTS"}>
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
              <Form.Select defaultValue={"PERCENTAGE"}>
                <option value="PERCENTAGE">Percentage</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="wd-submission-type">
              <Form.Label>Submission Type</Form.Label>
              <Form.Select defaultValue={"ONLINE"}>
                <option value="ONLINE">Online</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Online Entry Options */}
        <Form.Group className="mb-3">
          <Form.Label>Online Entry Options</Form.Label>
          <div>
            {["Text Entry", "Website URL", "Media Recordings", "Student Annotation", "File Upload"].map((opt, idx) => (
              <Form.Check
                key={idx}
                type="checkbox"
                id={`wd-option-${idx}`}
                label={opt}
              />
            ))}
          </div>
        </Form.Group>

        {/* Assign To */}
        <Form.Group className="mb-3" controlId="wd-assign-to">
          <Form.Label>Assign To</Form.Label>
          <Form.Control type="text" defaultValue={"Everyone"} />
        </Form.Group>

        {/* Due and Availability Dates */}
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="wd-due-date">
              <Form.Label>Due</Form.Label>
              <Form.Control type="date" defaultValue={assignment.dueDate || "2024-05-13"} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="wd-available-from">
              <Form.Label>Available From</Form.Label>
              <Form.Control type="date" defaultValue={assignment.availableFrom || "2024-05-06"} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="wd-available-until">
              <Form.Label>Available Until</Form.Label>
              <Form.Control type="date" defaultValue={assignment.availableTo || "2024-05-20"} />
            </Form.Group>
          </Col>
        </Row>

        {/* Action Buttons */}
        <div className="text-end">
          <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
            Cancel
          </Link>
          <Link href={`/Courses/${cid}/Assignments`} className="btn btn-danger">
            Save
          </Link>
        </div>
      </Form>
    </div>
  );
}
