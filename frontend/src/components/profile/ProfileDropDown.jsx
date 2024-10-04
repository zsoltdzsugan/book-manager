import { useState } from "react"

const profileMenuItems = [
    { name: "My profile", href: "profile" },
    { name: "Settings", href: "settings" },
    { name: "Help", href: "help" },

]

const ProfileDropDown = () => {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);

    return (
        <div className="hidden lg:flex lg:justify-end">
            <div className="hidden md:relative md:block">
                <button
                    type="button"
                    className="overflow-hidden rounded-full border border-teaGreen shadow-inner"
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                >
                    <span className="sr-only">Toggle dashboard menu</span>

                    <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="size-10 object-cover"
                    />

                </button>
                {profileMenuOpen && (
                    <div
                        className="absolute end-0 z-50 mt-0.5 w-56 divide-y divide-teaGreen rounded-md border border-teaGreen bg-onyx shadow-lg"
                        role="menu"
                        onMouseLeave={() => setProfileMenuOpen(false)}
                    >
                        <div className="p-2">
                            {profileMenuItems.map((item) => (
                                <a
                                    href={item.href}
                                    className="block rounded-lg px-4 py-2 text-sm text-darkGreen hover:bg-teaGreen hover:text-ultraViolet font-semibold"
                                    role="menuitem"
                                    key={item.name}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="p-2">
                            <form method="POST" action="#">
                                <button
                                    type="submit"
                                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-darkGreen hover:bg-teaGreen hover:text-red-500 font-semibold group"
                                    role="menuitem"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-4 stroke-darkGreen group-hover:stroke-red-500 dark:group-hover:stroke-red-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                                        />
                                    </svg>

                                    Logout
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>

            <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ProfileDropDown