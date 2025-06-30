import React from "react"
import { Link } from "react-router-dom";

function Auth() {
    return (
        <div className="flex items-center justify-center pt-[100px] px-4">
            <div className="flex flex-col gap-[100px]">
                <h1 className="text-[36px] text-[#1F2937] font-medium text-center mb-6">ДОБРО ПОЖАЛОВАТЬ!<br />ВОЙДИТЕ В СВОЙ АККАУНТ</h1>
                <form className="flex flex-col gap-[20px] w-[584px]">
                    <div className="relative w-full h-[60px]">
                        <input
                            type="email"
                            id="email"
                            placeholder=" "
                            required
                            className="peer w-full h-full px-4 border-[2px] border-[#D1D5DB] rounded-[25px] text-gray-900 placeholder-transparent transition-all hover:border-[#F97316] focus:outline-none focus:border-[#F97316]"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-4 top-[-10px] text-sm text-gray-700 transition-all 
                                peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-hover:text-[#F97316]
                                peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-[#F97316] bg-[#FFF8F1] px-1"
                        >
                            Email
                        </label>
                    </div>

                    <div className="relative w-full h-[60px]">
                        <input
                            type="password"
                            id="password"
                            placeholder=" "
                            required
                            className="peer w-full h-full px-4 border-[2px] border-[#D1D5DB] rounded-[25px] text-gray-900 placeholder-transparent transition-all hover:border-[#F97316] focus:outline-none focus:border-[#F97316]"
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-4 top-[-10px] text-sm text-gray-700 transition-all 
                                peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-hover:text-[#F97316]
                                peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-[#F97316] bg-[#FFF8F1] px-1"
                        >
                            Пароль
                        </label>
                    </div>
                    <Link
                        to="/"
                        className="flex justify-center w-full h-[55px] bg-[#F97316] text-white text-[24px] items-center rounded-[25px] hover:bg-[#FB923C] transition font-medium"
                    >
                        Войти
                    </Link>
                </form>
            </div>
        </div>
    );
}
export default Auth;