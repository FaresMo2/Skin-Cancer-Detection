import { Link } from "react-router-dom";
import FooterIcons from "./FooterIcons";

function Footer() {
  return (
    <footer className="relative mt-36 px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug bluegray900 mb-4">
              Skin Cancer Detection
            </h4>
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-register lg:w-2/5">
              Easy to test your health now with SkinSafe, Start now.
            </p>
            <FooterIcons />
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            <div>
              <p className="antialiased font-sans text-sm leading-normal text-blue-gray-900 mb-2 block font-medium uppercase">
                useful links
              </p>
              <ul className="mt-3">
                <li>
                  <Link
                    to="/about"
                    className="antialiased font-sans text-sm leading-normal mb-2 block font-normal text-register hover:text-blue-gray-700"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://github.com/FaresMo2"
                    target="_blank"
                    rel="noreferrer"
                    className="antialiased font-sans text-sm leading-normal mb-2 block font-normal text-register hover:text-blue-gray-700"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <a
                    href="#uploadImage"
                    className="antialiased font-sans text-sm leading-normal mb-2 block font-normal text-register hover:text-blue-gray-700"
                  >
                    Try Now
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="antialiased font-sans text-sm leading-normal text-blue-gray-900 mb-2 block font-medium uppercase">
                other resources
              </p>
              <ul className="mt-3">
                <li>
                  <Link
                    to="/profile"
                    target="_blank"
                    rel="noreferrer"
                    className="antialiased font-sans text-sm leading-normal mb-2 block font-normal text-register hover:text-blue-gray-700"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    target="_blank"
                    rel="noreferrer"
                    className="antialiased font-sans text-sm leading-normal mb-2 block font-normal text-register hover:text-blue-gray-700"
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <a
                    href="#contact"
                    rel="noreferrer"
                    className="antialiased font-sans text-sm leading-normal mb-2 block font-normal text-register hover:text-blue-gray-700"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <p className="block antialiased font-sans text-sm leading-normal font-lg text-register">
              Copyright © 2024 Modern Academy by{" "}
              <Link
                href="#"
                target="_blank"
                className="text-register transition-colors hover:text-blue-500"
              >
                Fares
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
