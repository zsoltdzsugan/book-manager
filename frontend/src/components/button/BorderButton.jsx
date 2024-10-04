export default function BorderButton({ text, px, py, colorClass }) {
    const defaultColorClass = "borderButtonDefault";

    return (
        <div className="flex justify-center w-full">
            <button
                className={`w-full rounded-md mt-1 mb-1 px-${px} py-${py} leading-6 text-sm font-medium border-2 ${colorClass || defaultColorClass}`}
                type="submit"
            >
                {text}
            </button>
        </div>
    )
}
