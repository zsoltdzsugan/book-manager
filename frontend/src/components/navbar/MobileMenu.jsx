import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"
import Searchbar from "../search/Searchbar"

export default function MobileMenu({ navItems }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="lg:hidden">
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="my-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="h-6 w-6 hover:stroke-lightBtnAccent dark:hover:stroke-darkBtnAccent" />
                </button>
            </div>
            <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden" >
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-lightBorderBase dark:sm:ring-darkBorderBase bg-lightBgContrast dark:bg-darkBgContrast">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 fill-lightBgBase stroke-lightBtnAccent dark:fill-lightBgBase dark:stroke-darkBtnBase stroke-2 hover:stroke-lightBtnBase dark:hover:stroke-darkBtnAccent">
                                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                            </svg>
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-mx-3.5 -my-1.5 rounded-md p-2.5 text-textBase"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6 hover:stroke-red-500 dark:hover:stroke-red-700" />
                        </button>
                    </div>
                    {/* Mobile Searchbar */}
                    <div className="my-5">
                        <Searchbar />
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-lightBorderBase dark:divide-darkBorderBase">
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:text-lightBtnAccent dark:hover:text-darkBtnAccent"
                                >
                                    Profile
                                </a>
                            </div>
                            <div className="space-y-2 py-6">
                                {navItems.map((item) => (
                                    item.isDropDown ? (
                                        <Disclosure as="div" className="-mx-3" key={item.name}>
                                            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:text-lightBtnAccent dark:hover:text-darkBtnAccent">
                                                {item.name}
                                                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180 group-hover:stroke-lightBtnAccent dark:group-hover:stroke-darkBtnBase" />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {item.dropDownList.map((dropDownItem) => (
                                                    <DisclosureButton
                                                        key={dropDownItem.name}
                                                        as="a"
                                                        href={dropDownItem.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:text-lightLinkBase dark:hover:text-darkLinkBase"
                                                    >
                                                        {dropDownItem.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </Disclosure>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-lightBtnAccent dark:hover:text-darkBtnAccent"
                                            key={item.name}
                                        >
                                            {item.name}
                                        </a>
                                    )
                                ))}
                            </div>
                            <div className="my-3 divide-y divide-borderBase/50">
                                <div className="py-6">
                                    <form method="POST" action="#">
                                        <button
                                            type="submit"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:text-red-500 dark:hover:text-red-700"
                                            role="menuitem"
                                        >
                                            Logout
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </DialogPanel>
            </Dialog>
        </>
    )
}
