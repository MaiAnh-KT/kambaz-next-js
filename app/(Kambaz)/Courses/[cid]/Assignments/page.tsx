import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import Link from "next/link";

export default async function Assignments({ params, }: { params: Promise<{ cid: string }>; }) {
  const { cid } = await params;
  return (
    <div>
      <AssignmentControls /><br /><br /><br />

      <ListGroup className="rounded-0" id="wd-assignments">
        {/* Assignments Section */}
        <ListGroupItem className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <span className="fw-semibold">ASSIGNMENTS</span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <span className="border rounded-pill px-3 py-1 small text-dark">
              40% of Total
            </span>
            <span className="fs-5 fw-bold text-dark">+</span>
            <span className="fs-4 text-dark">⋮</span>
          </div>
        </div>

          {/* Assignment List */}
          <ListGroup className="rounded-0">

            {/* A1 */}
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-start">
            <Link href={`/Courses/${cid}/Assignments/A1`} className="flex-grow-1 text-decoration-none text-dark">
              <div className="d-flex">
                <BsGripVertical className="me-3 fs-3 text-secondary" />
                <div>
                  <div className="fw-semibold">A1</div>
                  <div className="text-secondary mt-1 small">
                    <span className="text-danger fw-normal">Multiple Modules</span> |
                    <span className="fw-semibold"> Not available until</span> May 6 at 12:00am |
                  </div>
                  <div className="text-secondary mt-1 small">
                    <span className="fw-semibold"> Due</span> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              </Link>
              <AssignmentControlButtons />
            </ListGroupItem>

            {/* A2 */}
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-start">
            <Link href={`/Courses/${cid}/Assignments/A2`} className="flex-grow-1 text-decoration-none text-dark">
              <div className="d-flex">
                <BsGripVertical className="me-3 fs-3 text-secondary" />
                <div>
                  <div className="fw-semibold">A2</div>
                  <div className="text-secondary mt-1 small">
                    <span className="text-danger fw-normal">Multiple Modules</span> |
                    <span className="fw-semibold"> Not available until</span> May 13 at 12:00am |
                  </div>
                  <div className="text-secondary mt-1 small">
                    <span className="fw-semibold"> Due</span> May 20 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              </Link>
              <AssignmentControlButtons />
            </ListGroupItem>

            {/* A3 */}
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-start">
              <div className="d-flex">
                <BsGripVertical className="me-3 fs-3 text-secondary" />
                <div>
                  <div className="fw-semibold">A3</div>
                  <div className="text-secondary mt-1 small">
                    <span className="text-danger fw-normal">Multiple Modules</span> |
                    <span className="fw-semibold"> Not available until</span> May 20 at 12:00am |
                  </div>
                  <div className="text-secondary mt-1 small">
                    <span className="fw-semibold"> Due</span> May 27 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <AssignmentControlButtons />
            </ListGroupItem>

          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}