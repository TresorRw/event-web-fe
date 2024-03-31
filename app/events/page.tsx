import Container from "@/components/ui/container"
import EventCard from "@/components/ui/event-card";
import { IGetGoodEventResponse } from "@/interfaces";
import { BackendAPI } from "@/lib/constants"
import axios from "axios"

const getAllEvents = async () => {
  const events = await axios.get(`${BackendAPI}/api/events`);
  return events.data as IGetGoodEventResponse;
}

const EventsPage = async () => {
  const events = await getAllEvents();

  return (
    <Container>
      <div className="w-full pt-4 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.data.map((event) => (
            <EventCard
              endDateTime={event.endDateTime}
              key={event._id}
              _id={event._id}
              price={event.price}
              startDateTime={event.startDateTime}
              name={event.name}
              description={event.description}
              image=""
              organizer={event.organizer}
              location={event.location}
              category={event.category} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default EventsPage