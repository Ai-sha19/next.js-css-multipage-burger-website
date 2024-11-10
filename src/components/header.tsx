"use client"

import Link from "next/link";
import "../style/header.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo-img-name">

                <Image
                    src="/icon.png"
                    alt="logo"
                    width={150}
                    height={150}
                    className="logo"
                />
                <span>FOOdies</span>
            </div>
            <nav className="nav">
                {/* Hamburger icon for small screen */}
                <button
                    className="menuIcon"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>

                {/* Navigation links */}
                <ul className={`navBar ${menuOpen ? "active" : ""}`}>
                    <li className="li">
                        <Link className="link" href="/">Home</Link> </li>
                    <li className="li">
                        <Link className="link" href="/about">About</Link> </li>
                    <li>
                        <a href="/contact"  rel="noopener noreferrer" className="contactLink">
                            <button className="btn1">Contact

                            </button>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
