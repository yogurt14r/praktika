import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import CategoryCard from "../components/CategoryCard";
import Filter from "../components/Filter";

function Catalog() {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=194&sortBy=rating&order=desc")
        .then(res => res.json())
        .then(data => setProducts(data.products))
    }, []);

    return (
        <div className="py-10 px-4">
            <div className="max-w-[1185px] mx-auto flex flex-col gap-10">
                <CategoryCard />
                <h2 className="text-[28px] font-semibold text-[#1F2937]">Рекомендации</h2>
                <div className="flex flex-row gap-[15px]">
                    <Filter />
                    <div className="flex-1">
                        <div className="grid grid-cols-3 gap-[15px]">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
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
