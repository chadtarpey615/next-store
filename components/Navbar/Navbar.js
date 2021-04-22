import React from 'react';
import Link from "next/link";
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link></li>
                <li><Link href="/new-item">Add Item</Link></li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;