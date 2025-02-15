export default function LoadMoreLessButton({
  visibleCards,
  filteredData,
  loadMoreCards,
  loadLessCards,
}) {
  return (
    <div className="flex justify-center my-8">
      {visibleCards < filteredData.length ? (
        <button
          onClick={loadMoreCards}
          className="cursor-pointer mt-4 px-7 py-[0.9rem] font-medium bg-[#131313] border border-[#2b2b2b] hover:bg-white transition-all duration-300 ease-linear hover:text-black rounded-full"
        >
          Load More
        </button>
      ) : (
        <button
          onClick={loadLessCards}
          className="cursor-pointer mt-4 px-7 py-[0.9rem] font-medium bg-[#131313] border border-[#2b2b2b] hover:bg-white transition-all duration-300 ease-linear hover:text-black rounded-full"
        >
          Load Less
        </button>
      )}
    </div>
  );
}
