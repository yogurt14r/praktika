import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import Filter from "../components/Filter";

function Catalog() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState("Рекомендации");
    const [filters, setFilters] = useState({
        popular: false,
        inStock: false,
        priceAsc: false
    });

    const fetchProducts = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setFilteredProducts(data.products);
            });
    };

    useEffect(() => {
        fetchProducts("https://dummyjson.com/products?limit=194&sortBy=rating&order=desc");
    }, []);

    const handleCategoryClick = (category) => {
        setCategoryTitle(category.name);
        fetchProducts(category.url);
    };

    useEffect(() => {
        let filtered = [...products];

        if (filters.inStock) {
            filtered = filtered.filter(p => p.stock > 0);
        }

        if (filters.popular) {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        if (filters.priceAsc) {
            filtered.sort((a, b) => a.price - b.price);
        }

        setFilteredProducts(filtered);
    }, [filters, products]);

    return (
        <div className="py-10 px-4">
            <div className="max-w-[1185px] mx-auto flex flex-col gap-10">
                <CategoryCard onClick={handleCategoryClick} />
                <h2 className="text-[28px] font-semibold text-[#1F2937]">{categoryTitle}</h2>
                <div className="flex flex-row gap-[15px]">
                    <Filter filters={filters} onChange={setFilters} />
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
