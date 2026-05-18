'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils/cn'

const pageLinks = [
  {
    label: 'Home',
    destination: '/',
  },
  {
    label: 'About',
    destination: '/about',
  },
  {
    label: 'Recipes',
    destination: '/recipes',
  },
]

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className='flex h-23 items-center justify-between border-b border-b-neutral-300 px-15'>
      <Image
        className='md:h-10 md:w-65'
        alt='recipe finder logo'
        src='images/logo.svg'
        width={242}
        height={32}
        loading='eager'
      />
      <div className='flex gap-10'>
        {pageLinks.map((pageLink) => (
          <Link
            key={pageLink.destination}
            href={pageLink.destination}
            className={cn(
              'text-preset-7 h-6.75 text-neutral-900',
              pathname === pageLink.destination && 'border-b-3 border-b-orange-500',
            )}>
            {pageLink.label}
          </Link>
        ))}
      </div>
      <>
        <Link
          href='/recipes'
          className='p text-preset-5 text-neutral rounded-[10px] bg-neutral-900 px-4 py-3'>
          Browse Recipes
        </Link>
      </>
    </header>
  )
}
