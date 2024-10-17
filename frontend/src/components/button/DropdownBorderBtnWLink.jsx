import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function DropdownButtonWLink({ text, w, h, px, py, borderColor, colorClass, options }) {
    const defaultColorClass = "borderButtonDefault";
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="flex flex-col relative group">
            <div className={`flex justify-center w-full border-2 border-${borderColor} mt-1 mb-1 ${isDropdownOpen ? "border-t-2 rounded-t-md border-onyx/25" : "rounded-md"}`}>
                <button
                    className={`w-${w} h-${h} px-${px} py-${py} leading-6 text-sm font-medium ${colorClass || defaultColorClass}`}
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <span className="ml-8">{text}</span>
                </button>
                <div
                    className={`flex w-10 p-2 border-l-2 leading-6 text font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${colorClass || defaultColorClass}`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <ChevronDownIcon />
                </div>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div
                    className={`absolute z-50 w-full top-11 mt-1 bg-darkGreen shadow-lg ${isDropdownOpen ? "border-t-2 rounded-b-md border-onyx/25" : ""}`}
                    role="menu"
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <div className="p-2">
                        {options.map((option) => (
                            <a
                                href="#"
                                className={`block rounded-lg px-4 py-2 text-sm font-medium text-cornsilk hover:bg-teaGreen hover:text-ultraViolet`}
                                role="menuitem"
                                key={option}
                            >
                                {option}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
