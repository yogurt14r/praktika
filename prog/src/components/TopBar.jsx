import geotag from '../assets/icon_geotag.svg'

const TopBar = () => {
    return (
        <div className="bg-[#FEECDC] w-full h-[50px] flex items-center justify-between">
            <div className="w-[1200px] h-[30px] mx-auto flex items-center justify-between px-[15px]">
                <div className="flex gap-[13px] text-xl">
                    <img src={geotag} /> Якутск
                </div>
                <div className="space-x-[30px] text-[#6B7280]">
                    <a href="/">Главная</a>
                    <a href="/about">О нас</a>
                    <a href="/blog">Блог</a>
                    <a href="/feedback">Оставить отзыв</a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
