import { BackendAPI, EventCategories } from "@/lib";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { IGetGoodEventResponse } from "@/interfaces";
import EventCard from "./event-card";

const getRelatedEventsBasedOnCategory = async (category: EventCategories) => {
  const response = await fetch(`${BackendAPI}/api/events/search?cat=${category}`, { cache: "no-cache" });
  const events: IGetGoodEventResponse = await response.json();
  return events.data;
};

const EventCarousel = async ({ category }: { category: EventCategories }) => {
  const events = await getRelatedEventsBasedOnCategory(category);

  return (
    <Carousel
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {events.map((eve, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <EventCard
              _id={eve._id}
              price={eve.price}
              startDateTime={eve.startDateTime}
              name={eve.name}
              image={eve.image}
              organizer={eve.organizer}
              location={eve.location}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default EventCarousel;
