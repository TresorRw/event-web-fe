import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className="bg-gray-50 dark:bg-inherit w-full">
      <div className="container mx-auto  w-full lg:w-1/2 text-center py-12">
        <h1 className="text-3xl text-primary font-bold mb-4">TresEvents</h1>
        <Separator className='w-1/2 mx-auto mb-10' />
        <h2 className="text-2xl font-bold mb-4">Empower Your Events: Seamlessly Plan, Manage, and Experience Every Moment</h2>
        <p className="text-lg mt-10">Welcome to Your Ultimate Event Hub: Where Organizers Craft Unforgettable Experiences and Attendees Discover Thrilling Moments, All in One Dynamic Platform!</p>

        <div className="mt-10 space-x-4">
          <Link href={"/signup"}>
            <Button size={"lg"} className='rounded-3xl dark:text-white'>Create account</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero