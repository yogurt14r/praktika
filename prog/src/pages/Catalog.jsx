import React from "react"
import ProductCard from "../components/ProductCard"

function Catalog() {

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch("https://dummyjson.com/products?limit=12")
    //     .then(res => res.json())
    //     .then(data => setProducts(data.products))
    //     .catch(err => console.error("Ошибка загрузки:", err));
    // }, []);

    return (
        <div className="min-h-screen py-10 px-4">
            <div className="max-w-[1185px] mx-auto flex flex-col gap-10">
                <div>
                    <h2 className="text-[28px] font-semibold text-[#1F2937] mb-6">Категории</h2>
                    <div className="flex flex-wrap gap-[15px]">
                        {Array.from({ length: 12 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-[85px] h-[111px] bg-white rounded-[20px] shadow flex items-center justify-center text-sm font-medium text-gray-700 hover:shadow-md cursor-pointer transition"
                        >
                            Категория {i + 1}
                        </div>
                        ))}
                    </div>
                </div>

                <h2 className="text-[28px] font-semibold text-[#1F2937]">Название категории</h2>

                <div className="flex flex-col lg:flex-row gap-[15px]">
                    <div className="w-full max-w-[285px] bg-white rounded-[25px] shadow p-6">
                        <h3 className="text-lg font-semibold mb-4">Фильтр</h3>
                        <div className="space-y-3 text-sm text-gray-700">
                            <div><input type="checkbox" /> По популярности</div>
                            <div><input type="checkbox" /> По цене</div>
                            <div><input type="checkbox" /> В наличии</div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px]">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <ProductCard key={i} />
                            ))}
                        </div>

                        <div className="flex justify-center mt-8 gap-2">
                            <button className="px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100">1</button>
                            <button className="px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100">2</button>
                            <button className="px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100">3</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;
