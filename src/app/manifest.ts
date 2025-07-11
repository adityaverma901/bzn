import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TMS',
    short_name: 'TMS',
    description: 'A Progressive Web App built with Next.js',
    // start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icons-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}