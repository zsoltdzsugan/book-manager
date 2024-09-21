"use client"
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from "@headlessui/react"
import {
    AdjustmentsHorizontalIcon,
    BookmarkSquareIcon,
    GlobeAltIcon,
    RocketLaunchIcon,
} from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import Searchbar from "../search/Searchbar"
import ProfileDropDown from "../profile/ProfileDropDown"
import MobileMenu from "./MobileMenu"

const products = [
    { name: "Recommendations", description: "Discover books tailored to your preferences.", href: "#", icon: AdjustmentsHorizontalIcon },
    { name: "New Releases", description: "Stay updated with the latest books.", href: "#", icon: RocketLaunchIcon },
    { name: "Explore", description: "Dive into trending titles from various genres.", href: "#", icon: GlobeAltIcon },
    { name: "All Genres", description: "Browse books by specific genres", href: "#", icon: BookmarkSquareIcon },
]

const navItems = [
    { name: "Home", href: "/home", isDropDown: false, dropDownList: null },
    { name: "Browse", href: "/browse", isDropDown: true, dropDownList: products },
    { name: "My Books", href: "/mybooks", isDropDown: false, dropDownList: null },
    { name: "Community", href: "/community", isDropDown: false, dropDownList: null },
]

export default function Navbar() {


    return (
        <>
            <header className="relative bg-bgContrast border-borderBase border-b-2 shadow-md rounded-b-none sm:rounded-b-lg md:rounded-b-3xl lg:rounded-b-full z-50">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2.5 lg:px-8 ">
                    <div className="flex lg:flex-1">
                        <a href="#" className="group -m-1.5 p-1.5 flex gap-1 hover:fill-linkBase">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-gray-200 stroke-textBase stroke-2 group-hover:stroke-linkBase">
                                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                            </svg>
                            <p className="text-gray-500 font-bold group-hover:text-teal-400 underline">awesom<span className="text-textBase group-hover:text-linkBase">Reads</span></p>
                        </a>
                    </div>
                    <MobileMenu navItems={navItems} />
                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        {navItems.map((item) => (
                            item.isDropDown ? (
                                <Popover key={item.name} className="relative">
                                    <PopoverButton className="group flex items-center gap-x-1 text-sm font-semibold leading-6 text-textBase hover:text-linkBase">
                                        {item.name}
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-textBase group-hover:text-linkBase" />
                                    </PopoverButton>

                                    <PopoverPanel
                                        transition
                                        className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-bgContrast shadow-lg ring-1 ring-textBase/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <div className="p-4">
                                            {item.dropDownList.map((dropDownItem) => (
                                                <div
                                                    key={dropDownItem.name}
                                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-bgBase"
                                                >
                                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-bgContrast group-hover:bg-bgBase">
                                                        <dropDownItem.icon aria-hidden="true" className="h-6 w-6 text-textBase group-hover:text-linkBase" />
                                                    </div>
                                                    <div className="flex-auto">
                                                        <a href={dropDownItem.href} className="block font-semibold text-textBase group-hover:text-linkBase">
                                                            {dropDownItem.name}
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        <p className="mt-1 text-gray-600">{dropDownItem.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </PopoverPanel>
                                </Popover>
                            ) : (
                                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-textBase hover:text-linkBase">
                                    {item.name}
                                </a>
                            )
                        ))}
                    </PopoverGroup>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <ProfileDropDown />
                    </div>
                </nav>

            </header >
            <div className="bg-bgAccent z-10 top-0 left-0 w-[100vw] h-[8vh] lg:h-[13vh] items-end py-2 justify-center absolute flex">
                <div className="relative w-[30vw] hidden lg:block">
                    <Searchbar />
                </div>
            </div>

        </>
    )
}
