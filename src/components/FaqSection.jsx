"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const items = [
	{
		id: "1",
		title: "What resources are available?",
		content:
			"Omnicraft offers a curated collection of top-quality design assets, icons, UI libraries, and more to help developers and designers build projects efficiently.",
	},
	{
		id: "2",
		title: "How are resources selected?",
		content:
			"All resources are carefully handpicked to ensure the highest quality and usability, making sure you get the best tools for your projects.",
	},
	{
		id: "3",
		title: "Is Omnicraft free to use?",
		content:
			"Yes, Omnicraft is completely free to use. All resources are accessible without any cost or hidden fees.",
	},
	{
		id: "4",
		title: "Can I use them commercially?",
		content:
			"Yes, most of the resources provided are free for personal and commercial use. However, it's recommended to check the specific license details of each resource.",
	},
	{
		id: "5",
		title: "How often are they updated?",
		content:
			"New resources are added whenever I am free and come across a good resource that meets the quality standards of Omnicraft.",
	},
];

export default function FAQSection() {
	const [openItem, setOpenItem] = useState("");

	const toggleItem = (itemId) => {
		setOpenItem(openItem === itemId ? "" : itemId);
	};

	return (
		<section id="faq" className="py-20 px-6 md:px-8 lg:px-16">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
				<div className="md:col-span-4 lg:col-span-5">
					<h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
						Frequently asked questions
					</h2>
					<p className="mt-4 text-neutral-400 text-lg leading-relaxed">
						Everything you need to know about the platform.
					</p>
				</div>
				<div className="md:col-span-8 lg:col-span-7">
					<div className="space-y-4">
						{items.map((item) => {
							const isOpen = openItem === item.id;
							return (
								<div
									key={item.id}
									className="t-acc rounded-2xl shadow-border hover:shadow-border-hover overflow-hidden transition-[box-shadow,background-color] duration-300"
									data-open={isOpen ? "true" : "false"}
								>
									<button
										type="button"
										onClick={() => toggleItem(item.id)}
										className="w-full flex justify-between items-center gap-4 text-left px-4 sm:px-6 py-4 focus:outline-none group t-acc-head"
										aria-expanded={isOpen}
										aria-controls={`faq-answer-${item.id}`}
									>
										<h3
											className={`text-base sm:text-lg font-medium transition-colors duration-200 ${
												isOpen ? "text-white" : "text-neutral-300 group-hover:text-white"
											}`}
										>
											{item.title}
										</h3>
										<div
											className={`shrink-0 t-acc-chevron transition-colors duration-200 ${
												isOpen
													? "text-neutral-400"
													: "text-neutral-500 group-hover:text-neutral-400"
											}`}
										>
											<FaPlus size={18} className="pointer-events-none" aria-hidden="true" />
										</div>
									</button>
									<div className="t-acc-panel">
										<div className="t-acc-panel-inner">
											<div className="px-4 sm:px-6 pb-5 pt-1">
												<div className="h-px bg-linear-to-r from-[#2b2b2b] via-[#3a3a3a] to-[#2b2b2b] mb-4" />
												<p className="text-neutral-400 leading-relaxed text-[15px]">
													{item.content}
												</p>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
