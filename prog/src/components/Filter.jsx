function Filter({ selectedFilter, onChange }) {
    return (
        <div className="sticky top-[90px] w-full max-w-[285px] h-[285px] bg-white rounded-[25px] shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Фильтр</h3>
            <div className="space-y-3 text-sm text-gray-700">
                <label className="block cursor-pointer">
                    <input
                        type="radio"
                        name="filter"
                        value="popular"
                        checked={selectedFilter === "popular"}
                        onChange={(e) => onChange(e.target.value)}
                        className="mr-2"
                    />
                    По популярности
                </label>
                <label className="block cursor-pointer">
                    <input
                        type="radio"
                        name="filter"
                        value="priceAsc"
                        checked={selectedFilter === "priceAsc"}
                        onChange={(e) => onChange(e.target.value)}
                        className="mr-2"
                    />
                    Сначала дешевые
                </label>
                <label className="block cursor-pointer">
                    <input
                        type="radio"
                        name="filter"
                        value="priceDesc"
                        checked={selectedFilter === "priceDesc"}
                        onChange={(e) => onChange(e.target.value)}
                        className="mr-2"
                    />
                    Сначала дорогие
                </label>
                <label className="block cursor-pointer">
                    <input
                        type="radio"
                        name="filter"
                        value=""
                        checked={selectedFilter === ""}
                        onChange={(e) => onChange("")}
                        className="mr-2"
                    />
                    Без фильтра
                </label>
            </div>
        </div>
    );
}

export default Filter;
