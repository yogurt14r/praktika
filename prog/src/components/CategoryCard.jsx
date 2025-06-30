import { useEffect, useState } from "react";

function CategoryCard({ onClick }) {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("https://dummyjson.com/products/categories")
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	const getCategoryImage = (category) => {
		const Text = encodeURIComponent(category);
		return `https://dummyjson.com/image/180x111/FFEDD5/1F2937?text=${Text}&fontSize=18`;
	};

	return (
		<div>
			<h2 className="text-[28px] font-semibold text-[#1F2937] mb-6">Категории</h2>
			<div className="overflow-x-auto">
				<div className="flex gap-[15px] mb-3">
					{categories.map((category, i) => (
						<div
							key={i}
							onClick={() => onClick?.(category)}
							className="min-w-[180px] h-[111px] bg-white rounded-[25px] items-center justify-center cursor-pointer hover:shadow-md transition overflow-hidden"
						>
							<img
								src={getCategoryImage(category.name)}
								alt={category.name}
								className=""
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default CategoryCard;
