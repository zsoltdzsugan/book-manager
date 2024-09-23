import SignIn from "../components/forms/SignIn"

const LandingPage = () => {
    return (
        <div className="flex flex-col h-screen items-center bg-lightBgBase text-lightTextBase dark:bg-darkBgBase dark:text-darkTextBase">
            <section className="h-[10vh] w-[60vw] flex items-center text-2xl font-bold gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 sign-in-svg">
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                </svg>
                <h1 className="underline decoration-lightTextBase dark:decoration-darkTextBase">best<span className="text-lightBtnAccent dark:text-darkBtnAccent">Reads</span></h1>
            </section>
            <section className="h-[40vh] w-full flex justify-center border-t-2 border-b-2 bg-lightBgAccent dark:bg-darkBgAccent border-lightBorderBase dark:border-darkBorderBase">
                <div className="w-[45vw] flex flex-col justify-center left-16">
                    <p className="text-3xl py-4">Welcome on bestReads!</p>
                    <p className="text-5xl px-2">1. Browse</p>
                    <p className="text-5xl px-2">2. Read</p>
                    <p className="text-5xl px-2">3. ...</p>
                    <p className="text-5xl px-2">4. Repeat</p>

                </div>
                <div className="relative flex items-center min-w-40">
                    <div className="rounded-lg border-2 bg-lightBgContrast  dark:bg-darkBgContrast dark:border-darkBorderBase w-[25vw] h-[55vh]">
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