export default function CardSkeleton() {
  return (
    <section className="card flex flex-col w-full max-w-[320px] h-[400px] overflow-hidden rounded-2xl border border-solid border-[#3f3f3fa2] bg-linear-to-br from-[#232323] to-[#0f0f0f] animate-pulse">
      {/* Image Skeleton */}
      <div className="mx-auto w-[272px] h-[200px] mt-8 rounded-lg bg-[#2a2a2a]" />

      <div className="flex justify-between items-center p-4">
        <div className="flex-1">
          {/* Title Skeleton */}
          <div className="mt-4 p-2">
            <div className="h-7 w-32 bg-[#2a2a2a] rounded" />
          </div>

          {/* Description Skeleton */}
          <div className="p-2 pb-[15px]">
            <div className="h-4 w-40 bg-[#2a2a2a] rounded" />
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="mt-8 pr-3">
          <div className="w-10 h-10 rounded-full bg-[#2a2a2a]" />
        </div>
      </div>
    </section>
  );
}
