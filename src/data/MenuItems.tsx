"use client";
import React from "react";
import { FaUser } from "react-icons/fa";

export const MenuItems = [
  { name: "Home", link: "/", subMenu: [] },
  { name: "Listings", link: "/listings", subMenu: ["For Sale", "For Rent"] },
  { name: "Blog", link: "/blog", subMenu: ["Latest Posts", "Categories"] },
  { name: "Pages", link: "/pages", subMenu: ["FAQ", "Pricing"] },
  { name: "About", link: "/about", subMenu: [] },
  { name: "Contact", link: "/contact", subMenu: [] },
];

export const SpecialButtons = [
  {
    label: "Sign in",
    icon: <FaUser />,
    link: "/signin",
  },
  {
    label: "Submit Listing",
    link: "/submit",
    isPrimary: true, 
  },
];