"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  return (
    <div>
      {/* Module controls at the top */}
      <ModulesControls /><br /><br /><br />

      {/* Modules list */}
      <ListGroup className="rounded-0" id="wd-modules">
        {/* Module Week 1 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <span>
              <BsGripVertical className="me-2 fs-3" /> Week 1
            </span>
          </div>

          {/* Lessons within Week 1 */}
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES
              </span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> Introduction to the course
              </span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development
              </span>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Module Week 2 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <span>
              <BsGripVertical className="me-2 fs-3" /> Week 2
            </span>
          </div>

          {/* Lessons for Week 2 */}
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES
              </span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> Understand JavaScript fundamentals
              </span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> Learn about DOM manipulation
              </span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> READING
              </span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 3 - JavaScript Basics
              </span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 4 - Working with the DOM
              </span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> SLIDES
              </span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> JavaScript Fundamentals
              </span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> DOM Manipulation Examples
              </span>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> Event Handling in JavaScript
              </span>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Module Week 3 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <span>
              <BsGripVertical className="me-2 fs-3" /> Week 3
            </span>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
