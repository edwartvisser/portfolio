// app/about/page.tsx
"use client";

import { Button } from '@/components/ui/button'
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="font-sans flex min-h-screen flex-col p-24">
          <h1 className="text-3xl font-serif">Edwart Visser</h1>
    
          <Link href='/' className="text-blue-400 underline">Home</Link>
        </main>
      )
}