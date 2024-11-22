import Image from "next/image";
import './header.style.css'; 

export default function Header() {
  return (
    <>
      <div className="header">
        <Image className="logo" src="/AetherLogo.png" width={100} height={100} alt="" />

        <div className="nav-links">
        <p>Products</p>
        <p>Developers</p>
        <p>Blog</p>
        </div>

        <div className="btn-cont">
            <p>Login</p>
            <button>Get Started</button>
        </div>
      </div>
    </>
  );
}

