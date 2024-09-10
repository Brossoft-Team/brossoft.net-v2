import React from 'react';
import Image from 'next/image';
import NavItem from './nav-item';


export default function Header(): JSX.Element {
    return (
        <header className="w-full flex justify-between items-center px-4 py-1 bg-background font-semibold text-secondaryColor text-xl">
            <div className="header-items flex justify-between container mx-auto items-center">
                <Image src="/assets/brossoft_transparent.svg" alt="Brossoft Logo" width={100} height={100} />
                <ul className="flex gap-12 items-center">
                    <li>
                        <NavItem href="/" text="🏘 Home" />
                    </li>
                    <li>
                        <NavItem href="/projects" text="👨🏽‍💻 Projects" />
                    </li>
                    <li>
                        <NavItem href="/about-us" text="📚 About Us" />
                    </li>
                </ul>
            </div>
        </header>
    );
}