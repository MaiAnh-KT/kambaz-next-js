import Link from "next/link";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <ListGroup variant="flush" className="wd">

        <ListGroupItem className="p-0 border-0 active">
          <Link href="/Account/Signin" passHref>
            <Button
              variant="light"
              className="w-100 text-start border-0 rounded-0 wd-account-button"
              id="wd-account-signin-link"
            >
              Sign in
            </Button>
          </Link>
        </ListGroupItem>

        <ListGroupItem className="p-0 border-0">
          <Link href="/Account/Signup" passHref>
            <Button
              variant="light"
              className="w-100 text-start border-0 rounded-0 wd-account-button"
              id="wd-account-signup-link"
            >
              Sign up
            </Button>
          </Link>
        </ListGroupItem>

        <ListGroupItem className="p-0 border-0">
          <Link href="/Account/Profile" passHref>
            <Button
              variant="light"
              className="w-100 text-start border-0 rounded-0 wd-account-button"
              id="wd-account-profile-link"
            >
              Profile
            </Button>
          </Link>
        </ListGroupItem>

      </ListGroup>
    </div>
  );
}