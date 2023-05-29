import React, { useState } from "react";
import { FaTh,FaUserAlt, FaShoppingBag, FaClipboardList, FaBars } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "/user",
      name: "Users",
      icon: <FaUserAlt />
    },
    {
      path: "/category",
      name: "Category",
      icon: <AiOutlineAppstore />
    },
    {
      path: "/order",
      name: "Orders",
      icon: <FaClipboardList />
    },
    {
      path: "/products",
      name: "Products",
      icon: <FaShoppingBag />
    }
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "43px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Admin</h1>
          <div style={{ marginLeft: isOpen ? "10px" : "0px" }} className="bars">
          <FaBars onClick={toggle} />
          </div>
        </div>

        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="Link-text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
