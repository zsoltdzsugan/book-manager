export default function BaseButton({ text, px, py, colorClass }) {
    const defaultColorClass = "baseButtonDefault";

    return (
        <div className="flex justify-center w-full">
            <button
                className={`w-full rounded-md mt-1 mb-1 px-${px} py-${py} leading-6 text-sm font-medium border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${colorClass || defaultColorClass}`}
                type="submit"
            >
                {text}
            </button>
        </div>
    )
}
