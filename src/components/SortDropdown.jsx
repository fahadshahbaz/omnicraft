"use client";
import { useState, useRef, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function SortDropdown({ onSortChange, currentSort }) {
	const [dropdownState, setDropdownState] = useState("closed"); // "closed" | "open" | "closing"
	const dropdownRef = useRef(null);

	const sortOptions = [
		{ id: "default", label: "Default" },
		{ id: "a-z", label: "A → Z" },
		{ id: "z-a", label: "Z → A" },
	];

	const currentOption = sortOptions.find((opt) => opt.id === currentSort) || sortOptions[0];

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				if (dropdownState === "open") {
					setDropdownState("closing");
					setTimeout(() => {
						setDropdownState("closed");
					}, 150);
				}
			}
		};

		if (dropdownState === "open") {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownState]);

	const handleSortSelect = (sortId) => {
		onSortChange(sortId);
		setDropdownState("closing");
		setTimeout(() => {
			setDropdownState("closed");
		}, 150);
	};

	const toggleDropdown = () => {
		if (dropdownState === "open") {
			setDropdownState("closing");
			setTimeout(() => {
				setDropdownState("closed");
			}, 150);
		} else {
			setDropdownState("open");
		}
	};

	return (
		<div className="relative" ref={dropdownRef}>
			{/* Trigger Button */}
			<button
				type="button"
				onClick={toggleDropdown}
				className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2 px-4 py-2.5 bg-[#0D0D0D] hover:bg-[#1a1a1a] shadow-border hover:shadow-border-hover rounded-lg text-white/90 transition-[colors,box-shadow] duration-200"
			>
				<span className="text-sm">Sort: {currentOption.label}</span>
				<div
					className={`shrink-0 transition-transform duration-200 ${
						dropdownState === "open" ? "rotate-180" : ""
					}`}
				>
					<HiChevronDown className="text-white/70" />
				</div>
			</button>

			<div
				className={`t-dropdown absolute top-full mt-2 right-0 w-full sm:w-40 bg-[#0D0D0D] shadow-border p-1 rounded-lg shadow-xl z-50 ${
					dropdownState === "open" ? "is-open" : ""
				} ${dropdownState === "closing" ? "is-closing" : ""}`}
				data-origin="top-right"
			>
				{sortOptions.map((option) => (
					<button
						type="button"
						key={option.id}
						onClick={() => handleSortSelect(option.id)}
						className={`w-full flex items-center justify-between px-4 py-2.5 text-left rounded-md transition-colors ${
							currentSort === option.id
								? "bg-[#1a1a1a] text-white"
								: "text-white/70 hover:bg-[#1a1a1a] hover:text-white"
						}`}
					>
						<span className="text-sm">{option.label}</span>
						{currentSort === option.id && (
							<div className="w-1.5 h-1.5 bg-[#FF3D00] rounded-full transition-transform duration-200 scale-100" />
						)}
					</button>
				))}
			</div>
		</div>
	);
}
