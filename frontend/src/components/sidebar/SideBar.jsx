import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { createContext, useState, useContext } from "react";
import SideBarIcon from "./SideBarIcon";
import { MdLibraryBooks, MdCheckCircle, MdMenuBook, MdBookmarkBorder } from "react-icons/md";
import SideBarText from "./SideBarText";

export const SidebarVisible = createContext();

export const useSidebarVisible = () => {
    return useContext(SidebarVisible); // Make sure this is correct
}

const SideBarContent = [
    { text: "All", href: "#", icon: <MdLibraryBooks className="h-6 w-6 text-darkGreen group-hover:text-ultraViolet" />, count: 106879 },
    { text: "Read", href: "#", icon: <MdCheckCircle className="h-6 w-6 text-darkGreen group-hover:text-ultraViolet" />, count: 10 },
    { text: "Currently Reading", href: "#", icon: <MdMenuBook className="h-6 w-6 text-darkGreen group-hover:text-ultraViolet" />, count: 0 },
    { text: "Want to Read", href: "#", icon: <MdBookmarkBorder className="h-6 w-6 text-darkGreen group-hover:text-ultraViolet" />, count: 5348 },
];

export default function SideBar() {
    const { isSidebarCollapsed, setSidebarCollapsed } = useSidebarVisible();
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    const toggleSideBar = () => {
        setSidebarCollapsed(prev => !prev);
        setIsAnimating(prev => !prev);
        setShouldAnimate(true);
    };

    return (
        <div className="flex">
            <div className="flex w-16 flex-col justify-between border-e border-cornsilk bg-onyx rounded-l-md">
                <div>
                    <div className="inline-flex w-16 h-16 items-center justify-center">
                        <span
                            className="grid w-10 h-10 place-content-center rounded-lg bg-darkGreen text-xs group cursor-pointer"
                            onClick={() => toggleSideBar()}
                        >
                            <ChevronLeftIcon className={`w-6 h-6 transition-transform duration-500 
                                ${isSidebarCollapsed ? "rotate-180" : ""} 
                                stroke-cornsilk stroke-2 group-hover:stroke-blush
                                ${shouldAnimate ? (isAnimating ? "animate-fadeOutIn-sidebarIcon" : "animate-fadeOutIn-sidebarIcon") : ""}`}
                            />
                        </span>
                    </div>

                    <div className="h-fit">
                        <div className="p-2">
                            <ul className="space-y-4 border-t border-cornsilk pt-6 pb-4">
                                {SideBarContent.map((item) => (
                                    <li key={item.text}>
                                        <SideBarIcon>
                                            {{
                                                href: item.href,
                                                text: item.text,
                                                icon: item.icon,
                                            }}
                                        </SideBarIcon>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`h-full flex-1 flex-col justify-between bg-onyx transition-all duration-1000 ease-in-out overflow-hidden ${isSidebarCollapsed ? "w-0" : "w-72"}`}>
                <div className="px-3">
                    <div className="inline-flex w-16 h-16 items-center justify-center">
                        <span
                            className="grid w-10 h-10 place-content-center rounded-lg bg-transparent text-xs"
                        >

                        </span>
                    </div>

                    <div className="h-fit">
                        <div className="p-2">
                            <ul
                                className={`space-y-4 border-t border-cornsilk pt-6 transition-transform duration-1000 ease-in-out ${isSidebarCollapsed ? (shouldAnimate ? "animate-fadeOut-sidebar" : "animate-fadeIn-sidebar") : ""}`}>
                                {SideBarContent.map((item) => (
                                    <li key={item.text}>
                                        <SideBarText>
                                            {{
                                                href: item.href,
                                                text: item.text,
                                                count: item.count,
                                            }}
                                        </SideBarText>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
