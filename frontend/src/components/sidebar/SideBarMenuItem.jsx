import { useContext } from "react";
import { SideBarContext } from "./SideBar";

export default function SideBarMenuItem({ icon, text, active, num }) {
    const { expanded } = useContext(SideBarContext);

    return (
        <li
            className={`relative flex items-center space-x-2 py-2 px-4 font-medium rounded-md cursor-pointer transition-colors group
                ${active ? 'bg-indigo-100 text-indigo-800' : 'text-gray-600 hover:bg-indigo-50'}`}
        >
            {icon}
            {/* Absolute positioning for the text */}
            <span className={`absolute left-full transition-all delay-200 opacity-0 ${expanded ? "opacity-100 left-14" : "hidden w-0"}`}>
                {text}
            </span>
            {/* Render the number badge */}
            {num && (
                <div className={`absolute text-white font-bold rounded-md flex items-center justify-center
                    ${expanded ? "bg-indigo-400 right-2 px-2 py-1 text-xs" : "bg-indigo-500 -top-2 -right-2 p-1 min-w-8 h-4 text-[12px]"}`}>
                    {num}
                </div>
            )}
            {/* Tooltip-like text when not expanded */}
            {!expanded && (
                <div className={`z-10 absolute left-full whitespace-nowrap rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    );
}
