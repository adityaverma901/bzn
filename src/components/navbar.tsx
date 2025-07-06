// 'use client'
// import React, { useState, useEffect } from 'react';
// import { ShoppingBag, Menu, X, Search, User, Heart } from 'lucide-react';

// export default function Navbar  ()  {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [cartCount, setCartCount] = useState(3);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'SALE', href: '/sale', highlight: true },
//     { name: 'SHOP', href: '/shop' },
//     { name: 'OUR STORY', href: '/story' },
//     { name: 'CUSTOM', href: '/custom' },
//     { name: 'BLOG', href: '/blog' }
//   ];

//   const rightNavItems = [
//     { name: 'FAQ', href: '/faq', highlight: false },
//     { name: 'CONTACT', href: '/contact', highlight: false }
//   ];

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-primary '
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
          
//           {/* Left Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className={`relative text-sm font-montserrat tracking-wide transition-all duration-300 hover:text-rose-600 group ${
//                   item.highlight 
//                     ? 'text-rose-600 font-semibold' 
//                     : 'text-gray-700 hover:text-gray-900'
//                 }`}
//               >
//                 {item.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             ))}
//           </div>

//           {/* Logo - Fixed */}
//           <div className="flex-shrink-0">
//             <a href="/" className="flex items-center space-x-2">
              
//               <div className="flex items-center space-x-1">
//                 {/* <div className="text-black text-2xl font-serif italic font-bold">
//                   Shirté
//                 </div>
//                 <div className="text-xl text-gray-600">
//                   | कपास
//                 </div> */}
//                 <div className="font-great-vibes font-bold text-[#7b4019fc]  text-5xl pr-2">
//                      Shirté 
//                  </div>
//                  <div className="font-amita  text-[#7b4019fc] text-4xl">
//                       | कपास
//                  </div>
//               </div>
//             </a>
//           </div>

//           {/* Right Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {rightNavItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="relative text-sm font-medium text-gray-700 tracking-wide transition-all duration-300 hover:text-gray-900 group"
//               >
//                 {item.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             ))}
            
//             {/* Action Icons */}
//             <div className="flex items-center space-x-4 ml-6">
//               <button className="p-2 text-gray-600 hover:text-rose-600 transition-colors duration-200">
//                 <Search size={20} />
//               </button>
//               <button className="p-2 text-gray-600 hover:text-rose-600 transition-colors duration-200">
//                 <Heart size={20} />
//               </button>
//               <button className="p-2 text-gray-600 hover:text-rose-600 transition-colors duration-200">
//                 <User size={20} />
//               </button>
//               <button className="relative p-2 text-gray-600 hover:text-rose-600 transition-colors duration-200">
//                 <ShoppingBag size={20} />
//                 {cartCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
//                     {cartCount}
//                   </span>
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden flex items-center space-x-4">
//             <button className="p-2 text-gray-600 hover:text-rose-600 transition-colors duration-200">
//               <Search size={20} />
//             </button>
//             <button className="relative p-2 text-gray-600 hover:text-rose-600 transition-colors duration-200">
//               <ShoppingBag size={20} />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
//                   {cartCount}
//                 </span>
//               )}
//             </button>
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 text-gray-600 hover:text-rose-600 transition-colors duration-200"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`lg:hidden transition-all duration-300 ease-in-out ${
//         isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//       } overflow-hidden bg-white border-t border-gray-100`}>
//         <div className="px-4 py-6 space-y-4">
//           {[...navItems, ...rightNavItems].map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className={`block text-base font-medium transition-colors duration-200 ${
//                 item.highlight 
//                   ? 'text-rose-600' 
//                   : 'text-gray-700 hover:text-rose-600'
//               }`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {item.name}
//             </a>
//           ))}
//           <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
//             <button className="p-2 text-gray-600 hover:text-rose-600 transition-colors duration-200">
//               <Heart size={20} />
//             </button>
//             <button className="p-2 text-gray-600 hover:text-rose-600 transition-colors duration-200">
//               <User size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };


'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-amber-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <Link href="/" className="flex items-center">
           <img src="./logomain.png" alt="" height={100} width={100}/>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/sale" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm tracking-wide">
              SALE
            </Link>
            <Link href="/shop" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm tracking-wide">
              SHOP
            </Link>
            <Link href="/our-story" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm tracking-wide">
              OUR STORY
            </Link>
            <Link href="/customs" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm tracking-wide">
              CUSTOMS
            </Link>
            <Link href="/blog" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm tracking-wide">
              BLOG
            </Link>
          </div>

          {/* Right Side Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/faq" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm tracking-wide">
              FAQ
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm tracking-wide">
              CONTACT
            </Link>
            <Link href="/cart" className="flex items-center text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm tracking-wide">
              <ShoppingCart className="w-4 h-4 mr-1" />
              MY CART
              <span className="ml-2 bg-white text-blue-600 rounded-full text-xs px-2 py-1 font-semibold">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white hover:text-blue-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-600 border-t border-blue-500">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/sale" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md text-sm font-medium tracking-wide">
                SALE
              </Link>
              <Link href="/shop" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md text-sm font-medium tracking-wide">
                SHOP
              </Link>
              <Link href="/our-story" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md text-sm font-medium tracking-wide">
                OUR STORY
              </Link>
              <Link href="/customs" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md text-sm font-medium tracking-wide">
                CUSTOMS
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md text-sm font-medium tracking-wide">
                BLOG
              </Link>
              <div className="border-t border-blue-500 pt-2">
                <Link href="/faq" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md text-sm font-medium tracking-wide">
                  FAQ
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md text-sm font-medium tracking-wide">
                  CONTACT
                </Link>
                <Link href="/cart" className="flex items-center px-3 py-2 text-white hover:bg-blue-700 rounded-md text-sm font-medium tracking-wide">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  MY CART
                  <span className="ml-2 bg-white text-blue-600 rounded-full text-xs px-2 py-1 font-semibold">
                    0
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;