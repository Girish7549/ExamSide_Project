"use client"
import React, { useState } from "react";
import { Navbar, Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { FaCaretDown } from "react-icons/fa";

const BottomNavBar = () => {
  const [activeCategories, setActiveCategories] = useState([]);

  // Categories and subcategories
  const categories = [
    {
      name: "Joint Entrance Examination",
      subcategories: ["JEE Main", "JEE Advanced", "Other Engineering Exams"],
    },
    {
      name: "Medical",
      subcategories: ["NEET", "AIIMS", "Other Medical Exams"],
    },
    {
      name: "Graduate Aptitude Test in Engineering",
      subcategories: ["GATE", "IITs", "NITs"],
    },
    {
      name: "Civil Services",
      subcategories: ["IAS", "IFS", "Other Government Exams"],
    },
    {
      name: "Defence",
      subcategories: ["NDA", "CDS", "Air Force"],
    },
    {
      name: "Staff Selection Commission",
      subcategories: ["SSC CGL", "SSC CHSL", "SSC JE"],
    },
    {
      name: "CBSE",
      subcategories: ["10th Class", "12th Class", "Other Exams"],
    },
  ];

  const toggleDropdown = (index) => {
    setActiveCategories((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <Navbar expand="lg" className="bottom-navbar custom-gradient p-3">
      <Nav className="ml-auto" navbar>
        {categories.map((category, index) => (
          <NavItem key={index} className="category-item">
            <Dropdown
              isOpen={activeCategories.includes(index)}
              toggle={() => toggleDropdown(index)}
              className="d-inline-block"
            >
              <DropdownToggle nav caret className="text-white">
                {category.name} <FaCaretDown />
              </DropdownToggle>
              <DropdownMenu className="mega-menu p-4 bg-light">
                <div className="mega-menu-content">
                  <h6 className="font-weight-bold">{category.name}</h6>
                  <ul className="list-unstyled">
                    {category.subcategories.map((sub, idx) => (
                      <DropdownItem key={idx} className="submenu-item">
                        {sub}
                      </DropdownItem>
                    ))}
                  </ul>
                </div>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
};

export default BottomNavBar;
