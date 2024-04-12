import ErrorAlert from "@/components/ui/error-alert";
import Container from "@/components/ui/container";
import EventCard from "@/components/ui/event-card";
import { IGetGoodEventResponse } from "@/interfaces";
import { AxiosClient } from "@/lib";
import ApplyPagination from "@/components/ui/results-pagination";
import Link from "next/link";

const getAllEvents = async (perPage: number = 25, page: number = 1) => {
  try {
    const events = await AxiosClient.get(`/events?perPage=${perPage}&page=${page}`);
    return events.data as IGetGoodEventResponse;
  } catch (error) {
    return null;
  }
};

const EventsPage = async ({ searchParams }: { searchParams: { perPage: number, page: number } }) => {
  const { perPage, page } = searchParams;
  const events = await getAllEvents(perPage, page);

  return (
    <Container>
      <div className="w-full pt-4 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {!events && <ErrorAlert title="Error" variant="destructive" message="Refresh the page to try again" />}

          {events?.data.map((event) => (
            <EventCard
              key={event._id}
              _id={event._id}
              price={event.price}
              startDateTime={event.startDateTime}
              name={event.name}
              image=""
              organizer={event.organizer}
              location={event.location}
            />
          ))}
        </div>
        <div className="w-full mt-5">
          {events?.data &&
            <ApplyPagination totalResults={events.totalResults} currentPage={page} perPage={perPage} />
          }
        </div>
      </div>
    </Container>
  );
};

export default EventsPage;
