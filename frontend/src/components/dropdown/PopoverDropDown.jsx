import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import DropDownItem from "./DropDownItem";

export default function PopoverDropdown({ navItems }) {
    return (
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            {navItems.filter((item) => item.onLargeScreen).map((item) =>
                item.isDropDown ? (
                    <Popover key={item.name} className="relative">
                        <PopoverButton className="group flex items-center gap-x-1 text-sm font-semibold leading-6 hover:text-lightBtnAccent dark:hover:text-darkBtnAccent">
                            {item.name}
                            <ChevronDownIcon className="h-5 w-5 group-hover:fill-lightBtnAccent dark:hover:text-darkBtnAccent" />
                        </PopoverButton>
                        <PopoverPanel className="bg-lightBgContrast dark:bg-darkBgContrast absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-lightBorderBase dark:ring-darkBorderBase">
                            <div className="p-4">
                                {item.dropDownList.map((dropDownItem) => (
                                    <DropDownItem key={dropDownItem.name} {...dropDownItem} />
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>
                ) : (
                    <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 hover:text-lightBtnAccent dark:hover:text-darkBtnAccent">
                        {item.name}
                    </a>
                )
            )}
        </PopoverGroup>
    )
}
