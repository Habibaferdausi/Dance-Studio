import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";

const Nav = () => {
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img
            alt="Flowbite React Logo"
            className="mr-3 h-20 sm:h-28"
            src="https://i.ibb.co/PwPjsVY/AK-removebg-preview.png"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Dance Studio
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>

            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link href="#">Instructors</Navbar.Link>
          <Navbar.Link href="#">Classes</Navbar.Link>
          <Navbar.Link href="#">DashBoard</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>

          <Navbar.Link href="#">Login</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
