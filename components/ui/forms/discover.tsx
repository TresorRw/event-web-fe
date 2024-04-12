"use client";

import { Search } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from "../input";
import { useSearchParams } from "next/navigation";
import { AxiosClient, EventCategories, returnAxiosError } from "@/lib";
import { ChangeEvent, Suspense, useEffect, useState } from "react";
import { IGetGoodEventResponse } from "@/interfaces";
import EventCard from "../event-card";
import LoadingUI from "@/app/loading";
import ApplyPagination from "../results-pagination";

const SearchContent = () => {
  const params = useSearchParams();
  const currentPage = parseInt(params.get('page') as string) || 1;
  const perPage = parseInt(params.get('perPage') as string) || 25;
  const query = params.get("q") || "";
  const category = params.get("cat") || "";
  const [searchResults, setSearchResults] = useState<IGetGoodEventResponse>();

  const handleCategoryClick = (newCategory: string) => {
    window.history.pushState(null, "", `/discover?q=${query}&cat=${newCategory}`);
  };
  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    window.history.pushState(null, "", `/discover?q=${event.target.value}&cat=${category}`);
  };

  useEffect(() => {
    const search = async (category: string, query: string) => {
      try {
        const search_response = await AxiosClient.get(`/events/search?q=${query}&cat=${category}&perPage=${perPage}&page=${currentPage}`);
        const search_results: IGetGoodEventResponse = search_response.data;
        setSearchResults(search_results);
      } catch (error) {
        return returnAxiosError(error);
      }
    };
    search(category, query);
  }, [category, query, perPage, currentPage]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-5/6 md:w-1/2 lg:w-3/5">
        <Input
          type="search"
          value={query}
          onChange={handleQueryChange}
          placeholder="Search"
          className="pl-5 py-5 rounded-3xl"
        />
        <Search className="absolute right-5 top-2.5 h-6 w-4 cursor-pointer" />
      </div>

      {category != "" && (
        <p className="w-5/6 md:w-1/2 lg:w-3/5 text-right py-2">Category: {category.replaceAll("_", " & ")}</p>
      )}
      <ScrollArea className="w-5/6 md:w-1/2 lg:w-3/5">
        <div className="flex w-max p-2">
          {Object.values(EventCategories).map((category, i) => (
            <p
              className="hover:bg-slate-200 cursor-pointer dark:hover:bg-slate-900 p-2 rounded-md"
              onClick={() => handleCategoryClick(category)}
              key={i}
            >
              {category.replaceAll("_", " & ")}
            </p>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 text-left">
        {searchResults ? (
          searchResults.data.map((event, i) => (
            <EventCard
              key={i}
              _id={event._id}
              name={event.name}
              location={event.location}
              price={event.price}
              startDateTime={event.startDateTime}
              organizer={event.organizer}
              image=""
            />
          ))
        ) : (
          <h2>Type your search text and select category (Optional)</h2>
        )}
      </div>
      <ApplyPagination url={`/discover?q=${query}&cat=${category}`} totalResults={searchResults?.totalResults || 0} perPage={perPage} currentPage={currentPage} />
    </div>
  );
};

const searchWithSuspense = () => {
  return (
    <Suspense fallback={<LoadingUI />}>
      <SearchContent />
    </Suspense>
  )
}


export default searchWithSuspense;
