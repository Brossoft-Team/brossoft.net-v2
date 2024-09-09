import Link from "next/link";
import { FC } from "react";
import Image from 'next/image';

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem: FC<NavItemProps> = ({ href, text }) => {
    return (
      <Link
        href={href}
        className="relative group text-lg font-medium flex items-center overflow-hidden pr-3 text-secondaryColor"
      >
        <span className="absolute left-0 -translate-x-full group-hover:translate-x-0 transform transition-transform duration-300">
            <Image src="/right-arrow.svg" alt="arrow-icon" width={30} height={30} />
        </span>
        <span className="ml-5 group-hover:translate-x-2 transition-all duration-300">
            {text}
        </span>
      </Link>
    );
}

export default NavItem;