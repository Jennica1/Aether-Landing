import Image from "next/image";
import "./header.style.css";
import Link from "next/link";

export default function Header2() {
  return (
    <>
      <div className="header">
        <Image
          className="logo"
          src="/AetherLogo.png"
          width={100}
          height={100}
          alt=""
        />
        <div className="nav-links">
          <p>Blog</p>

            <Link href="/investor">Work With Us</Link>
      
          {/* <Link href="/">Products</Link> */}
          <p>
          <Link href="/">About Us</Link>
          </p>
        </div>

        {/* <div className="btn-cont">
          <button>Get Started</button>
        </div> */}
      </div>
    </>
  );
}
