export default function ProfileSettings() {
    return (
        <div className="bg-buff/10 shadow-md shadow-onyx/50 border border-onyx/25 rounded-lg p-4 h-full">
            <div className="w-[95%] mx-auto h-full gap-4 flex flex-col">
                <div className="flex">
                    <form action="#" className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>

                            <input
                                type="email"
                                id="Email"
                                name="email"
                                className="mt-1 w-full px-1 py-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                Change Email
                            </label>

                            <input
                                type="email"
                                id="Email"
                                name="email"
                                className="mt-1 w-full px-1 py-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                Change Password
                            </label>

                            <input
                                type="text"
                                id="LastName"
                                name="last_name"
                                className="mt-1 w-full p-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                Confirm New Password
                            </label>

                            <input
                                type="password"
                                id="PasswordConfirmation"
                                name="password_confirmation"
                                className="mt-1 w-full p-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div className="flex mt-4 sm:flex sm:items-center sm:gap-4">
                            <button
                                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                            >
                                Save changes
                            </button>
                        </div>
                    </form >
                </div>
            </div>
        </div>
    )
}
