import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { MdCheck } from "react-icons/md";
import { useState } from "react";

export default function DropdownButton({ text, w, h, px, py, borderColor, colorClass, options }) {
    const defaultColorClass = "baseButtonDefault";
    const [selectedOption, setSelectedOption] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSelectChange = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const removeSelectedOptionOrSelectFirst = () => {
        if (selectedOption) {
            setSelectedOption("");
        } else {
            setSelectedOption(options[0]);
        }
        setIsDropdownOpen(false);
    };

    return (
        <div className="flex flex-col relative">
            <div className={`flex justify-center w-full border-2 border-${borderColor} mt-1 mb-1 ${isDropdownOpen ? "border-t-2 rounded-t-md border-onyx/25" : "rounded-md"}`}>
                <button
                    className={`w-${w} h-${h} px-${px} py-${py} leading-6 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 flex items-center justify-center ${selectedOption ? "bg-teaGreen" : colorClass || defaultColorClass}`}
                    type="button"
                    onClick={() => removeSelectedOptionOrSelectFirst()}
                >
                    {selectedOption ? (
                        <>
                            <MdCheck className="mr-2 ml-2.5" />
                            <span>{selectedOption}</span>
                        </>
                    ) : (
                        <span className="ml-8">{text}</span>
                    )}
                </button>
                <div
                    className={`flex w-10 p-2 border-l-2 leading-6 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${selectedOption ? "bg-teaGreen border-darkGreen" : colorClass || defaultColorClass}`}
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
                            <div
                                className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium text-cornsilk hover:bg-teaGreen hover:text-ultraViolet ${selectedOption === option ? "font-bold" : ""}`}
                                role="menuitem"
                                key={option}
                                onClick={() => handleSelectChange(option)}
                            >
                                {selectedOption === option && <MdCheck className="mr-2" />}
                                <span>{option}</span>
                            </div>

                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
