import React, { useState } from "react";
import icon_like from "../assets/icon_like.svg";
import icon_liked from "../assets/icon_liked.svg";
import Button from "./Button";

const ProductCard = ({ product }) => {
	const [count, setCount] = useState(0);
	const [liked, setLiked] = useState(false);

	return (
		<div className="w-[285px] bg-[#FEECDC] rounded-[20px] shadow overflow-hidden flex flex-col justify-between">
			<div className="relative bg-white w-[285px] h-[285px] overflow-hidden flex items-center justify-center">
				<img
					src={product.thumbnail}
					alt={product.title}
					className="object-cover h-full hover:scale-110 transition-transform duration-300"
				/>
				<button
					onClick={() => setLiked(!liked)}
					className="absolute top-[18px] right-[18px] w-[24px] h-[24px] cursor-pointer"
				>
					<img
						src={liked ? icon_liked : icon_like}
						alt="like"
					/>
				</button>
			</div>

			<div>
				<h4 className="text-[24px] px-[10px] font-semibold text-gray-900 line-clamp-1">
					{product.title}
				</h4>
				<p className="text-[16px] px-[10px] text-gray-500 mt-1 line-clamp-3">
					{product.description}
				</p>
			</div>
			<div className="w-full flex justify-between py-[5px] items-center gap-">
				<span className="text-[18px] p-[10px] font-medium text-gray-900">
					{product.price}$
				</span>
				<div className="px-[10px]">
					<Button 
						count={count}
						onAdd={() => setCount(1)}
						onIncrement={() => setCount(c => c + 1)}
						onDecrement={() => setCount(c => Math.max(0, c - 1))}
					/>
					{/* <button className="bg-[#F97316] h-[34px] hover:bg-[#FB923C] text-white px-4 py-1 rounded-[25px] text-[16px] font-medium">
						В корзину
					</button> */}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
