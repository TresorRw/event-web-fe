import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ApplyPagination = ({
  totalResults,
  perPage = 25,
  currentPage = 1,
}: {
  totalResults: number;
  perPage: number;
  currentPage: number;
}) => {
  const previous = currentPage - 1;
  let pages = [];
  const totalPages = Math.ceil(totalResults / perPage);

  // If total pages is greater than 5 then we display number between currentPage to the next 5 pages else we display all pages
  if (totalPages > 5) {
    for (let z = currentPage; z < previous + 7; z++) {
      pages.push(z);
    }
  } else {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  }

  return (
    <>
      <p className="text-xs font-semibold">
        Showing results of page {currentPage} of {totalPages} in total of {totalResults} records
      </p>
      <Pagination>
        <PaginationContent>
          {currentPage != 1 && (
            <PaginationItem>
              <PaginationPrevious href={`/events?page=${previous}&perPage=${perPage}`} />
            </PaginationItem>
          )}
          {pages.map((page, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                className={currentPage == page ? "bg-primary" : ""}
                href={`/events?page=${page}&perPage=${perPage}`}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>{totalPages > 5 && <PaginationEllipsis />}</PaginationItem>
          {currentPage != totalPages && (
            <PaginationItem>
              <PaginationNext href={`/events?page=${previous + 2}&perPage=${perPage}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default ApplyPagination;
