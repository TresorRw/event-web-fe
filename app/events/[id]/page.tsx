import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import ErrorAlert from "@/components/ui/error-alert";
import EventCarousel from "@/components/ui/event-carousel";
import { Separator } from "@/components/ui/separator";
import SkeletonCard from "@/components/ui/sketon-card";
import { ISingleEventResponse } from "@/interfaces";
import { convertDate, AxiosClient } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const EventInfo = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  let eventDetails: ISingleEventResponse;

  try {
    const response = await AxiosClient.get(`/events/${id}`);
    eventDetails = response.data;
  } catch (error) {
    return error;
  }
  if (!eventDetails.data) {
    return (
      <div className="flex w-full justify-center p-4">
        <ErrorAlert
          title="Error"
          message={"We can not find event you're looking for, go back!"}
          variant="destructive"
        />
      </div>
    );
  }
  const { _id, category, description, location, endDateTime, name, organizer, price, startDateTime, image } =
    eventDetails.data;
  return (
    <Container>
      <div className="w-full py-4 px-4">
        <div className="flex flex-col md:flex-row lg:flex-row">
          <div className="w-full p-2 lg:w-3/4 pr-6">
            <h1 className="text-2xl font-semibold mb-2">{name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
              <Image
                className="rounded-md"
                alt={`${name} event image`}
                width={450}
                height={300}
                src={image ?? "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"}
              />
              <div className="event-info text-slate-900 dark:text-slate-200">
                <p>
                  <span className="font-semibold">Category: </span>
                  <Link href={""}>{category.replaceAll("_", " & ")}</Link>
                </p>
                <p>
                  <span className="font-semibold">Start Date &amp; Time: </span>
                  {convertDate(startDateTime)}
                </p>
                <p>
                  <span className="font-semibold">End Date &amp; Time: </span>
                  {convertDate(endDateTime)}
                </p>
                <p>
                  <span className="font-semibold">Location: </span>
                  {location}
                </p>
                <p>
                  <span className="font-semibold">Price: </span>
                  {price} Frw
                </p>
                <p>
                  <span className="font-semibold">Organized by: </span>
                  {organizer.displayName}
                </p>
                <Button className="text-white mt-5">Buy ticket now</Button>
              </div>
            </div>
            <p className="mt-3 font-semibold">More about this event</p>
            <p className="text-justify">{description}</p>
            <div className="related-events mt-10">
              <h1 className="text-xl mb-2 font-semibold">More like this</h1>
              <Suspense fallback={<SkeletonCard />}>
                <EventCarousel category={category} />
              </Suspense>
            </div>
          </div>
          <div className="w-full p-2 md:w-1/3 lg:w-1/4">
            <h4 className="text-xl mt-4 font-semibold">
              More about <span className="text-primary"> {organizer.displayName}</span>
            </h4>
            <Separator className="w-2/3" />
            <p className="text-justify mt-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aut id dolorem error ullam nostrum,
              temporibus minus dolore molestias ex odit deserunt assumenda consequuntur eligendi accusamus itaque
              laudantium accusantium odio.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EventInfo;
