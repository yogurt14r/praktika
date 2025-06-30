import React from 'react';
import heartIcon from '../assets/icon_like.svg';

const ProductCard = () => {
  return (
    <div className="w-[285px] h-[403px] bg-[#FEECDC] rounded-[20px] shadow-md overflow-hidden flex flex-col justify-between">
      <div className="relative bg-gray-200 h-[285px]">
        <img
          src={heartIcon}
          alt="Добавить в избранное"
          className="absolute top-3 right-3 w-[24px] h-[24px] cursor-pointer"
        />
      </div>

      <div>
        <h4 className="text-[24px] px-[10px] py-[5px] font-semibold text-gray-900">Название</h4>
        <p className="text-[16px] px-[10px] text-gray-500 mt-1">Описание</p>
      </div>
      <div className="w-full flex justify-between py-[5px] items-center gap-">
        <span className="text-[18px] p-[10px] font-medium text-gray-900">99$</span>
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
