const Footer = () => {
  return (
    <footer className="bg-black flex p-11 lg:flex-row flex-col items-center justify-between lg:items-start">
      <a href="/" className="w-fit">
        <img src="\logo-full.png" className="w-36" alt="HOI logo" />
      </a>
      <div className="nav-container flex flex-col justify-center items-center mt-6 lg:mt-0 lg:items-start">
        <h3 className="text-slate-400 pb-3">Subscribe to our newsletter:</h3>
        <a
          href="#"
          className="bg-main-400 inline-block text-white-400 hover:bg-red-800 p-3"
        >
          SUBSCRIBE
        </a>

        <div className="footer-nav flex justify-between">
          <ul className="text-white-400 mt-20 mr-20">
            <li className="">
              <p className="text-slate-400 text-sm">Site Nav: </p>
            </li>
            <li className="">
              <a href="#" className="hover:text-main-400">
                Contact Us
              </a>
            </li>

            <li className="">
              <a href="#" className="hover:text-main-400">
                Blogs
              </a>
            </li>

            <li className="">
              <a href="#" className="hover:text-main-400">
                About Founder
              </a>
            </li>
          </ul>

          <ul className="text-white-400 mt-20">
            <li className="">
              <p className="text-slate-400 text-sm">Follow us: </p>
            </li>
            <li className="">
              <a
                href="https://www.instagram.com/houseofinnovation_hoi/?hl=en"
                target="_blank"
                className="hover:text-main-400"
              >
                Instagram
              </a>
            </li>

            <li className="">
              <a
                href="https://twitter.com/hoi_innovation"
                target="_blank"
                className="hover:text-main-400"
              >
                Twitter
              </a>
            </li>

            <li className="">
              <a
                href="https://www.linkedin.com/in/houseofinnovation/"
                target="_blank"
                className="hover:text-main-400"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="contactUS lg:self-center lg:mt-0 mt-10">
        <p className="text-slate-400 mb-1 lg:mb-4">03.bewithak@gmail.com</p>
        <p className="text-slate-400 w-60">
          varanasi cant, uttar pradesh 221002
        </p>
        <p className="text-slate-600 text-xs mt-8 lg:self-end ">
          Copyright © 2010 - 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
