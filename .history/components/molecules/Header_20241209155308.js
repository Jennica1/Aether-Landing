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
          alt="Logo"
        />

        <div className="nav-links">
          <p>
            <Link href="https://aether-blog.vercel.app/blog.html">Blog</Link>
          </p>
          <p>
            <Link href="/investor">Work With Us</Link>
          </p>
          <p>About Us</p>
        </div>

        <div className="btn-cont">
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
}
