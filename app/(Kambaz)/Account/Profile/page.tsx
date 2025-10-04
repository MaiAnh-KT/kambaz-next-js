import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>

      <input
        defaultValue="alice"
        placeholder="username"
        className="wd-username mb-2 w-100"
      />
      <input
        defaultValue="123"
        type="password"
        placeholder="password"
        className="wd-password mb-2 w-100"
      />
      <input
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
        className="mb-2 w-100"
      />
      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className="mb-2 w-100"
      />
      <input
        defaultValue="2000-01-01"
        type="date"
        id="wd-dob"
        className="mb-2 w-100"
      />
      <input
        defaultValue="alice@wonderland"
        type="email"
        id="wd-email"
        className="mb-2 w-100"
      />
      <select defaultValue="FACULTY" id="wd-role" className="mb-2 w-100">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link
        id="wd-signout-link"
        href="/Account/Signin"
        className="btn btn-danger w-100"
      >
        Sign out
      </Link>
    </div>
  );
}