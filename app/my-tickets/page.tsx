import { SlashIcon } from "@radix-ui/react-icons";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Container from "@/components/ui/container";
import Tickets from "./tickets";
import { Suspense } from "react";
import LoadingUI from "../loading";
import Link from "next/link";

export const metadata = {
  title: "My Tickets",
};

const AttendeeTicketsPage = () => {
  return (
    <Container>
      <div className="w-full pt-4 px-2">
        <Breadcrumb className="mb-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/events">Events</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>My Tickets</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Suspense fallback={<LoadingUI />}>
          <Tickets />
        </Suspense>
      </div>
    </Container>
  );
};

export default AttendeeTicketsPage;
