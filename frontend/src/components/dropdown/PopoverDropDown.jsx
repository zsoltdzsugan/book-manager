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
        <div className="hidden relative lg:flex lg:flex-grow lg:justify-center -ml-24 z-50">
            <PopoverGroup className="relative hidden lg:flex lg:gap-x-12">
                {navItems.filter((item) => item.onLargeScreen).map((item) =>
                    item.isDropDown ? (
                        <Popover key={item.name} className="relative z-50">
                            <PopoverButton className="group flex items-center gap-x-1 text-md font-bold leading-6 text-darkGreen hover:text-ultraViolet">
                                {item.name}
                                <ChevronDownIcon className="h-5 w-5 fill-darkGreen group-hover:fill-ultraViolet" />
                            </PopoverButton>
                            <PopoverPanel className="z-50 bg-onyx left-1/2 transform -translate-x-1/2 absolute top-full mt-3 w-screen max-w-md overflow-hidden rounded-xl shadow-lg ring-1 ring-teaGreen">
                                <div className="p-4">
                                    {item.dropDownList.map((dropDownItem) => (
                                        <DropDownItem key={dropDownItem.name} {...dropDownItem} />
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Popover>
                    ) : (
                        <a key={item.name} href={item.href} className="text-md font-bold leading-6 text-darkGreen hover:text-ultraViolet">
                            {item.name}
                        </a>
                    )
                )}
            </PopoverGroup>
        </div>
    );
}

