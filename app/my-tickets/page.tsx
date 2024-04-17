import Container from "@/components/ui/container";
import Tickets from "./tickets";
import { Suspense } from "react";
import LoadingUI from "../loading";

const AttendeeTicketsPage = () => {
  return (
    <Container>
      <div className="w-full pt-4 px-2">
        <h1>Tickets Page</h1>
        <Suspense fallback={<LoadingUI />}>
          <Tickets />
        </Suspense>
      </div>
    </Container>
  );
};

export default AttendeeTicketsPage;
