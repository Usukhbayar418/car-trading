"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MenuItems, SpecialButtons } from "@/data/MenuItems";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Header() {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <nav
      style={{
        background: "#3a3f47",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
      }}
    >
      {/* Left Section */}
      <div style={{ display: "flex flex-row", alignItems: "center",  justifyContent: "center", gap: "20px" }}>
        {/* Menu Button */}
        <button
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
          className="flex flex-row items-center"
        >
          <HiMenuAlt3 /> Menu
        </button>

        {/* Logo */}
        <Link
          href="/"
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          BOXCARS
        </Link>
      </div>

      {/* Center Section: Menu Items */}
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {MenuItems.map((item, index) => (
          <li key={index} style={{ position: "relative" }}>
            {/* Main Menu Button */}
            <button
              onClick={() => toggleDropdown(index)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
                textDecoration: "none",
              }}
              className="flex flex-row items-center"
            >
              {item.name} {item.subMenu.length > 0 && <IoMdArrowDropdown />}
            </button>

            {/* Dropdown Menu */}
            {openDropdown === index && item.subMenu.length > 0 && (
              <ul
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "white",
                  listStyle: "none",
                  padding: "10px",
                  margin: 0,
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  zIndex: 10,
                }}
              >
                {item.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex} style={{ padding: "5px 0" }}>
                    <Link
                      href={`/${subItem.toLowerCase().replace(" ", "-")}`}
                      style={{ color: "#333", textDecoration: "none" }}
                    >
                      {subItem}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Right Section: Special Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {SpecialButtons.map((button, index) => (
          <Link
            key={index}
            href={button.link}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: button.isPrimary ? "#fff" : "#ccc",
              background: button.isPrimary ? "transparent" : "none",
              border: button.isPrimary ? "1px solid white" : "none",
              padding: button.isPrimary ? "5px 10px" : "none",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: button.isPrimary ? "bold" : "normal",
            }}
          >
            {button.icon && button.icon}
            {button.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

