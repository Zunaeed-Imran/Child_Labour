import FooterLogo from "../smallComponents/FooterLogo";


function Footer() {
  return (
    <div className="">
      <footer className="footer bg-black text-white py-5">
        <aside className="pl-14 pt-5">
          <h1 className="text-3xl">Follow Us</h1>

          <p className="text-left">
            Working together to create a world free of child labour and <br />{' '}
            ensure a brighter future for every child.
          </p>

          <FooterLogo />
        </aside>

        <nav>
          <h6 className="py-10 text-xl font-bold text-white pb-6">
            Privicy Policy
          </h6>

          <a className="link link-hover">Home</a>

          <a className="link link-hover">Service</a>

          <a className="link link-hover">Contact</a>
        </nav>

        <nav>
          <h6 className="py-10 text-xl font-bold text-white pb-6">
            Terms of Service
          </h6>

          <a className="link link-hover">About</a>

          <a className="link link-hover">Cookie Policy</a>
        </nav>

        <nav>
          <h6 className="py-10 text-xl font-bold text-white pb-6">
            Accessibility
          </h6>

          <a className="link link-hover">Support Center</a>

          <a className="link link-hover">Feedback</a>
          
          <a className="link link-hover">Accesbility</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer
