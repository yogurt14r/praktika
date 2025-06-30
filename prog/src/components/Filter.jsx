function Filter() {
    return (
    <div className="sticky top-[90px] w-full max-w-[285px] h-[285px] bg-white rounded-[25px] shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Фильтр</h3>
        <div className="space-y-3 text-sm text-gray-700">
            <div><input type="checkbox" /> По популярности</div>
            <div><input type="checkbox" /> По цене</div>
            <div><input type="checkbox" /> В наличии</div>
        </div>
    </div>
    );
}
export default Filter;
