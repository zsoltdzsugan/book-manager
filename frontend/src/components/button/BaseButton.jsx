export default function BaseButton({ text, w = "full", h = "full", px = "6", py = "2", colorClass }) {
    const defaultColorClass = "baseButtonDefault";

    return (
        <div className="flex justify-center w-full">
            <button
                className={`w-${w} h-${h} mt-1 mb-1 px-${px} py-${py} leading-6 text-sm font-medium border-2 ${colorClass || defaultColorClass}`}
                type="submit"
            >
                {text}
            </button>
        </div>
    )
}
