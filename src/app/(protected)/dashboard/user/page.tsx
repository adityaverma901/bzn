// 'use client'

// import React from 'react'
// import Image from 'next/image'

// interface CardData {
//   id: number
//   title: string
//   description: string
//   defaultImage: string
//   hoverImage: string
// }

// const HoverImageCards: React.FC = () => {
//   const cardData: CardData[] = [
//     {
//       id: 1,
//       title: "Nature Beauty",
//       description: "Discover the wonders of natural landscapes",
//       defaultImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
//       hoverImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
//     },
//     {
//       id: 2,
//       title: "City Life",
//       description: "Experience the energy of urban environments",
//       defaultImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
//       hoverImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop"
//     },
//     {
//       id: 3,
//       title: "Ocean Waves",
//       description: "Feel the tranquility of coastal waters",
//       defaultImage: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop",
//       hoverImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
//     },
//     {
//       id: 4,
//       title: "Mountain Peaks",
//       description: "Reach new heights with stunning views",
//       defaultImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
//       hoverImage: "https://images.unsplash.com/photo-1464822759844-d150baec0494?w=400&h=300&fit=crop"
//     },
//     {
//       id: 5,
//       title: "Desert Sunset",
//       description: "Witness the magic of golden hour",
//       defaultImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
//       hoverImage: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop"
//     },
//     {
//       id: 6,
//       title: "Forest Path",
//       description: "Walk through enchanted woodland trails",
//       defaultImage: "https://images.unsplash.com/photo-1441260038675-7329ab4cc264?w=400&h=300&fit=crop",
//       hoverImage: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop"
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 drop-shadow-lg">
//           Hover Image Cards
//         </h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {cardData.map((card) => (
//             <div
//               key={card.id}
//               className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
//             >
//               {/* Image Container */}
//               <div className="relative h-64 w-full overflow-hidden">
//                 {/* Default Image */}
//                 <Image
//                   src={card.defaultImage}
//                   alt={card.title}
//                   fill
//                   className="object-cover transition-opacity duration-500 group-hover:opacity-0"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />
                
//                 {/* Hover Image */}
//                 <Image
//                   src={card.hoverImage}
//                   alt={`${card.title} hover`}
//                   fill
//                   className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />
                
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               </div>
              
//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
//                   {card.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {card.description}
//                 </p>
                
//                 {/* Button */}
//                 <button className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
//                   Explore More
//                 </button>
//               </div>
              
//               {/* Animated Border */}
//               <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400 transition-all duration-500 pointer-events-none" />
              
//               {/* Shine Effect */}
//               <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 pointer-events-none" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HoverImageCards
import React from 'react'
import CircularGallery from '../../../../../components/CircularGallery/CircularGallery'

export default function page() {
  return (
    <div>
      <CircularGallery />
    </div>
  )
}
