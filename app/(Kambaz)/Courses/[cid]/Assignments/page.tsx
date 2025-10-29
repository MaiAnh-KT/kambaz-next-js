"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import Link from "next/link";
import * as db from "../../../Database";
import { useParams } from "next/navigation";

export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = db.assignments.filter(a => a.course === cid);

  return (
    <div>
      <AssignmentControls /><br /><br /><br />

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <span className="fw-semibold">ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="border rounded-pill px-3 py-1 small text-dark">
                {courseAssignments.length * 10}% of Total
              </span>
              <span className="fs-5 fw-bold text-dark">+</span>
              <span className="fs-4 text-dark">⋮</span>
            </div>
          </div>

          <ListGroup className="rounded-0">
            {courseAssignments.map((assignment) => (
              <ListGroupItem
                key={assignment.id}
                className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-start"
              >
                <Link
                  href={`/Courses/${cid}/Assignments/${assignment.id}`}
                  className="flex-grow-1 text-decoration-none text-dark"
                >
                  <div className="d-flex">
                    <BsGripVertical className="me-3 fs-3 text-secondary" />
                    <div>
                      <div className="fw-semibold">{assignment.title}</div>
                      <div className="text-secondary mt-1 small">
                        <span className="text-danger fw-normal">Multiple Modules</span> |
                        <span className="fw-semibold"> Not available until</span> {assignment.availableFrom}
                      </div>
                      <div className="text-secondary mt-1 small">
                        <span className="fw-semibold"> Due</span> {assignment.availableTo} | {assignment.points} pts
                      </div>
                    </div>
                  </div>
                </Link>
                <AssignmentControlButtons />
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
