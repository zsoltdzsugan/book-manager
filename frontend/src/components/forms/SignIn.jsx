import BaseButton from "../button/BaseButton";
import BorderButton from "../button/BorderButton";
import Logo from "../logo/Logo";
import GoogleLogo from "../logo/GoogleLogo"
import BasicPasswordInput from "../input/BasicPasswordInput";

export default function SignUp() {
    return (
        <div className="z-40 rounded-lg bg-cornsilk shadow-md shadow-onyx border-2 border-onyx/50 w-full lg:w-[460px] lg:h-[550px]">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
                    <Logo iconSize={10} strokeSize={1} hasTitle={false} isLink={false} />
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
                            <div className="flex flex-col items-end justify-between">
                                <div className="text-sm">
                                    <a href="#" className="font-semibold sign-in-link">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="mt-2 justify-start">
                                    <BasicPasswordInput width={"40ch"} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <BaseButton text={"Sign in"} px={3} py={1.5} />
                            <div className="flex gap-2 my-2 items-center">
                                <BorderButton text={"Sign in with Google"} px={3} py={1.5} />
                                <BorderButton text={"Sign in with Facebook"} px={3} py={1.5} />
                            </div>
                        </div>
                    </form>

                    <p className="mt-7 text-center text-sm">
                        Not a member yet?{" "}
                        <a href="#" className="font-semibold leading-6 sign-in-link">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
