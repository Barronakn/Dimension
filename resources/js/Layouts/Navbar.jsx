import React from "react";

const Navbar = () => {
    return (
        <nav className="max-w-[495px] mx-auto">
            <ul className="flex flex-col md:flex-row items-center border border-white rounded-md">
                <li className="nav-fill">
                    <a className="navbar-link" href="/intro">
                        Intro
                    </a>
                </li>
                <li className="nav-fill">
                    <a className="navbar-link" href="/work">
                        Work
                    </a>
                </li>
                <li className="nav-fill">
                    <a className="navbar-link" href="/about">
                        About
                    </a>
                </li>
                <li>
                    <a className="navbar-link" href="/contact">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
