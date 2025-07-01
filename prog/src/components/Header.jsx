import { useState } from 'react';
import logo from '/logotipchik.svg'
import icon_like from '../assets/icon_like.svg'
import icon_shoppingCart from '../assets/icon_shoppingCart.svg'
import icon_profile from '../assets/icon_profile_white.svg'
import icon_search from '../assets/icon_search.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
            <header className="sticky top-0 flex justify-center w-full h-[82px] bg-[#FFF8F1] border-b-1 border-[#D1D5DB] px-[30px] py-[15px] text-black text-center">
                <div className="flex justify-between w-[1200px] h-[52px] gap-[90px] px-[15px] items-center">
                    <Link to="/">
                        <img src={logo} className="h-[42px]"/>
                    </Link>
                    <div className="flex w-[390px] h-[44px] bg-[#F97316] rounded-[25px] p-[2px] gap-[8px] items-center">
                        <input type="text" placeholder="Найти" className="w-[344px] h-full bg-white rounded-[25px] px-[16px] focus:outline-none" />
                        <img src={icon_search} className="" />
                    </div>
                    <div className="flex gap-[28px]">
                        <img src={icon_like} />
                        <Link to="/cart" className="flex">
                            <img src={icon_shoppingCart} />
                        </Link>
                        <Link to="/auth" className="flex items-center rounded-[25px] bg-[#F97316] h-[44px] p-[12px] gap-[9px] text-white text-[16px] hover:bg-[#FB923C]">
                            <img src={icon_profile} />
                            <h5>Войти</h5>
                        </Link>
                    </div>
                </div>
            </header>
    );
};

export default Header;