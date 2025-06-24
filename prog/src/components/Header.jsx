import { useState } from 'react';
import logo from '/logotipchik.svg'
import icon_like from '../assets/icon_like.svg'
import icon_shoppingCart from '../assets/icon_shoppingCart.svg'
import icon_profile from '../assets/icon_profile_white.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
            <header className="sticky top-0 flex justify-center w-full h-[82px] bg-[#FFF8F1] border-b-1 border-[#D1D5DB] px-[30px] py-[15px] text-black text-center">
                <div className="flex justify-between w-[1200px] h-[52px] gap-[90px] px-[15px] items-center">
                    <img src={logo} className="h-[42px]"/>
                    <div>search</div>
                    <div className="flex gap-[28px]">
                        <img src={icon_like} />
                        <img src={icon_shoppingCart} />
                        <button type="submit" className="flex items-center rounded-[25px] bg-[#F97316] h-[44px] p-[12px] gap-[9px] text-white text-[16px] hover:bg-[#FB923C]">
                            <img src={icon_profile} />
                            <h5>Войти</h5>
                        </button>
                    </div>
                </div>
            </header>
    );
};

export default Header;