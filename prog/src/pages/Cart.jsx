import React, { useEffect, useState } from 'react';
import Button from "../components/Button";
import trash from "../assets/icon_trash.svg"

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDiscountedPrice, setTotalDiscountedPrice] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/carts/20')
        .then(res => res.json())
        .then(data => {
            setCartItems(data.products);
            setTotalQuantity(data.totalQuantity);
            setTotalPrice(data.total);
            setTotalDiscountedPrice(data.discountedTotal);
            setLoading(false);
        })
    }, []);

    if (loading) {
        return <div className="text-center py-10 text-lg">Загрузка корзины...</div>;
    }

    return (
        <div className="max-w-[1185px] mx-auto py-10">
            <h1 className="text-[48px] font-semibold mb-6">Корзина</h1>

            <div className="flex gap-[15px]">
                <div className="flex-1 space-y-4">
                    {cartItems.map(item => (
                    <div
                        key={item.id}
                        className="bg-white rounded-[20px] flex items-center p-[15px] justify-between shadow"
                    >
                        <div className="flex gap-[10px]">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-[150px] h-[150px] object-cover rounded-lg"
                            />
                            <div className="flex flex-col h-[150px] justify-between flex-1">
                                <div className="flex flex-col gap-[5px]">
                                    <h3 className="font-semibold text-[16px]">{item.title}</h3>
                                    <div className="text-[14px]">
                                        <p className="text-gray-600">Цена: {item.price}$</p>
                                        <p className="text-gray-600">Скидка: {item.discountPercentage}%</p>
                                    </div>
                                </div>
                                <button>
                                    <img src={trash} className="h-[24px]"/>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col h-[150px] justify-between items-end">
                            <span className="text-[24px] font-semibold">{item.discountedTotal}$</span>
                            <Button
                                count={item.quantity}
                                readOnly={true}
                            />
                        </div>
                    </div>
                    ))}
                </div>

                <div className="sticky top-[90px] flex flex-col justify-between w-[485px] h-[375px] bg-white rounded-[20px] p-[15px] shadow">
                    <div className="flex justify-between items-center text-[24px] font-medium">
                        <p>Количество товаров:</p>
                        <p>{totalQuantity}</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="flex justify-between items-center text-[24px] font-semibold mb-[5px]">
                                <p>Итого:</p>
                                <p>{totalPrice}$</p>
                            </div>
                            <div className="flex justify-between items-center text-[24px] font-semibold mb-[5px]">
                                <p>Итого (со скидкой):</p>
                                <p>{totalDiscountedPrice}$</p>
                            </div>
                        </div>
                        <button className="w-full bg-[#F97316] hover:bg-[#FB923C] text-white py-3 rounded-full font-semibold text-lg">
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
