"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Hero from "@/components/Hero";
import CardContainer from "@/components/CardContainer";
import Card from "@/components/Card";
import CardSkeleton from "@/components/CardSkeleton";
import LoadMoreLessButtons from "@/components/LoadMoreLessButton";
import SearchModal from "@/components/SearchModal";
import TagsFilter from "@/components/TagsFilter";
import FAQSection from "@/components/FaqSection";
import SortDropdown from "@/components/SortDropdown";
import { useFavorites } from "@/context/FavoritesContext";

// Define a constant for the initial number of cards to display
const INITIAL_CARDS = 8;

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCards, setVisibleCards] = useState(INITIAL_CARDS);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState(["All"]);
  const [shouldScrollToCards, setShouldScrollToCards] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [allResources, setAllResources] = useState([]);

  const searchInputRef = useRef(null);
  const cardContainerRef = useRef(null);

  const { favorites } = useFavorites();

  // Handle keydown event for search modal
  const handleKeyDown = useCallback((event) => {
    if (event.key === "k" || event.key === "K") {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
        setIsSearchModalOpen(true);
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Handle client-side mounting and data fetching
  useEffect(() => {
    setIsMounted(true);
    const fetchResources = async () => {
      try {
        const res = await fetch("/api/resources");
        if (!res.ok) throw new Error("Failed to fetch resources");
        const data = await res.json();
        setAllResources(data);
      } catch (error) {
        console.error("Error fetching resources:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResources();
  }, []);

  // Focus search input when modal opens
  useEffect(() => {
    if (isSearchModalOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isSearchModalOpen]);

  // Filter data based on search query and selected tags
  const filteredData = allResources.filter((card) => {
    // Special handling for Favorites filter
    if (selectedTags.includes("Favorites")) {
      return favorites.includes(card.link);
    }

    const matchesSearchQuery =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTags =
      selectedTags.includes("All") ||
      selectedTags.some((tag) => card.tags && card.tags.includes(tag));

    return matchesSearchQuery && matchesTags;
  });

  // Sort filtered data
  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case "a-z":
        return a.title.localeCompare(b.title);
      case "z-a":
        return b.title.localeCompare(a.title);
      default:
        return 0; // Keep original order
    }
  });

  // Scroll to card container only when explicitly triggered
  useEffect(() => {
    if (
      shouldScrollToCards &&
      filteredData.length > 0 &&
      searchQuery.length > 0
    ) {
      cardContainerRef.current?.scrollIntoView({ behavior: "smooth" });
      setShouldScrollToCards(false);
    }
  }, [shouldScrollToCards, filteredData, searchQuery]);

  // Load more/less cards
  const loadMoreCards = () => setVisibleCards(visibleCards + INITIAL_CARDS);
  const loadLessCards = () => setVisibleCards(INITIAL_CARDS);

  // Close search modal
  const closeSearchModal = () => setIsSearchModalOpen(false);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setSelectedTags(["All"]);
    setShouldScrollToCards(true);
  };

  return (
    <>
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchBarClick={() => setIsSearchModalOpen(true)}
      />
      <div ref={cardContainerRef}>
        <div className="w-11/12 max-w-screen-2xl mx-auto px-2 sm:px-9 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1 w-full sm:w-auto min-w-0">
              <TagsFilter
                onFilterChange={setSelectedTags}
                onClearSearch={() => setSearchQuery("")}
                resetKey={selectedTags.join(",")}
              />
            </div>
            <div className="w-full sm:w-auto sm:shrink-0">
              <SortDropdown onSortChange={setSortBy} currentSort={sortBy} />
            </div>
          </div>
        </div>
        <CardContainer>
          {!isMounted || isLoading ? (
            Array.from({ length: INITIAL_CARDS }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          ) : sortedData.length === 0 && selectedTags.includes("Favorites") ? (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                No saved tools yet
              </h3>
              <p className="text-[#7F8080] max-w-md">
                Click the heart icon on any resource card to save it here for
                quick access.
              </p>
            </div>
          ) : (
            sortedData
              .slice(0, visibleCards)
              .map((card, index) => <Card key={card.link} {...card} />)
          )}
        </CardContainer>
      </div>
      <LoadMoreLessButtons
        visibleCards={visibleCards}
        filteredData={sortedData}
        loadMoreCards={loadMoreCards}
        loadLessCards={loadLessCards}
      />
      <SearchModal
        isOpen={isSearchModalOpen}
        searchQuery={searchQuery}
        setSearchQuery={handleSearchSubmit}
        searchInputRef={searchInputRef}
        onClose={closeSearchModal}
      />
      <FAQSection />
    </>
  );
}

export default App;
