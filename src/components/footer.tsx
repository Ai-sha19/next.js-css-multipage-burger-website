
import Image from 'next/image';
import "../style/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <Image
          src="/icon.png"
          alt="logo"
          width={150}
          height={150}
          className="logo"
        />
        <div className="verticalLine"></div>
        <span className="text">© All rights reserved 2024</span>
      </div>
      <div className="footer-right">
        <div className="contact-info">
          <p>Email: contact@foodieswebsite.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
    </footer>
  );
}
