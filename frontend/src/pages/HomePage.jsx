import Navbar from "../components/navbar/Navbar";
import TabsWithUpdates from "../components/tab/TabsWithContent";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className="flex h-[80vh] max-w-[95vw] mx-auto">
                {/* Left Sidebar */}
                <div className="w-full lg:w-1/4 rounded-lg bg-gray-200 overflow-hidden">
                    <div className="h-32 rounded-lg bg-blue-200 m-2">
                        <h3>Currently reading</h3>
                    </div>
                    <div className="h-32 rounded-lg bg-blue-200 m-2"></div>
                </div>

                {/* Main Content (scrollable) */}
                <div className="flex-1 lg:w-1/2 lg:mx-4 rounded-lg bg-gray-200 overflow-y-auto">
                    <div className="p-4"> {/* Replace this with your dynamic content */}
                        {/* Content here will grow, causing the scrolling */}
                        <div className="space-y-4">
                            <TabsWithUpdates />
                            {/* Add more updates to simulate infinite scrolling */}
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="w-full lg:w-1/4 rounded-lg bg-gray-200 overflow-hidden">
                    <div className="h-32 rounded-lg bg-blue-200 m-2">
                        <h3>Recommendation</h3>
                    </div>
                    <div className="h-32 rounded-lg bg-blue-200 m-2">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                            <div className="h-32 rounded-lg bg-gray-200">
                                contact us
                            </div>
                            <div className="h-32 rounded-lg bg-gray-200">
                                support
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}