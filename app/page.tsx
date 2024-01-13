import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="font-sans flex min-h-screen flex-col p-24">
      <h1 className="text-3xl font-serif">Hello world</h1>

      <Link href='/about' className="text-blue-400 underline">About me</Link>
    </main>
  )
}
