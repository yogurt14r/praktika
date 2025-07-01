import React from 'react';

const Cart = () => {
    const cartItems = [
        { id: 1, title: 'Название', description: 'Описание', price: 99, quantity: 1 },
        { id: 2, title: 'Название', description: 'Описание', price: 99, quantity: 1 },
        { id: 3, title: 'Название', description: 'Описание', price: 99, quantity: 1 },
    ];

    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="max-w-[1185px] mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-6">Корзина</h1>

            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 space-y-4">
                    {cartItems.map(item => (
                    <div
                        key={item.id}
                        className="bg-white rounded-[20px] flex items-center p-4 justify-between shadow"
                    >
                        <div className="w-[100px] h-[100px] bg-gray-200 rounded-lg"></div>

                        <div className="flex flex-col justify-between flex-1 px-4">
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                            <button className="text-gray-600 hover:text-red-500 w-fit mt-1">
                            </button>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                            <span className="text-lg font-semibold">{item.price}$</span>
                            <div className="flex items-center gap-2 bg-[#F97316] rounded-full px-3 py-1 text-white">
                                <button className="font-bold text-lg">-</button>
                                <span>{item.quantity}</span>
                                <button className="font-bold text-lg">+</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="w-full max-w-[300px] bg-white rounded-[20px] p-6 shadow">
                    <p className="text-lg font-medium mb-2">
                        Количество товаров: <span className="font-bold">{totalQuantity}</span>
                    </p>
                    <p className="text-lg font-medium mb-6">
                        Итого: <span className="font-bold">{totalPrice}</span>
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
