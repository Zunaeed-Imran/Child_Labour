import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


function FooterLogo() {
  return (
    <div>
      <div className="flex gap-3">
        <FaGoogle size={'1.5rem'} />
        <FaTwitter size={'1.5rem'} />
        <FaInstagram size={'1.5rem'} />
        <FaLinkedin size={'1.5rem'} />
      </div>
    </div>
  );
}

export default FooterLogo
