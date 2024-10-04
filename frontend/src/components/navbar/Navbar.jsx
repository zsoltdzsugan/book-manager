import { useEffect, useState } from 'react';
import {
    AdjustmentsHorizontalIcon,
    BookmarkSquareIcon,
    GlobeAltIcon,
    RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/20/solid"
import Searchbar from "../search/Searchbar";
import ProfileDropDown from "../profile/ProfileDropDown";
import MobileMenu from "./MobileMenu";
import Logo from "../logo/Logo";
import PopoverDropDown from "../dropdown/PopoverDropDown";

const products = [
    { name: "Recommendations", description: "Discover books tailored to your preferences.", href: "#", icon: AdjustmentsHorizontalIcon },
    { name: "New Releases", description: "Stay updated with the latest books.", href: "#", icon: RocketLaunchIcon },
    { name: "Explore", description: "Dive into trending titles from various genres.", href: "#", icon: GlobeAltIcon },
    { name: "All Genres", description: "Browse books by specific genres", href: "#", icon: BookmarkSquareIcon },
];

const navItems = [
    { name: "Home", href: "/home", isDropDown: false, dropDownList: null, onLargeScreen: true },
    { name: "Browse", href: "/browse", isDropDown: true, dropDownList: products, onLargeScreen: true },
    { name: "My Books", href: "/mybooks", isDropDown: false, dropDownList: null, onLargeScreen: true },
    { name: "Community", href: "/community", isDropDown: false, dropDownList: null, onLargeScreen: true },
    { name: "Settings", href: "/settings", isDropDown: false, dropDownList: null, onLargeScreen: false },
    { name: "Help", href: "/help", isDropDown: false, dropDownList: null, onLargeScreen: false },
];

const Navbar = ({ onHeightChange }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Function to toggle collapse state
    const toggleSearchBar = () => {
        setIsCollapsed(!isCollapsed);
    };

    useEffect(() => {
        const navbarHeight = isCollapsed ? '6rem' : '9rem';
        onHeightChange(navbarHeight)
    }, [isCollapsed, onHeightChange])

    return (
        <>
            <header
                className={`z-40 relative mb-4 bg-gradient-to-b from-teaGreen to-darkGreen
                    transition-all duration-[1s] ease-in-out ${isCollapsed ? 'h-24' : 'h-24 lg:h-36'
                    }`}
            >
                <nav className="z-40 flex lg:block max-w-full lg:rounded-b-full shadow-md shadow-onyx/50 p-2.5 lg:px-8 bg-onyx">
                    <div className="flex justify-between items-center bg-transparent w-full md:px-4 lg:max-w-7xl mx-auto">
                        {/* Logo */}
                        <Logo iconSize={6} strokeSize={1} hasTitle={true} isLink={true} />
                        {/* Mobile Menu */}
                        <MobileMenu navItems={navItems} />
                        {/* Desktop Menu */}
                        <PopoverDropDown navItems={navItems} />
                        {/* Profile Dropdown */}
                        <ProfileDropDown />
                    </div>
                </nav>

                {/* Searchbar */}
                <div
                    className={`z-10 mt-4 max-w-xl mx-auto hidden lg:block transition-transform duration-[1s] ease-in-out
                        ${isCollapsed ? 'animate-fadeOut opacity-0' : 'animate-fadeIn'}`}
                >
                    <Searchbar />
                </div>

                {/* Chevron Icon */}
                <div className="hidden lg:flex justify-end -my-2 mx-2 cursor-pointer">
                    <ChevronUpIcon
                        aria-hidden="true"
                        className={`h-6 w-6 rounded-full flex-none transition-transform duration-[1s] 
                            ${isCollapsed ? 'rotate-180 -translate-y-12' : ''} 
                            stroke-ultraViolet fill-ultraViolet hover:stroke-blush hover:fill-blush`}
                        onClick={toggleSearchBar}
                    />
                </div>
            </header>
        </>
    );
};

export default Navbar;


