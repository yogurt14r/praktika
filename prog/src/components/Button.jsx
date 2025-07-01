import { useState } from "react";

export default function AddToCartButton() {
	const [count, setCount] = useState(0);

	const addToCart = () => setCount(1);
	const increment = () => setCount(c => c + 1);
	const decrement = () => setCount(c => (c > 1 ? c - 1 : 0));

	if (count === 0) {
	return (
		<button
			onClick={addToCart}
			className="bg-[#F97316] w-[115px] h-[34px] hover:bg-[#FB923C] text-white px-4 py-1 rounded-[25px] text-[16px] font-medium"
		>
			В корзину
		</button>
	);
	}

	return (
		<div className="flex justify-between items-center bg-[#F97316] w-[115px] h-[34px] text-white rounded-[25px] text-[16px] font-medium overflow-hidden">
			<button
				onClick={decrement}
				className="px-3 h-full hover:bg-[#FB923C] transition-colors"
			>
				-
			</button>
			<span className="px-4">{count}</span>
			<button
				onClick={increment}
				className="px-3 h-full hover:bg-[#FB923C] transition-colors"
			>
				+
			</button>
		</div>
	);
}
