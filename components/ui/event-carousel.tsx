import { BackendAPI, EventCategories } from "@/lib";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { IGetGoodEventResponse } from "@/interfaces";
import EventCard from "./event-card";
import ErrorAlert from "./error-alert";
import AxiosCleint from "@/lib/axios-client";

const getRelatedEventsBasedOnCategory = async (category: EventCategories) => {
  try {
    const response = await AxiosCleint.get(`/events/search?cat=${category}`, { "axios-retry": { retries: 3 } });
    const events: IGetGoodEventResponse = response.data;
    return events;
  } catch (error) {
    return null;
  }
};

const EventCarousel = async ({ category }: { category: EventCategories }) => {
  const events = await getRelatedEventsBasedOnCategory(category);

  return (
    <>
      {!events && <ErrorAlert message="Problem while getting matching events" variant="destructive" title="Problem" />}
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {events?.data.map((eve, i) => (
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
    </>
  );
};

export default EventCarousel;
