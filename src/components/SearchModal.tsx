"use client";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

interface SearchModalProps {
	isOpen: boolean;
	searchQuery?: string;
	setSearchQuery: (query: string) => void;
	searchInputRef: React.RefObject<HTMLInputElement | null>;
	onClose: () => void;
}

export default function SearchModal({
	isOpen,
	setSearchQuery,
	searchInputRef,
	onClose,
}: SearchModalProps) {
	const [inputValue, setInputValue] = useState("");
	const shouldReduceMotion = useReducedMotion();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearchQuery(inputValue);
		setInputValue("");
		onClose();
	};

	// Focus modal input right after it finishes animating
	useEffect(() => {
		if (isOpen) {
			const timeout = setTimeout(() => {
				searchInputRef.current?.focus();
			}, 100);
			return () => clearTimeout(timeout);
		}
	}, [isOpen, searchInputRef]);

	// Handle Escape key to close modal
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape" && isOpen) {
				event.preventDefault();
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown, { capture: true });
			return () => {
				document.removeEventListener("keydown", handleKeyDown, { capture: true });
			};
		}
	}, [isOpen, onClose]);

	const morphTransition = shouldReduceMotion
		? { duration: 0 }
		: {
				type: "spring" as const,
				stiffness: 400,
				damping: 35,
			};

	return (
		<AnimatePresence>
			{isOpen && (
				<div
					className="fixed inset-0 z-50 flex items-start justify-center sm:pt-[15vh] p-0 sm:px-4"
					role="dialog"
					aria-modal="true"
				>
					{/* Backdrop */}
					<motion.div
						className="absolute inset-0 backdrop-blur-lg bg-black/40"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ ease: "easeInOut", duration: 0.25 }}
						onClick={onClose}
					/>

					{/* Modal Content — shares layoutId with SearchBar for the morph */}
					<motion.div
						layoutId="search-bar"
						className="relative w-full sm:max-w-[420px] h-[60px] bg-[#1A1A1A] rounded-none sm:rounded-full px-6 shadow-xl sm:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_24px_48px_-12px_rgba(0,0,0,0.7)] flex items-center justify-center border-b border-zinc-800/80 sm:border-none"
						transition={morphTransition}
						onClick={(e) => e.stopPropagation()}
					>
						<form onSubmit={handleSubmit} className="w-full flex items-center">
							<motion.div
								initial={shouldReduceMotion ? undefined : { scale: 0.9, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={
									shouldReduceMotion
										? undefined
										: { scale: 0.9, opacity: 0, transition: { duration: 0.15 } }
								}
								transition={{
									delay: 0.1,
									ease: [0.22, 1, 0.36, 1],
									duration: 0.28,
								}}
							>
								<IoSearch className="size-6 text-white" />
							</motion.div>
							<motion.input
								type="text"
								placeholder="eg: inspiration"
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								className="w-full border-none bg-transparent px-4 py-2 placeholder:text-white/50 text-white outline-hidden focus:outline-hidden"
								ref={searchInputRef}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 0.15, delay: 0 } }}
								transition={{
									delay: 0.14,
									ease: [0.22, 1, 0.36, 1],
									duration: 0.28,
								}}
							/>
						</form>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}
