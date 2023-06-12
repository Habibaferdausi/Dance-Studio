import React from "react";
import { Footer } from "flowbite-react";
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              alt="Logo"
              href="https://flowbite.com"
              name="Dance Studio"
              src="https://i.ibb.co/PwPjsVY/AK-removebg-preview.png"
            />
          </div>
          <div className="grid grid-cols-3 gap-8 mt-4 ;g:mt-1 lg:grid-cols-4 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#"></Footer.Link>
                <Footer.Link href="#"></Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="Habiba Ferdausi Ritu™" href="#" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={FaFacebook} />
            <Footer.Icon href="#" icon={FaInstagram} />
            <Footer.Icon href="#" icon={FaTwitter} />
            <Footer.Icon href="#" icon={FaGithub} />
            <Footer.Icon href="#" icon={FaDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterSection;
