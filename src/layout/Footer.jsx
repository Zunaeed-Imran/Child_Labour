import FooterLogo from "../smallComponents/FooterLogo";


function Footer() {
  return (
    <div>
      <footer className="footer bg-black text-white p-10">
        <aside>
          <p className="text-left leading-relaxed pb-5">
            Edwin Diaz is a software and web <br />
            technologies engineer, a life coach <br />
            trainer who is also a serial .
          </p>
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
