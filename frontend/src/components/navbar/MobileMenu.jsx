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
import Logo from "../logo/Logo"

export default function MobileMenu({ navItems }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="lg:hidden flex justify-end z-50">
                <div className="lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="my-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6 stroke-darkGreen hover:stroke-blush" />
                    </button>
                </div>
                <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden" >
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-onyx/50 bg-onyx">
                        <div className="flex items-center justify-between -mx-3.5 my-0.5">
                            <Logo iconSize={6} strokeSize={1} hasTitle={false} isLink={true} />
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-my-1.5 rounded-md p-2.5 text-onyx"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6 stroke-darkGreen hover:stroke-red-500" />
                            </button>
                        </div>
                        {/* Mobile Searchbar */}
                        <div className="my-8">
                            <Searchbar />
                        </div>
                        <div className="flow-root">
                            <div className="-my-6 divide-y divide-onyx/50">
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-darkGreen font-semibold leading-7 hover:text-ultraViolet hover:bg-teaGreen"
                                    >
                                        Profile
                                    </a>
                                </div>
                                <div className="space-y-2 py-6">
                                    {navItems.map((item) => (
                                        item.isDropDown ? (
                                            <Disclosure as="div" className="-mx-3" key={item.name}>
                                                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-darkGreen font-semibold leading-7 hover:text-ultraViolet hover:bg-teaGreen">
                                                    {item.name}
                                                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180 stroke-darkGreen group-hover:stroke-ultraViolet" />
                                                </DisclosureButton>
                                                <DisclosurePanel className="mt-2 space-y-2">
                                                    {item.dropDownList.map((dropDownItem) => (
                                                        <DisclosureButton
                                                            key={dropDownItem.name}
                                                            as="a"
                                                            href={dropDownItem.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-darkGreen hover:text-ultraViolet hover:bg-teaGreen"
                                                        >
                                                            {dropDownItem.name}
                                                        </DisclosureButton>
                                                    ))}
                                                </DisclosurePanel>
                                            </Disclosure>
                                        ) : (
                                            <a
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-darkGreen hover:text-ultraViolet hover:bg-teaGreen"
                                                key={item.name}
                                            >
                                                {item.name}
                                            </a>
                                        )
                                    ))}
                                </div>
                                <div className="my-3 divide-y divide-black py-6">
                                    <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-teaGreen  group">
                                        <form method="POST" action="#">
                                            <button
                                                type="submit"
                                                className=" text-darkGreen group-hover:text-red-500"
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
            </div>
        </>
    )
}
