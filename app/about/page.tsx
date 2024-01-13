// app/about/page.tsx
"use client";

import Card from '@/components/card'; 
import Navigation from '@/components/navigation';

export default function AboutPage() {
    return (
        <div>
        <header className="bg-gray-100 p-4">
          <div className="container mx-auto flex justify-between items-center">
              <div className="logo">
                  <img src="path-to-your-logo.png" alt="Logo" className="h-8" />
              </div>
             
              <Navigation activePage="/about" />
          </div>
      </header>
  
      <main className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">    
            <h1>About me</h1>
          </div>
      </main>
      </div>
      )
}