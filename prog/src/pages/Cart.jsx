import React from "react"

export default function Cart() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F6F6F6] px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex justify-center mb-6">
                    <img
                        src="/logo.svg"
                        alt="Logo"
                        className="h-12"
                    />
                </div>

                <h1 className="text-2xl font-bold text-center mb-6">Вход в аккаунт</h1>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm mb-1 font-medium text-gray-700">Email</label>
                        <input
                        type="email"
                        placeholder="example@mail.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium text-gray-700">Пароль</label>
                        <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-medium"
                    >
                        Войти
                    </button>
                </form>

                <div className="flex justify-between items-center mt-5 text-sm text-gray-600">
                    <a href="/register" className="hover:underline">Регистрация</a>
                    <a href="/forgot-password" className="hover:underline">Забыли пароль?</a>
                </div>
            </div>
        </div>
    );
}
