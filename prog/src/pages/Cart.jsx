import React, { useEffect, useState } from 'react';
import Button from "../components/Button";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/carts/20')
        .then(res => res.json())
        .then(data => {
            setCartItems(data.products);
            setTotalQuantity(data.totalQuantity);
            setTotalPrice(data.discountedTotal);
            setLoading(false);
        })
    }, []);

    if (loading) {
        return <div className="text-center py-10 text-lg">Загрузка корзины...</div>;
    }

    return (
        <div className="max-w-[1185px] mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Корзина</h1>

            <div className="flex gap-[15px]">
                <div className="flex-1 space-y-4">
                    {cartItems.map(item => (
                    <div
                        key={item.id}
                        className="bg-white rounded-[20px] flex items-center p-4 justify-between shadow"
                    >
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-[100px] h-[100px] object-cover rounded-lg"
                        />

                        <div className="flex flex-col justify-between flex-1 px-4">
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-gray-600 text-sm">Цена: {item.price}$</p>
                            <p className="text-gray-600 text-sm">Скидка: {item.discountPercentage}%</p>
                            <button className="text-gray-600 hover:text-red-500 text-sm w-fit mt-1">
                                Удалить
                            </button>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                            <span className="text-lg font-semibold">{item.discountedTotal}$</span>
                            <Button
                                count={item.quantity}
                                readOnly={true}
                            />
                        </div>
                    </div>
                    ))}
                </div>

                <div className="sticky top-[90px] w-[485px] h-[200px] bg-white rounded-[20px] p-6 shadow">
                    <p className="text-lg font-medium mb-2">
                        Количество товаров: <span className="font-bold">{totalQuantity}</span>
                    </p>
                    <p className="text-lg font-medium mb-6">
                        Итого (со скидкой): <span className="font-bold">{totalPrice}$</span>
                    </p>
                    <button className="w-full bg-[#F97316] hover:bg-[#FB923C] text-white py-3 rounded-full font-semibold text-lg">
                        Оформить заказ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
