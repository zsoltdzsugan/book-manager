import CurrentlyReadingCard from "../components/card/CurrentlyReadingCard";
import RecommendedCard from "../components/card/RecommendedCard";
import Divider from "../components/divider/Divider";
import FbLogo from "../components/logo/FbLogo";
import InstaLogo from "../components/logo/InstaLogo";
import LinkedInLogo from "../components/logo/LinkedInLogo";
import XLogo from "../components/logo/XLogo";
import TabsOnHomePage from "../components/tab/TabsOnHomePage";

export default function HomePage() {
    return (
        <div className="relative flex px-2">
            {/* Left Sidebar */}
            <div className="w-full lg:w-1/5 flex flex-col overflow-hidden">
                <h2 className="p-1 uppercase text-sm font-semibold">Currently Reading</h2>
                <Divider my={2} />
                <div className="flex flex-col p-1 gap-2">
                    <CurrentlyReadingCard />
                    <CurrentlyReadingCard />
                    <CurrentlyReadingCard />
                </div>
                <div className="text-sm px-1">
                    <a href="#" className="underline font-semibold underline-offset-2 hover:text-blush">See more</a>
                </div>
                <Divider my={2} />
                <a href="#" className="block flex-grow relative rounded-lg overflow-hidden group">
                    <div className="relative h-full rounded-lg bg-black overflow-hidden bg-cover bg-center bg-[url('/_7a1c3c13-a5a6-4024-aaf7-48bffc13ea85.jpeg')]">
                        <div className="flex h-full bg-onyx/20 text-center items-center group-hover:bg-onyx/60">
                            <h1 className="text-7xl font-serif text-cornsilk/40 group-hover:text-cornsilk/90">Reading Challenge</h1>
                        </div>
                    </div>
                </a>

            </div >

            {/* Main Content (scrollable) */}
            < div className="flex-1 flex rounded-lg mx-8 overflow-hidden" >
                <div className="space-y-4 px-8">
                    <TabsOnHomePage />
                </div>
            </div >

            {/* Right Sidebar */}
            < div className="w-full lg:w-1/5 flex flex-col overflow-hidden" >
                <h2 className="p-1 uppercase text-sm font-semibold">Recommendation</h2>
                <Divider my={2} />
                <div className="flex flex-col flex-grow p-1 gap-2 max-h-[calc(100vh-200px)] overflow-hidden">
                    <RecommendedCard />
                </div>
                <Divider my={2} />
                <div className="w-full flex flex-col justify-end gap-8">
                    {/* Support Section */}
                    <div className="flex flex-col">
                        <h2 className="p-1 uppercase text-sm font-semibold">Support</h2>
                        <Divider my={2} />
                        <div className="grid grid-cols-2 gap-3 mt-2">
                            <a href="#" className="w-full text-sm mx-2 hover:text-blush font-semibold">About us</a>
                            <a href="#" className="w-full text-sm mx-2 hover:text-blush font-semibold">Contact us</a>
                            <a href="#" className="w-full text-sm mx-2 hover:text-blush font-semibold">Privacy</a>
                            <a href="#" className="w-full text-sm mx-2 hover:text-blush font-semibold">Help</a>
                            <a href="#" className="w-full text-sm mx-2 hover:text-blush font-semibold">Terms</a>
                        </div>
                    </div>

                    {/* Connect Section */}
                    <div className="flex flex-col">
                        <h2 className="uppercase text-sm font-semibold">Connect</h2>
                        <Divider my={2} />
                        <div className="flex items-center gap-4 mt-2">
                            <FbLogo iconSize={6} />
                            <XLogo iconSize={6} />
                            <InstaLogo iconSize={6} />
                            <LinkedInLogo iconSize={6} />
                        </div>
                    </div>
                </div>

            </div >
        </div >
    );
}
