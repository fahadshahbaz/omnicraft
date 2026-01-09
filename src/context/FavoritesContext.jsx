"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";

// Storage Provider Interface - easily swap localStorage with Supabase later
// Future: Replace with supabaseStorageProvider for authenticated users
const localStorageProvider = {
    getFavorites: () => {
        if (typeof window === "undefined") return [];
        try {
            return JSON.parse(localStorage.getItem("omnicraft_favorites") || "[]");
        } catch {
            return [];
        }
    },
    setFavorites: (favorites) => {
        if (typeof window === "undefined") return;
        localStorage.setItem("omnicraft_favorites", JSON.stringify(favorites));
    },
};

// For future Supabase integration:
// const supabaseStorageProvider = {
//   getFavorites: async (userId) => {
//     const { data } = await supabase
//       .from('favorites')
//       .select('resource_link')
//       .eq('user_id', userId);
//     return data?.map(row => row.resource_link) || [];
//   },
//   addFavorite: async (userId, resourceLink) => {
//     await supabase.from('favorites').insert({ user_id: userId, resource_link: resourceLink });
//   },
//   removeFavorite: async (userId, resourceLink) => {
//     await supabase.from('favorites').delete().eq('user_id', userId).eq('resource_link', resourceLink);
//   },
// };

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children, storageProvider = localStorageProvider }) {
    const [favorites, setFavorites] = useState([]);
    const [isHydrated, setIsHydrated] = useState(false);

    // Hydrate favorites from storage on mount
    useEffect(() => {
        const storedFavorites = storageProvider.getFavorites();
        setFavorites(storedFavorites);
        setIsHydrated(true);
    }, [storageProvider]);

    // Persist favorites to storage whenever they change
    useEffect(() => {
        if (isHydrated) {
            storageProvider.setFavorites(favorites);
        }
    }, [favorites, isHydrated, storageProvider]);

    const toggleFavorite = useCallback((resourceLink) => {
        setFavorites((prev) => {
            if (prev.includes(resourceLink)) {
                return prev.filter((link) => link !== resourceLink);
            }
            return [...prev, resourceLink];
        });
    }, []);

    const isFavorite = useCallback(
        (resourceLink) => {
            return favorites.includes(resourceLink);
        },
        [favorites]
    );

    const value = {
        favorites,
        toggleFavorite,
        isFavorite,
        favoritesCount: favorites.length,
        isHydrated,
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
}
