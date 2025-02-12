"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Hero from "@/components/Hero";
import CardContainer from "@/components/CardContainer";
import Card from "@/components/Card";
import { data } from "@/data/index";
import LoadMoreLessButtons from "@/components/LoadMoreLessButton";
import SearchModal from "@/components/SearchBar";
import TagsFilter from "@/components/TagsFilter";

// Define a constant for the initial number of cards to display
const INITIAL_CARDS = 8;

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCards, setVisibleCards] = useState(INITIAL_CARDS);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState(["All"]);

  const searchInputRef = useRef(null);
  const cardContainerRef = useRef(null);

  // Handle keydown event for search modal
  const handleKeyDown = useCallback((event) => {
    if (event.key === "k" || event.key === "K") {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
        setIsSearchModalOpen(true);
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Filter data based on search query and selected tags
  const filteredData = data.filter((card) => {
    const matchesSearchQuery =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.para.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTags =
      selectedTags.includes("All") ||
      selectedTags.some((tag) => card.tags.includes(tag));

    return matchesSearchQuery && matchesTags;
  });

  // Scroll to card container when filtered data changes
  useEffect(() => {
    if (filteredData.length > 0 && searchQuery.length > 0) {
      cardContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [filteredData, searchQuery, selectedTags]);

  // Load more/less cards
  const loadMoreCards = () => setVisibleCards(visibleCards + INITIAL_CARDS);
  const loadLessCards = () => setVisibleCards(INITIAL_CARDS);

  // Close search modal
  const closeSearchModal = () => setIsSearchModalOpen(false);

  return (
    <>
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div ref={cardContainerRef}>
        <TagsFilter onFilterChange={setSelectedTags} />
        <CardContainer>
          {filteredData.slice(0, visibleCards).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </CardContainer>
      </div>
      <LoadMoreLessButtons
        visibleCards={visibleCards}
        filteredData={filteredData}
        loadMoreCards={loadMoreCards}
        loadLessCards={loadLessCards}
      />
      <SearchModal
        isOpen={isSearchModalOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchInputRef={searchInputRef}
        onClose={closeSearchModal}
      />
    </>
  );
}

export default App;
