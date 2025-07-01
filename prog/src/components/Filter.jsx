function Filter({ filters, onChange }) {
    return (
        <div className="sticky top-[90px] w-full max-w-[285px] bg-white rounded-[25px] shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Фильтр</h3>
            <div className="space-y-3 text-sm text-gray-700">
                <label className="block">
                    <input
                        type="checkbox"
                        checked={filters.popular}
                        onChange={(e) => onChange({ ...filters, popular: e.target.checked })}
                    />
                    <span className="ml-2">По популярности</span>
                </label>
                <label className="block">
                    <input
                        type="checkbox"
                        checked={filters.inStock}
                        onChange={(e) => onChange({ ...filters, inStock: e.target.checked })}
                    />
                    <span className="ml-2">В наличии</span>
                </label>
                <label className="block">
                    <input
                        type="checkbox"
                        checked={filters.priceAsc}
                        onChange={(e) => onChange({ ...filters, priceAsc: e.target.checked })}
                    />
                    <span className="ml-2">Сначала дешевые</span>
                </label>
            </div>
        </div>
    );
}

export default Filter;
