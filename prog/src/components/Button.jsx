export default function Button({ count = 0, onAdd, onIncrement, onDecrement, readOnly = false }) {
    if (count === 0 && !readOnly) {
        return (
            <button
                onClick={onAdd}
                className="bg-[#F97316] w-[115px] h-[34px] hover:bg-[#FB923C] text-white px-4 py-1 rounded-[25px] text-[16px] font-medium"
            >
                В корзину
            </button>
        );
    }

    return (
        <div className="flex justify-between items-center bg-[#F97316] w-[115px] h-[34px] text-white rounded-[25px] text-[16px] font-medium overflow-hidden">
            <button
                onClick={!readOnly ? onDecrement : undefined}
                className={`px-3 h-full transition-colors ${!readOnly ? "hover:bg-[#FB923C]" : "cursor-default opacity-50"}`}
                disabled={readOnly}
            >
                -
            </button>
            <span className="px-4">{count}</span>
            <button
                onClick={!readOnly ? onIncrement : undefined}
                className={`px-3 h-full transition-colors ${!readOnly ? "hover:bg-[#FB923C]" : "cursor-default opacity-50"}`}
                disabled={readOnly}
            >
                +
            </button>
        </div>
    );
}
