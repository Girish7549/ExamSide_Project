"use client";
import React from "react";
import Link from "next/link";  // Use Next.js' Link component for routing

const TopNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          {/* Use Next.js Link component without the <a> tag */}
          <Link href="/" legacyBehavior>
            Home
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarText">
          {/* Add any other navbar content you need */}
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
