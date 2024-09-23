
import {
    AdjustmentsHorizontalIcon,
    BookmarkSquareIcon,
    GlobeAltIcon,
    RocketLaunchIcon,
} from "@heroicons/react/24/outline";

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

const Navbar = () => (
    <>
        <header className="relative bg-lightBgContrast border-lightBorderBase dark:bg-darkBgContrast dark:border-darkBorderBase border-b-2 shadow-md z-50 mb-20">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-2.5 lg:px-8">
                {/* Logo */}
                <Logo />
                {/* Mobile Menu */}
                <MobileMenu navItems={navItems} />
                {/* Desktop Menu */}
                <PopoverDropDown navItems={navItems} />
                {/* Profile Dropdown */}
                <ProfileDropDown />
            </nav>
        </header>

        {/* Search Bar */}
        <div className="bg-lightBgAccent dark:bg-darkBgAccent z-10 top-0 left-0 w-[100vw] h-[8vh] lg:h-[13vh] items-end py-2 justify-center absolute flex">
            <div className="relative w-[30vw] hidden lg:block">
                <Searchbar />
            </div>
        </div>
    </>
);

export default Navbar;
