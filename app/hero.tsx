import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-50 dark:bg-inherit w-full">
      <div className="container mx-auto w-full lg:w-1/2 text-center py-12 mt-20">
        <h2 className="text-2xl font-bold mb-4">
          Empower Your Events: Seamlessly Plan, Manage, and Experience Every
          Moment
        </h2>
        <p className="text-lg mt-10">
          Welcome to Your Ultimate Event Hub: Where Organizers Craft
          Unforgettable Experiences and Attendees Discover Thrilling Moments,
          All in One Dynamic Platform!
        </p>

        <div className="mt-10 space-x-4">
          <Link href={"/signup"}>
            <Button size={"lg"} className="rounded-3xl dark:text-white">
              Create account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
