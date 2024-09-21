import SignIn from "../components/forms/SignIn"

const LandingPage = () => {
    return (
        <div className="flex flex-col h-screen items-center bg-bgBase text-textBase">
            <section className="h-[10vh] w-[60vw] flex items-center text-2xl font-bold">
                <h1>awesomeReads</h1>
            </section>
            <section className="h-[40vh] w-full flex justify-center bg-bgAccent">
                <div className="w-[45vw] flex flex-col justify-center left-16">
                    <p className="text-3xl py-4">Welcome booknerd!</p>
                    <p className="text-5xl px-2">1. Browse</p>
                    <p className="text-5xl px-2">2. Read</p>
                    <p className="text-5xl px-2">3. ...</p>
                    <p className="text-5xl px-2">4. Repeat</p>

                </div>
                <div className="relative flex items-center min-w-40">
                    <div className="rounded-lg border-2 border-borderBase bg-bgContrast w-[25vw] h-[55vh]">
                        <SignIn />
                    </div>
                </div>
            </section>
            <section className="h-[50vh]">
                something something
            </section>
        </div>
    )
}

export default LandingPage