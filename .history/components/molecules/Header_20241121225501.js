import Image from "next/image";
import './header.style.css'; 

export default function Header() {
  return (
    <>
      <div className="header">

        <div className="textBox-left">
          <Image src="/AetherLogo.png" width={100} height={80} alt="" />
          <p>Products</p>
          <p>Developers</p>
          <p>Blog</p>
        </div>
        
        <div className="textBox-right">
          <p>Login</p>
          <button className="start-btn">Get Started</button>
        </div>
      </div>
    </>
  );
}

