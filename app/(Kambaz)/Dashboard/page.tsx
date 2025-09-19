import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link href="/Courses/2234" className="wd-dashboard-course-link">
                <Image src="/images/ios.jpg" width={200} height={150} />
                <div>
                <h5> CS2234 </h5>
                <p className="wd-dashboard-course-title">
                    IOS Mobile App Development
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/4444" className="wd-dashboard-course-link">
                <Image src="/images/uiux.jpg" width={200} height={150} />
                <div>
                <h5> CS4444 </h5>
                <p className="wd-dashboard-course-title">
                    UIUX Principles
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/5678" className="wd-dashboard-course-link">
                <Image src="/images/ibd.jpg" width={200} height={150} />
                <div>
                <h5> DE5678 </h5>
                <p className="wd-dashboard-course-title">
                    Identy and Brand Design
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/6678" className="wd-dashboard-course-link">
                <Image src="/images/interaction.jpg" width={200} height={150} />
                <div>
                <h5> DE6678 </h5>
                <p className="wd-dashboard-course-title">
                    Interaction Design
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/7778" className="wd-dashboard-course-link">
                <Image src="/images/experience.jpg" width={200} height={150} />
                <div>
                <h5> DE7778 </h5>
                <p className="wd-dashboard-course-title">
                    Experience Design
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/8888" className="wd-dashboard-course-link">
                <Image src="/images/xd.jpg" width={200} height={150} />
                <div>
                <h5> DE8888 </h5>
                <p className="wd-dashboard-course-title">
                    XR Design
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
      </div>
    </div>
);}
