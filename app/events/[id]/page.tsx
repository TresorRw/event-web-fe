import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container'
import ErrorAlert from '@/components/ui/error-alert';
import { Separator } from '@/components/ui/separator';
import { ISingleEventResponse } from '@/interfaces';
import { BackendAPI, convertDate } from '@/lib';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const EventInfo = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  let eventDetails: ISingleEventResponse;

  const response = await fetch(`${BackendAPI}/api/events/${id}`, { cache: "no-cache" });
  eventDetails = await response.json()
  if (!eventDetails.data) {
    return (
      <div className='flex w-full justify-center p-4'>
        <ErrorAlert title='Error' message={'We can not find event you\'re looking for, go back!'} variant="destructive" />
      </div>
    )
  }
  const { _id, category, description, location, endDateTime, name, organizer, price, startDateTime, image } = eventDetails.data;
  return (
    <Container>
      <div className="w-full pt-4 px-4">
        <div className="flex flex-col md:flex-row lg:flex-row">
          <div className="w-full p-2 lg:w-3/4">
            <h1 className='text-3xl font-semibold mb-2'>{name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
              <Image className='rounded-md' alt={`${name} event image`} width={450} height={300} src={image ?? "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"} />
              <div className='event-info text-slate-900 dark:text-slate-200'>
                <p> Category: <Link href={""}>{category.replaceAll('_', ' & ')}</Link> </p>
                <p> Start Date &amp; Time: {convertDate(startDateTime)} </p>
                <p> End Date &amp; Time: {convertDate(endDateTime)} </p>
                <p> Location: {location} </p>
                <p> Price: {price} Frw </p>
                <p> Organized by: {organizer.displayName} </p>
                <Button className='text-light mt-5'>Buy ticket now</Button>
              </div>
            </div>
            <p className='mt-3 font-semibold'>More about this event</p>
            <p className='text-justify'>{description}</p>
            <div className="related-events mt-10">
              <h1 className="text-xl font-semibold">More like this</h1>
            </div>
          </div>
          <div className="w-full p-2 md:w-1/3 lg:w-1/4">
            <h4 className='text-xl mt-4 font-semibold'>More about <span className='text-primary'> {organizer.displayName}</span></h4>
            <Separator className='w-2/3' />
            <p className='text-justify mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aut id dolorem error ullam nostrum, temporibus minus dolore molestias ex odit deserunt assumenda consequuntur eligendi accusamus itaque laudantium accusantium odio.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default EventInfo