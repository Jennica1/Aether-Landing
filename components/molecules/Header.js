import Image from "next/image";
import "./header.style.css";
import Link from "next/link";

export default function Header() {
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
          <p>
            <Link href="/investor">Work With Us</Link>
          </p>
          <p>Contact Us</p>
        </div>

        <div className="btn-cont">
          <p>Login</p>
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
}
