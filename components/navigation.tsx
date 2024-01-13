// components/Navigation.tsx
"use client";

import React from 'react';
import Link from 'next/link';

type NavigationProps = {
  activePage: string;
};

const Navigation: React.FC<NavigationProps> = ({ activePage }) => {
  const links = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'CV', path: '/cv' },
    { title: 'Contact me', path: '/contact' }
  ];

  return (
    <nav className="flex space-x-4">
      {links.map((link, index) => (
        <Link key={index} href={link.path} className={activePage === link.path ? 'active font-bold' : 'text-sky-400 underline hover:text-sky-800 underline'}>
            {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
