// import Link from "next/link";
// export default function Signup() {
//   return (
//     <div id="wd-signup-screen">
//       <h3>Sign up</h3>
//       <input placeholder="username" className="wd-username" /><br/>
//       <input placeholder="password" type="password" className="wd-password" /><br/>
//       <input placeholder="verify password"
//              type="password" className="wd-password-verify" /><br/>
//       <Link  href="Profile" > Sign up </Link><br />
//       <Link  href="Signin" > Sign in </Link>
//     </div>
// );}

// "use client";

import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <input
        id="wd-username"
        placeholder="username"
        className="wd-username mb-2 w-100"
      />
      <input
        id="wd-password"
        type="password"
        placeholder="password"
        className="wd-password mb-2 w-100"
      />
      <input
        id="wd-password-verify"
        type="password"
        placeholder="verify password"
        className="wd-password-verify mb-2 w-100"
      />
      <Link
        id="wd-signup-btn"
        href="/Account/Profile"
        className="btn btn-primary w-100 mb-2"
      >
        Sign up
      </Link>
      <Link id="wd-signin-link" href="/Account/Signin">
        Sign in
      </Link>
    </div>
  );
}
