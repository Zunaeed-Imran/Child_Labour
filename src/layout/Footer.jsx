import FooterLogo from "../smallComponents/FooterLogo";


function Footer() {
  return (
    <div className="">
      <footer className="footer bg-black text-white py-5">
        <aside className="pl-14 pt-5">
          <h1 className="text-3xl">Follow Us</h1>
          <FooterLogo />
        </aside>
        <nav>
          <h6 className="py-10 text-xl font-bold text-white pb-6">About</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="py-10 text-xl font-bold text-white pb-6">Company</h6>
          <a className="link link-hover">Why Car Doctor</a>
          <a className="link link-hover">About</a>
        </nav>
        <nav>
          <h6 className="py-10 text-xl font-bold text-white pb-6">Support</h6>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accesbility</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer
