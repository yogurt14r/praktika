import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="bg-[#FEECDC] w-full text-black sticky text-center">
                <div claassName="max-w-[1200px] mx-auto">
                    Якутск Главная О нас Блог Оставить отзыв
                </div>
            </div>
            <header className="w-full text-black sticky text-center">
                LOGO search like shopping cart account
            </header>
        </>
    );
};

export default Header;