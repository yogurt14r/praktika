import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-[#1F2937] text-white px-4 pt-12 pb-12">
			<div className="max-w-[1200px] mx-auto flex justify-between">

				<div className="flex flex-col w-[250px] gap-4">
					<h4 className="text-lg font-bold">LOGOTIPCHIK</h4>
					<p className="text-sm text-gray-300">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente adipisci quidem sunt, quia ducimus porro architecto natus eligendi. Inventore est adipisci qui alias assumenda ratione ea quisquam atque. Odio, architecto!
					</p>
				</div>

				<div className="flex flex-col w-[250px] gap-4">
					<h4 className="text-lg font-semibold">Покупателям</h4>
					<ul className="space-y-2 text-sm text-gray-300">
						<li><Link to="#" className="hover:text-white">Частые вопросы</Link></li>
						<li><Link to="#" className="hover:text-white">Покупать как бизнес</Link></li>
						<li><Link to="#" className="hover:text-white">Юридическая информация</Link></li>
						<li><Link to="#" className="hover:text-white">Доставка по клику из пункта выдачи</Link></li>
					</ul>
				</div>
				<div className="flex flex-col w-[250px] gap-4">
					<h4 className="text-lg font-semibold">Продавцам и партнёрам</h4>
					<ul className="space-y-2 text-sm text-gray-300">
						<li><Link to="#" className="hover:text-white">Продавать товары</Link></li>
						<li><Link to="#" className="hover:text-white">Открыть пункт выдачи</Link></li>
						<li><Link to="#" className="hover:text-white">Предложить помещение</Link></li>
						<li><Link to="#" className="hover:text-white">Развозить грузы</Link></li>
						<li><Link to="#" className="hover:text-white">Доставлять заказы</Link></li>
					</ul>
				</div>

				<div className="flex flex-col w-[250px] gap-4">
					<h4 className="text-lg font-semibold">Подписывайтесь на нас</h4>
					<div className="flex gap-3">
						<a href="https://web.telegram.org/" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
							<img src="../assets/telegram.svg" alt="Telegram" className="w-5 h-5" />
						</a>
						<a href="https://instagram.com" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
							<img src="../assets/instagram.svg" alt="Instagram" className="w-5 h-5" />
						</a>
						<a href="https://vk.com" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
							<img src="../assets/vk.svg" alt="VK" className="w-5 h-5" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;