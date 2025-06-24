import React from "react"

function Auth() {
    return (
        <div className="flex items-center justify-center pt-[100px] px-4">
            <div className="flex flex-col gap-[100px]">
                <h1 className="text-[36px] text-[#1F2937] font-medium text-center mb-6">ДОБРО ПОЖАЛОВАТЬ!<br />ВОЙДИТЕ В СВОЙ АККАУНТ</h1>
                <form className="flex flex-col gap-[35px] w-[584px]">
                    <div>
                        <label className="block text-sm mb-1 font-medium text-gray-700">Email</label>
                        <input
                        type="email"
                        placeholder="example@mail.com"
                        className="w-full h-[60px] px-4 py-3 border-[2px] border-[#D1D5DB] rounded-[25px] hover:border-[#F97316] focus:outline-none focus:border-[#F97316]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium text-gray-700">Пароль</label>
                        <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full h-[60px] px-4 py-3 border-[2px] border-[#D1D5DB] rounded-[25px] hover:border-[#F97316] focus:outline-none focus:border-[#F97316]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full h-[55px] bg-[#F97316] text-white text-[24px] items-center rounded-[25px] hover:bg-[#FB923C] transition font-medium"
                        >
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Auth;