import { useState } from "react";
import UpdateBox from "../review/UpdateBox";

export default function TabsWithUpdates() {
    const [activeTab, setActiveTab] = useState("Updates");

    // Placeholder content for the tabs
    const tabContent = {
        // News: (
        //     <>
        //         <UpdateBox />
        //         <UpdateBox />
        //     </>
        // ),
        Updates: (
            <>
                <UpdateBox />
                <UpdateBox />
                <UpdateBox />
            </>
        ),
        // Archives: (
        //     <>
        //         <UpdateBox />
        //     </>
        // ),
    };

    return (
        <>
            {/* Tabs Navigation */}
            <div>
                <div className="sm:hidden">
                    <label htmlFor="Tab" className="sr-only">Tab</label>

                    <select
                        id="Tab"
                        className="w-full rounded-md border-gray-200"
                        value={activeTab}
                        onChange={(e) => setActiveTab(e.target.value)}
                    >
                        {/* <option value="News">News</option> */}
                        <option value="Updates">Updates</option>
                        {/* <option value="Archives">Archives</option> */}
                    </select>
                </div>

                <div className="hidden sm:block w-[90%] lg:flex mx-auto justify-center">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex gap-6">
                            {/* <button
                                className={`shrink-0 p-3 text-sm font-medium ${activeTab === "News"
                                    ? "border-b-2 border-sky-600 text-sky-600"
                                    : "text-gray-500 hover:text-gray-700"
                                    }`}
                                onClick={() => setActiveTab("News")}
                            >
                                News
                            </button> */}
                            <button
                                className={`shrink-0 p-3 text-sm font-medium ${activeTab === "Updates"
                                    ? "border-b-2 border-sky-600 text-sky-600"
                                    : "text-gray-500 hover:text-gray-700"
                                    }`}
                                onClick={() => setActiveTab("Updates")}
                            >
                                Updates
                            </button>
                            {/* <button
                                className={`shrink-0 p-3 text-sm font-medium ${activeTab === "Archives"
                                    ? "border-b-2 border-sky-600 text-sky-600"
                                    : "text-gray-500 hover:text-gray-700"
                                    }`}
                                onClick={() => setActiveTab("Archives")}
                            >
                                Archives
                            </button> */}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Content based on selected tab */}
            <div className="relative border border-gray-300 w-[95%] mx-auto h-[90%] rounded-md p-4 mt-4">
                {tabContent[activeTab]}
            </div>
        </>
    );
}
