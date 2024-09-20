export default function SignUp() {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-textBase">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="/book-open.svg"
                        className="w-10 h-10 mx-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-2 border-borderBase py-1.5 px-1.5 shadow-sm bg-white placeholder:text-borderBase sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-linkBase hover:text-linkAccent">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-2 border-borderBase py-1.5 px-1.5 shadow-sm bg-white placeholder:text-borderBase sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-btnBase text-textBase px-3 py-1.5 text-sm font-semibold leading-6 hover:text-white shadow-sm hover:bg-btnAccent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm">
                        Already a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-linkBase hover:text-linkAccent">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
