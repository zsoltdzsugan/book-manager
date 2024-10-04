import Divider from "../components/divider/Divider";
import SignIn from "../components/forms/SignIn";
import Logo from "../components/logo/Logo";

const LandingPage = () => {
    return (
        <div className="flex flex-col h-screen items-center bg-papayaWhip text-onyx">
            <div className="relative w-full">
                {/* Gradient Wrapper */}
                <div className="absolute inset-0 w-full h-[50vh] bg-gradient-to-b from-papayaWhip to-buff">
                </div>

                <section className="relative h-[10vh] w-[60vw] flex items-center text-2xl font-bold mx-auto">
                    <Logo iconSize={10} strokeSize={1} hasTitle={true} isLink={true} />
                </section>

                <Divider my={1} />

                {/* Section with background image and gradient overlay */}
                <section className="relative h-[40vh] w-full flex justify-center shadow-lg shadow-buff bg-contain bg-center bg-[url('/_06cc4f58-7948-45f7-9db3-cc9dac048dab.jpeg')]">
                    {/* Content with backdrop blur and centered text */}
                    <div className="relative w-full flex justify-center bg-onyx/75 z-10">
                        <div className="w-[45vw] flex flex-col justify-center left-16">
                            <p className="text-3xl py-4 text-cornsilk">Welcome on bestReads!</p>
                            <p className="text-5xl px-2 text-cornsilk">1. Browse</p>
                            <p className="text-5xl px-2 text-cornsilk">2. Read</p>
                            <p className="text-5xl px-2 text-cornsilk">3. ...</p>
                            <p className="text-5xl px-2 text-cornsilk">4. Repeat</p>
                        </div>

                        {/* SignIn component */}
                        <div className="relative flex items-center z-20 mt-20">
                            <SignIn />
                        </div>
                    </div>
                </section>
            </div>

            {/* Additional Section */}
            <section className="relative h-[50vh] w-full flex flex-col items-center justify-center dark:bg-darkBgBase">
                <h2 className="text-3xl">Something Something</h2>
                <p className="text-xl">Additional content goes here!</p>
            </section>
        </div>
    );
};

export default LandingPage;
