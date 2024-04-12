import Container from "@/components/ui/container";
import SearchContent from "@/components/ui/forms/discover";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Your Next Event",
  description: "Search, Explore, and Attend Exciting Gatherings Near You!",
};

const DiscoverPage = () => {
  return (
    <Container>
      <div className="w-full pt-4 px-2 flex flex-col items-center lg:p-4 text-center">
        <h1 className="text-2xl font-semibold mt-5">
          Discover Your Next Event
        </h1>
        <h5 className="text-xs mb-5">
          Search, Explore, and Attend Exciting Gatherings Near You!
        </h5>
        <SearchContent />
      </div>
    </Container>
  );
};

export default DiscoverPage;
