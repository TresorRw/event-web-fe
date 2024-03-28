'use client'

import Container from './container'
import Link from 'next/link'
import { ModeToggle } from "@/components/theme-changer";
import classNames from "classnames";
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <header className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className='ml-4 lg:ml-0'>
              <h1 className="text-xl font-bold text-primary">TresEvents</h1>
            </Link>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <Link className={classNames({
              'text-primary': pathName === '/events',
            })} href={"/events"}>Events</Link>
            <Link className={classNames({
              'text-primary': pathName === '/discover',
            })} href={"/discover"}>Discover</Link>
            <Link
              className={classNames({
                'text-primary': pathName === '/contact',
              })} href={"/contact"}>Contact</Link>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header