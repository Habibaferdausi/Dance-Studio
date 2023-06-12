import React from "react";

const FooterSection = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img
          src="https://i.ibb.co/PwPjsVY/AK-removebg-preview.png"
          className="h-40"
        ></img>
        <h1 className="text-xl text-bold text-center">Dance Studio</h1>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Contact Us</span>
        <p>102/street NYC</p>
        <p>Mobile: +12346789</p>
        <span className="footer-title mt-5">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
