import React from "react";
import like from "../assets/icon_like.svg";

const ProductCard = ({ product }) => {
	return (
		<div className="w-[285px] bg-[#FEECDC] rounded-[20px] shadow overflow-hidden flex flex-col justify-between">
			<div className="bg-white w-[285px] h-[285px] overflow-hidden flex items-center justify-center">
				<img
					src={product.thumbnail}
					alt={product.title}
					className="object-cover h-full hover:scale-110 transition-transform duration-300"
				/>
			</div>

			<div>
				<h4 className="text-[24px] px-[10px] py-[5px] font-semibold text-gray-900 truncate">
					{product.title}
				</h4>
				<p className="text-[16px] px-[10px] text-gray-500 mt-1 truncate">
					{product.description}
				</p>
			</div>
			<div className="w-full flex justify-between py-[5px] items-center gap-">
				<span className="text-[18px] p-[10px] font-medium text-gray-900">
					{product.price}$
				</span>
				<div className="px-[10px]">
					<button className="bg-[#F97316] h-[34px] hover:bg-[#FB923C] text-white px-4 py-1 rounded-[25px] text-[16px] font-medium">
						В корзину
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
