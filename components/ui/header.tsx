'use client'
import React from 'react'
import Container from './container'
import Link from 'next/link'
import { Button } from './button'
import { ModeToggle } from "@/components/theme-changer";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className='ml-4 lg:ml-0'>
              <h1 className="text-xl font-bold text-primary">TresEvents</h1>
            </Link>
          </div>
          <div className="flex items-end space-x-4">
            <ModeToggle />
            {/* <Button className='dark:text-white rounded-2xl'>Join us</Button> */}
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header