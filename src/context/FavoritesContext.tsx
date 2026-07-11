"use client";
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export interface StorageProvider {
	getFavorites: () => string[];
	setFavorites: (favorites: string[]) => void;
}

const localStorageProvider: StorageProvider = {
	getFavorites: () => {
		if (typeof window === "undefined") return [];
		try {
			return JSON.parse(localStorage.getItem("omnicraft_favorites") || "[]");
		} catch {
			return [];
		}
	},
	setFavorites: (favorites: string[]) => {
		if (typeof window === "undefined") return;
		localStorage.setItem("omnicraft_favorites", JSON.stringify(favorites));
	},
};

interface FavoritesContextType {
	favorites: string[];
	toggleFavorite: (resourceLink: string) => void;
	isFavorite: (resourceLink: string) => boolean;
	favoritesCount: number;
	isHydrated: boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

interface FavoritesProviderProps {
	children: ReactNode;
	storageProvider?: StorageProvider;
}

export function FavoritesProvider({
	children,
	storageProvider = localStorageProvider,
}: FavoritesProviderProps) {
	const [favorites, setFavorites] = useState<string[]>([]);
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

	const toggleFavorite = useCallback((resourceLink: string) => {
		setFavorites((prev) => {
			if (prev.includes(resourceLink)) {
				return prev.filter((link) => link !== resourceLink);
			}
			return [...prev, resourceLink];
		});
	}, []);

	const isFavorite = useCallback(
		(resourceLink: string) => {
			return favorites.includes(resourceLink);
		},
		[favorites],
	);

	const value: FavoritesContextType = {
		favorites,
		toggleFavorite,
		isFavorite,
		favoritesCount: favorites.length,
		isHydrated,
	};

	return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
	const context = useContext(FavoritesContext);
	if (!context) {
		throw new Error("useFavorites must be used within a FavoritesProvider");
	}
	return context;
}
