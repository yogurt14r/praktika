import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import Filter from "../components/Filter";

function Catalog() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState("Рекомендации");

    const fetchProducts = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setFilteredProducts(data.products);
            });
    };

    useEffect(() => {
        fetchProducts("https://dummyjson.com/products?limit=194&order=desc");
    }, []);

    const handleCategoryClick = (category) => {
        setCategoryTitle(category.name);
        fetchProducts(category.url);
    };

    const [selectedFilter, setSelectedFilter] = useState("popular");

    useEffect(() => {
        let filtered = [...products];

        if (selectedFilter === "popular") {
            filtered.sort((a, b) => b.rating - a.rating);
        } else if (selectedFilter === "priceAsc") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (selectedFilter === "priceDesc") {
            filtered.sort((a, b) => b.price - a.price);
        } else if (selectedFilter === "priceDesc") {
            filtered.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(filtered);
    }, [selectedFilter, products]);


    return (
        <div className="py-10 px-4">
            <div className="max-w-[1185px] mx-auto flex flex-col gap-10">
                <CategoryCard onClick={handleCategoryClick} />
                <h2 className="text-[28px] font-semibold text-[#1F2937]">{categoryTitle}</h2>
                <div className="flex flex-row gap-[15px]">
                    <Filter selectedFilter={selectedFilter} onChange={setSelectedFilter} />
                    <div className="flex-1">
                        <div className="grid grid-cols-3 gap-[15px]">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;
