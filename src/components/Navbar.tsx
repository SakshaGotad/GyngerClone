'use client';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
   
      <div className="container mx-auto mt-10 flex justify-between items-center w-[70vw] border-2 bg-#1ce1f742  text-black rounded-full p-10">
        <div className="text-xl px-3 font-bold">
          <Link href="/">MyBlog</Link>
        </div>
        <ul className="hidden md:flex gap-6 font-medium px-2">
          <li><Link href="/" className="hover:text-cyan-400">For Buyers</Link></li>
          <li><Link href="/about" className="hover:text-cyan-400">For Sellers</Link></li>
          <li><Link href="/blog" className="hover:text-cyan-400">Products</Link></li>
          <li><Link href="/contact" className="hover:text-cyan-400">Resources</Link></li>
          <li><Link href="/contact" className="hover:text-cyan-400">Company</Link></li>
        </ul>
      </div>
    
  );
};

export default Navbar;
