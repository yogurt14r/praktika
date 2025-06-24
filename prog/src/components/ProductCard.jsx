import React from 'react';
import heartIcon from '../assets/icon_like.svg';

const ProductCard = () => {
  return (
    <div className="w-[285px] h-[403px] bg-white rounded-[20px] shadow-md overflow-hidden flex flex-col justify-between">
      <div className="relative bg-gray-200 h-[285px]">
        <img
          src={heartIcon}
          alt="Добавить в избранное"
          className="absolute top-3 right-3 w-[24px] h-[24px] cursor-pointer"
        />
      </div>

      <div className="bg-[#FFFAF5] px-4 py-3 h-[163px] flex flex-col justify-between">
        <div>
          <h3 className="text-[18px] font-semibold text-gray-900">Название</h3>
          <p className="text-sm text-gray-500 mt-1">Описание</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[18px] font-medium text-gray-900">99$</span>
          <button className="bg-[#F97316] hover:bg-[#FB923C] text-white px-4 py-1 rounded-[20px] text-sm font-medium">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
