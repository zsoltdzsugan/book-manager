import SideBar, { SidebarVisible } from "../components/sidebar/SideBar";
import GridList from "../components/list/GridList";
import { useState } from "react";

export default function MyBooksPage() {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="relative w-full flex mx-2">
            <SidebarVisible.Provider value={{ isSidebarCollapsed, setSidebarCollapsed }}>
                <SideBar />
                <div className="flex flex-grow">
                    <div className="flex flex-col w-full">
                        <GridList />
                    </div>
                </div>
            </SidebarVisible.Provider>
        </div>
    );
}

