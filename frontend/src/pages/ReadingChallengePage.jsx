import SideBar, { SidebarVisible } from "../components/sidebar/SideBar";
import ReadingChallengStats from "../components/stat/ReadingChallengStats";
import { useState } from "react";

export default function ReadingChallengePage() {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="relative w-full flex mx-2 gap-4">
            <SidebarVisible.Provider value={{ isSidebarCollapsed, setSidebarCollapsed }}>
                <SideBar />
                <div className="flex flex-grow">
                    <div className="flex flex-col w-full justify-center bg-black/25">
                        <ReadingChallengStats />
                    </div>
                </div>
            </SidebarVisible.Provider>
        </div>
    )
}
