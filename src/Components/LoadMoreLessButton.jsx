const LoadMoreLessButton = ({
  visibleCards,
  filteredData,
  loadMoreCards,
  loadLessCards,
}) => {
  return (
    <div className="flex justify-center my-6">
      {visibleCards < filteredData.length ? (
        <button
          onClick={loadMoreCards}
          className="cursor-pointer mt-4 p-3 px-10 font-medium border-2 border-[#4f4f4f] hover:bg-white transition-all duration-300 ease-linear hover:text-black rounded-md"
        >
          Load More
        </button>
      ) : (
        <button
          onClick={loadLessCards}
          className="cursor-pointer mt-4 p-3 px-10 font-medium border-2 border-[#4f4f4f] hover:bg-white transition-all duration-300 ease-linear hover:text-black rounded-md"
        >
          Load Less
        </button>
      )}
    </div>
  );
};

export default LoadMoreLessButton;
