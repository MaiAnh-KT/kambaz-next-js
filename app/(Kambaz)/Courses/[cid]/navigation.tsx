import Link from "next/link";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation">
      <ListGroup variant="flush" className="wd">

        <ListGroupItem className="p-0 border-0 active">
          <Link href="/Courses/1234/Home" passHref>
            <Button
              variant="light"
              className="w-100 text-start border-0 rounded-0 wd-course-button"
              id="wd-course-home-link"
            >
              Home
            </Button>
          </Link>
        </ListGroupItem>

        <ListGroupItem className="p-0 border-0">
          <Link href="/Courses/1234/Modules" passHref>
            <Button
              variant="light"
              className="w-100 text-start border-0 rounded-0 wd-course-button"
              id="wd-course-modules-link"
            >
              Modules
            </Button>
          </Link>
        </ListGroupItem>

        <ListGroupItem className="p-0 border-0">
          <Link href="/Courses/1234/Piazza" passHref>
            <Button
              variant="light"
              className="w-100 text-start border-0 rounded-0 wd-course-button"
              id="wd-course-piazza-link"
            >
              Piazza
            </Button>
          </Link>
        </ListGroupItem>

        <ListGroupItem className="p-0 border-0">
          <Link href="/Courses/1234/Zoom" passHref>
            <Button
              variant="light"
              className="w-100 text-start border-0 rounded-0 wd-course-button"
              id="wd-course-zoom-link"
            >
              Zoom
            </Button>
          </Link>
        </ListGroupItem>

        <ListGroupItem className="p-0 border-0">
          <Link href="/Courses/1234/Assignments" passHref>
            <Button
              variant="light"
              className="w-100 text-start border-0 rounded-0 wd-course-button"
              id="wd-course-assignments-link"
            >
              Assignments
            </Button>
          </Link>
        </ListGroupItem>

        <ListGroupItem className="p-0 border-0">
          <Link href="/Courses/1234/Quizzes" passHref>
            <Button
              variant="light"
              className="w-100 text-start border-0 rounded-0 wd-course-button"
              id="wd-course-quizzes-link"
            >
              Quizzes
            </Button>
          </Link>
        </ListGroupItem>

        <ListGroupItem className="p-0 border-0">
          <Link href="/Courses/1234/Grades" passHref>
            <Button
              variant="light"
              className="w-100 text-start border-0 rounded-0 wd-course-button"
              id="wd-course-grades-link"
            >
              Grades
            </Button>
          </Link>
        </ListGroupItem>

        <ListGroupItem className="p-0 border-0">
          <Link href="/Courses/1234/People" passHref>
            <Button
              variant="light"
              className="w-100 text-start border-0 rounded-0 wd-course-button"
              id="wd-course-people-link"
            >
              People
            </Button>
          </Link>
        </ListGroupItem>

      </ListGroup>
    </div>
  );
}
