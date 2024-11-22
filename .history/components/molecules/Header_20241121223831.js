import Image from "next/image";
import './header.style.css'; 

export default function Header() {
  return (
    <>
      <div className="header">
        <Image src="/AetherLogo.png" width={50} height={50} alt="" />

        <div className="textBox-left">
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

