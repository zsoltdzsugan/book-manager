export default function SignUp() {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 sign-in-svg">
                        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                    </svg>
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight">
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
                                    className="block w-full rounded-md border-2 py-1.5 px-1.5 shadow-sm sm:text-sm sm:leading-6 sign-in-input"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold sign-in-link">
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
                                    className="block w-full rounded-md py-1.5 px-1.5 shadow-sm sm:text-sm sm:leading-6 sign-in-input"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm sign-in-button"
                            >
                                Sign in
                            </button>
                            <div className="flex gap-2 my-2">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm sign-in-button"
                                >
                                    Sign in w/ Google
                                </button>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm sign-in-button"
                                >
                                    Sign in w/ Facebook
                                </button>
                            </div>
                        </div>
                    </form>

                    <p className="mt-7 text-center text-sm">
                        Not a member yet?{' '}
                        <a href="#" className="font-semibold leading-6 sign-in-link">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
