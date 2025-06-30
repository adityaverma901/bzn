// 'use client';

// import React, { useState, useEffect } from 'react';
// import { ArrowRight, Star, Sparkles, Crown, Award, Menu, X, Heart, Feather } from 'lucide-react';

// const ShirtLandingPage = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % 3);
//     }, 5000);
    
//     return () => {
//       clearInterval(interval);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const shirtStyles = [
//     { name: "Heritage Classic", desc: "Timeless elegance with delicate embroidery", price: "₹1,299" },
//     { name: "Royal Minimalist", desc: "Understated luxury with premium finish", price: "₹1,499" },
//     { name: "Artisan Special", desc: "Hand-crafted perfection in every stitch", price: "₹1,699" }
//   ];

//   const features = [
//     { icon: <Feather className="w-6 h-6" />, title: "Hand Embroidered", desc: "Each piece crafted with meticulous attention" },
//     { icon: <Crown className="w-6 h-6" />, title: "Premium Cotton", desc: "Sourced from the finest cotton fields" },
//     { icon: <Award className="w-6 h-6" />, title: "Artisan Quality", desc: "Traditional techniques, modern comfort" },
//     { icon: <Heart className="w-6 h-6" />, title: "Made with Love", desc: "Every shirt tells a story of craftsmanship" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden font-serif">
//       {/* Navigation */}
//       <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrollY > 50 ? 'bg-amber-50/95 backdrop-blur-xl shadow-xl border-b border-amber-200/50' : 'bg-transparent'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16 md:h-20">
//             <div className={`transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
//               <div className="text-2xl md:text-3xl font-bold text-amber-900">
//                 <span className="bg-primary text-amber-50 px-3 py-1 rounded-lg shadow-lg">Shirté</span>
//                 <span className="ml-2 text-amber-800 font-light">| कपास</span>
//               </div>
//             </div>
            
//             <div className="hidden md:flex space-x-8 lg:space-x-12">
//               {['Collection', 'Heritage', 'Craft', 'Contact'].map((item, i) => (
//                 <button key={item} className={`text-amber-800 hover:text-primary transition-all duration-300 font-medium text-lg relative group ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`} style={{transitionDelay: `${i * 100}ms`}}>
//                   {item}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
//                 </button>
//               ))}
//             </div>
            
//             <button 
//               className="md:hidden p-2 rounded-lg hover:bg-amber-100 transition-colors text-amber-800"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
        
//         {/* Mobile Menu */}
//         <div className={`md:hidden transition-all duration-500 ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-amber-50/98 backdrop-blur-xl border-b border-amber-200/30`}>
//           <div className="px-4 py-4 space-y-4">
//             {['Collection', 'Heritage', 'Craft', 'Contact'].map((item) => (
//               <button key={item} className="block py-3 text-amber-800 hover:text-primary transition-colors text-lg font-medium border-b border-amber-200/20 last:border-b-0 w-full text-left">
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
//         {/* Elegant Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-20 left-4 md:left-20 w-20 md:w-40 h-20 md:h-40 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-4 md:right-20 w-32 md:w-64 h-32 md:h-64 bg-amber-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 md:w-80 h-40 md:h-80 bg-orange-200/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
//           {/* Left Content */}
//           <div className={`space-y-6 md:space-y-10 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
//             <div className="space-y-4 md:space-y-6">
//               <div className="inline-flex items-center bg-primary/15 text-primary px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium animate-bounce shadow-lg">
//                 <Sparkles className="w-4 h-4 mr-2" />
//                 Handcrafted Excellence
//               </div>
              
//               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-amber-900 leading-tight">
//                 <span className="italic">Where</span>
//                 <span className="block text-primary drop-shadow-sm">Simplicity</span>
//                 <span className="block text-amber-800">Meets Artistry</span>
//               </h1>
              
//               <p className="text-lg md:text-xl text-amber-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
//                 Each shirt is a canvas of understated elegance, featuring exquisite embroidery that whispers sophistication rather than shouts luxury.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <button className="group bg-primary text-amber-50 px-6 md:px-10 py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-500 hover:bg-primary/90 hover:scale-105 hover:shadow-2xl flex items-center justify-center shadow-xl">
//                 Explore Collection
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
//               </button>
              
//               <button className="border-2 border-primary text-primary px-6 md:px-10 py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-500 hover:bg-primary hover:text-amber-50 hover:scale-105 shadow-lg">
//                 Our Heritage
//               </button>
//             </div>

//             <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8 pt-4 md:pt-8">
//               <div className="flex items-center">
//                 <div className="flex -space-x-2">
//                   {[1,2,3,4].map((i) => (
//                     <div key={i} className="w-8 md:w-12 h-8 md:h-12 bg-gradient-to-br from-primary/30 to-amber-300/40 rounded-full border-2 border-amber-100 shadow-md"></div>
//                   ))}
//                 </div>
//                 <span className="ml-3 text-amber-700 font-medium text-sm md:text-base">200+ Artisan Pieces</span>
//               </div>
              
//               <div className="flex items-center">
//                 {[1,2,3,4,5].map((i) => (
//                   <Star key={i} className="w-4 md:w-5 h-4 md:h-5 text-amber-400 fill-current" />
//                 ))}
//                 <span className="ml-2 text-amber-700 font-medium text-sm md:text-base">Treasured by Many</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Elegant Product Showcase */}
//           <div className={`relative mt-8 lg:mt-0 transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
//             <div className="relative mx-auto max-w-sm lg:max-w-none">
//               {/* Main Product Display */}
//               <div className="bg-gradient-to-br from-amber-100/80 to-orange-100/60 backdrop-blur-sm rounded-3xl md:rounded-[2rem] p-6 md:p-10 shadow-2xl transform hover:scale-105 transition-all duration-700 border border-amber-200/50">
//                 <div className="aspect-square bg-gradient-to-br from-primary/20 via-amber-200/30 to-orange-200/20 rounded-2xl md:rounded-3xl mb-6 md:mb-8 flex items-center justify-center relative overflow-hidden shadow-inner">
//                   {/* Elegant Shirt Illustration */}
//                   <div className="w-24 md:w-40 h-32 md:h-52 bg-gradient-to-b from-amber-100 to-amber-200 rounded-xl relative shadow-lg">
//                     <div className="absolute inset-3 md:inset-6 bg-gradient-to-b from-amber-50 to-white rounded-lg shadow-inner"></div>
//                     <div className="absolute top-4 md:top-8 left-4 md:left-8 right-4 md:right-8 h-1 md:h-2 bg-primary/60 rounded animate-pulse"></div>
//                     <div className="absolute top-6 md:top-12 left-6 md:left-12 right-6 md:right-12 h-0.5 md:h-1 bg-primary/40 rounded"></div>
//                     <div className="absolute bottom-6 md:bottom-12 left-4 md:left-8 w-4 md:w-8 h-4 md:h-8 bg-primary/60 rounded-full shadow-md"></div>
//                     <div className="absolute top-2 md:top-4 right-2 md:right-4 w-2 md:w-3 h-2 md:h-3 bg-amber-300 rounded-full animate-ping"></div>
//                   </div>
                  
//                   <div className="absolute top-3 md:top-6 right-3 md:right-6 bg-primary text-amber-50 px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
//                     Artisan
//                   </div>
//                 </div>
                
//                 <div className="text-center space-y-2 md:space-y-4">
//                   <h3 className="text-lg md:text-2xl font-bold text-amber-900">{shirtStyles[currentSlide].name}</h3>
//                   <p className="text-amber-700 text-sm md:text-base leading-relaxed">{shirtStyles[currentSlide].desc}</p>
//                   <div className="flex justify-center items-center gap-2 md:gap-3">
//                     <span className="text-2xl md:text-3xl font-bold text-primary">{shirtStyles[currentSlide].price}</span>
//                     <span className="text-base md:text-lg text-amber-500 line-through">₹1,899</span>
//                   </div>
                  
//                   {/* Progress Dots */}
//                   <div className="flex justify-center gap-2 pt-2 md:pt-4">
//                     {shirtStyles.map((_, i) => (
//                       <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-primary w-6' : 'bg-amber-300'}`}></div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Luxury Elements */}
//               <div className="absolute -top-2 md:-top-6 -left-2 md:-left-6 bg-primary text-amber-50 p-2 md:p-4 rounded-full shadow-xl animate-bounce" style={{animationDelay: '1s'}}>
//                 <Crown className="w-4 md:w-6 h-4 md:h-6" />
//               </div>
              
//               <div className="absolute -bottom-2 md:-bottom-6 -right-2 md:-right-6 bg-gradient-to-br from-amber-200 to-orange-200 text-primary p-2 md:p-4 rounded-full shadow-xl animate-bounce" style={{animationDelay: '2s'}}>
//                 <Sparkles className="w-4 md:w-6 h-4 md:h-6" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Elegant Scroll Indicator */}
//         <div className="absolute bottom-6 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-5 md:w-8 h-8 md:h-12 border-2 border-primary rounded-full flex justify-center opacity-70">
//             <div className="w-1 h-2 md:h-4 bg-primary rounded-full mt-1 md:mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 md:py-24 bg-gradient-to-r from-amber-100/50 via-orange-50/30 to-yellow-100/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12 md:mb-20">
//             <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-4 md:mb-6">The Shirté Legacy</h2>
//             <p className="text-lg md:text-xl text-amber-700 max-w-4xl mx-auto leading-relaxed">
//               Where traditional craftsmanship meets contemporary elegance, creating pieces that transcend trends and embrace timeless sophistication
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {features.map((feature, index) => (
//               <div 
//                 key={index}
//                 className={`bg-gradient-to-br from-amber-50/90 to-orange-50/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 transform border border-amber-200/30 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//                 style={{transitionDelay: `${index * 200}ms`}}
//               >
//                 <div className="text-primary mb-4 md:mb-6 transform hover:scale-110 transition-transform duration-300 flex justify-center lg:justify-start">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg md:text-xl font-bold text-amber-900 mb-2 md:mb-3 text-center lg:text-left">{feature.title}</h3>
//                 <p className="text-amber-700 text-sm md:text-base leading-relaxed text-center lg:text-left">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Luxury CTA Section */}
//       <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-amber-50 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
//         <div className="absolute top-0 left-0 w-full h-full opacity-20">
//           <div className="absolute top-6 md:top-20 left-6 md:left-20 w-16 md:w-32 h-16 md:h-32 bg-amber-100/30 rounded-full animate-pulse blur-xl"></div>
//           <div className="absolute bottom-6 md:bottom-20 right-6 md:right-20 w-20 md:w-48 h-20 md:h-48 bg-orange-200/30 rounded-full animate-pulse blur-2xl" style={{animationDelay: '2s'}}></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-64 h-24 md:h-64 bg-amber-200/20 rounded-full animate-pulse blur-3xl" style={{animationDelay: '4s'}}></div>
//         </div>
        
//         <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
//           <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 italic">Craft Your Story</h2>
//           <p className="text-lg md:text-2xl mb-8 md:mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
//             Step into a world where every thread tells a tale of excellence, and every shirt becomes a treasured heirloom
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
//             <button className="bg-amber-50 text-primary px-6 md:px-10 py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-xl">
//               Begin Your Journey
//             </button>
//             <button className="border-2 border-amber-100 text-amber-50 px-6 md:px-10 py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-500 hover:bg-amber-50/10 hover:scale-105 shadow-lg">
//               Custom Embroidery
//             </button>
//           </div>
          
//           <div className="mt-8 md:mt-12 text-sm md:text-base opacity-80">
//             <p>Free delivery on orders above ₹999 • 30-day craftsmanship guarantee</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ShirtLandingPage;
'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const ShirtLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-serif">
      {/* Minimal Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-stone-50/95 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-light text-stone-800 tracking-wide">
              Shirté <span className="text-stone-600">| कपास</span>
            </div>
            
            <div className="hidden md:flex space-x-12">
              {['Shop', 'About', 'Contact'].map((item) => (
                <button key={item} className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-light tracking-wide">
                  {item}
                </button>
              ))}
            </div>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-stone-50 border-t border-stone-200">
            <div className="px-6 py-4 space-y-4">
              {['Shop', 'About', 'Contact'].map((item) => (
                <button key={item} className="block text-stone-700 font-light">
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}np
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="text-xs uppercase tracking-widest text-stone-500 font-sans">
                Handcrafted Excellence
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-light text-stone-900 leading-tight">
                Plain shirts,
                <br />
                <em>extraordinary</em>
                <br />
                embroidery
              </h1>
              
              <p className="text-lg text-stone-600 leading-relaxed max-w-md font-light">
                Where simplicity meets artistry. Each piece carefully crafted with premium cotton and delicate embroidered details.
              </p>
              
              <div className="pt-4">
                <button className="group inline-flex items-center bg-stone-900 text-stone-50 px-8 py-4 font-light tracking-wide hover:bg-stone-800 transition-colors duration-200">
                  Explore Collection
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Content - Product Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-stone-200 to-stone-100 flex items-center justify-center">
                  {/* Minimal Shirt Illustration */}
                  <div className="w-48 h-64 bg-stone-50 shadow-sm relative">
                    <div className="absolute inset-8 bg-white shadow-inner rounded-sm"></div>
                    <div className="absolute top-12 left-12 right-12 h-px bg-stone-300"></div>
                    <div className="absolute top-16 left-16 right-16 h-px bg-stone-200"></div>
                    <div className="absolute bottom-16 left-12 w-6 h-6 bg-stone-300 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Price Tag */}
              <div className="absolute -bottom-4 -left-4 bg-stone-900 text-stone-50 px-6 py-3">
                <div className="text-sm font-light">From ₹1,299</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-stone-100/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-stone-900 mb-4">
              Crafted with care
            </h2>
            <p className="text-stone-600 font-light max-w-2xl mx-auto">
              Every shirt tells a story of traditional craftsmanship meeting contemporary design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-stone-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-light text-stone-900">Hand Embroidered</h3>
              <p className="text-stone-600 font-light">Each detail carefully stitched by skilled artisans</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-stone-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-light text-stone-900">Premium Cotton</h3>
              <p className="text-stone-600 font-light">Sourced from the finest cotton for ultimate comfort</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-stone-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-light text-stone-900">Timeless Design</h3>
              <p className="text-stone-600 font-light">Classic pieces that transcend seasonal trends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-stone-900 mb-4">
              New arrivals
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-stone-100 mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-stone-200 to-stone-100 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-light text-stone-900">Classic Embroidered Shirt</h3>
                  <p className="text-stone-600 font-light">₹1,299</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-stone-900 text-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-light mb-6">
            Stay connected
          </h2>
          <p className="text-stone-300 font-light mb-8 max-w-2xl mx-auto">
            Subscribe to receive updates on new collections and exclusive offers
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border border-stone-600 text-stone-50 placeholder-stone-400 font-light focus:outline-none focus:border-stone-400"
              />
              <button className="px-6 py-3 bg-stone-50 text-stone-900 font-light hover:bg-stone-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-light text-stone-800 tracking-wide mb-4 md:mb-0">
              Shirté <span className="text-stone-600">| कपास</span>
            </div>
            
            <div className="flex space-x-8 text-stone-600 font-light">
              <button>Privacy</button>
              <button>Terms</button>
              <button>Contact</button>
            </div>
          </div>
          
          <div className="border-t border-stone-200 mt-8 pt-8 text-center text-stone-500 font-light text-sm">
            © 2024 Shirté. Crafted with care.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShirtLandingPage;