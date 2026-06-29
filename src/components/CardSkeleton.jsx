export default function CardSkeleton() {
	return (
		<section className="card flex flex-col w-full max-w-[320px] h-[352px] p-3 pb-5 overflow-hidden rounded-2xl border border-solid border-[#3f3f3fa2] bg-linear-to-br from-[#232323] to-[#0f0f0f] select-none animate-pulse">
			{/* Image Skeleton */}
			<div className="w-full h-[180px] rounded-md bg-[#2a2a2a] shrink-0" />

			{/* Info container */}
			<div className="mt-[28px] px-1 relative flex-1">
				<div className="pr-6">
					{/* Title Skeleton */}
					<div className="h-6 w-32 bg-[#2a2a2a] rounded mb-3" />
					{/* Description Skeleton */}
					<div className="h-4 w-48 bg-[#2a2a2a] rounded mb-2" />
					<div className="h-4 w-32 bg-[#2a2a2a] rounded" />
				</div>
			</div>
		</section>
	);
}
