import React from "react";
import { IoIosVideocam } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link as LinkScroll } from "react-scroll";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between py-5 px-10">
      <section>
        <div className="flex flex-rpw gap-2 items-center">
          <IoIosVideocam className="text-2xl text-blue" />
          <h1 className="text-sm font-bold font-sans">Roomify</h1>
        </div>
        <div>
          <p className="text-xs text-gray font-bold font-sans pt-2">
            Experience Effective Collaboration <br /> Enjoy Ultimate Video
            Meeting App
          </p>
        </div>
      </section>
      <section>
        <ul className="basis-1/2 flex items-center justify-center gap-4">
          <LinkScroll
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={1000}
          >
            <li className="text-sm font-bold font-sans cursor-pointer hover:text-blue active:text-blue">
              Home
            </li>
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={1000}
          >
            <li className="text-sm font-bold font-sans cursor-pointer hover:text-blue active:text-blue">
              Features
            </li>
          </LinkScroll>
        </ul>
        <div className="flex flex-row gap-3 items-center">
          <p className="text-xs text-gray font-bold font-sans pt-2">
            Follow Us
          </p>
          <IoLogoFacebook className="text-xl text-dark-blue" />
          <FaInstagram className="text-xl" />
          <FaXTwitter className="text-xl" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
