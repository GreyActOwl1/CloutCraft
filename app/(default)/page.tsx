export const metadata = {
  title: 'CloutCraft | Supercharge Your LinkedIn Experience',
  description: '',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      {/*<Newsletter />*/}
      <Features />
      <Zigzag />
      <Testimonials />
      <Link href="/default/generate">Generate a Post!</Link>
    </>
  )
}
