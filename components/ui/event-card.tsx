import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { IEvent } from "@/interfaces/events";
import { Button } from "./button";

const EventCard = ({ name, _id, image, location, organizer, startDateTime, price }: IEvent) => {
  return (
    <Card className="w-full md:max-w-[360px] hover:scale-105 transition-all">
      <Link href={`/events/${_id}`}>
        <Image
          priority
          width={400}
          height={200}
          className="rounded-xl"
          src={image ? image : "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"}
          alt="b" />
      </Link>
      <CardHeader>
        <Link href={`/events/${_id}`}>
          <CardTitle className="text-primary">{name}</CardTitle>
        </Link>
        <CardDescription className="flex justify-between">
          <span>By {organizer.displayName}</span>
          <span>{price} Frw</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between items-end">
        <div>
          <p> <span className="font-semibold"> Date: </span> {new Date(startDateTime).toDateString()}</p>
          <p> <span className="font-semibold"> Time: </span> {new Date(startDateTime).toLocaleTimeString()}</p>
          <p> <span className="font-semibold"> Location: </span> {location}</p>
        </div>
        <Button>Book</Button>
      </CardContent>
    </Card>
  )
}

export default EventCard
