import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[150px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
          <div className="flex justify-between">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[150px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
          <div className="flex justify-between">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[150px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
          <div className="flex justify-between">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkeletonCard;
