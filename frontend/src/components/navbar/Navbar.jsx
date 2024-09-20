'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Searchbar from '../search/Searchbar'
import ProfileDropDown from '../profile/ProfileDropDown'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-textBase"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>

                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        <Popover className="relative">
                            <PopoverButton className="group flex items-center gap-x-1 text-sm font-semibold leading-6 text-textBase hover:text-linkBase">
                                Product
                                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-textBase group-hover:text-linkBase" />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-bgContrast shadow-lg ring-1 ring-textBase/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-bgBase"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-bgContrast group-hover:bg-bgBase">
                                                <item.icon aria-hidden="true" className="h-6 w-6 text-textBase group-hover:text-linkBase" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-textBase group-hover:text-linkBase">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                    >
                                        <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                        {item.name}
                                    </a>
                                ))}
                            </div> */}
                            </PopoverPanel>
                        </Popover>

                        <a href="#" className="text-sm font-semibold leading-6 text-textBase hover:text-linkBase">
                            Features
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-textBase hover:text-linkBase">
                            Marketplace
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-textBase hover:text-linkBase">
                            Company
                        </a>
                    </PopoverGroup>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <ProfileDropDown />
                        {/* <a href="#" className="text-sm font-semibold leading-6 text-textBase">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a> */}
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bgContrast px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 fill-gray-200 stroke-textBase stroke-2 group-hover:stroke-linkBase">
                                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                                </svg>
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-textBase"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        {/* Mobile Searchbar */}
                        <div className="my-5">
                            <Searchbar />
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-borderBase/50">
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-textBase hover:text-linkBase"
                                    >
                                        Profile
                                    </a>
                                </div>
                                <div className="space-y-2 py-6">
                                    <Disclosure as="div" className="-mx-3">
                                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-textBase hover:text-linkBase">
                                            Product
                                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 space-y-2">
                                            {[...products, ...callsToAction].map((item) => (
                                                <DisclosureButton
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-textBase hover:text-linkBase"
                                                >
                                                    {item.name}
                                                </DisclosureButton>
                                            ))}
                                        </DisclosurePanel>
                                    </Disclosure>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-textBase hover:text-linkBase"
                                    >
                                        Features
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-textBase hover:text-linkBase"
                                    >
                                        Marketplace
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-textBase hover:text-linkBase"
                                    >
                                        Company
                                    </a>
                                </div>
                                <div className="my-3 divide-y divide-borderBase/50">
                                    <div className="py-6">
                                        <form method="POST" action="#">
                                            <button
                                                type="submit"
                                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-textBase hover:text-red-700"
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
            </header>
            <div className="bg-bgAccent z-10 top-0 left-0 w-[100vw] h-[8vh] lg:h-[13vh] items-end py-2 justify-center absolute flex">
                <div className="relative w-[30vw] hidden lg:block">
                    <Searchbar />
                </div>
            </div>

        </>
    )
}
