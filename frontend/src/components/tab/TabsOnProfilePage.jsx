import { useState } from "react";
import SettingsBox from "../profile/SettingsBox";
import ProfileBox from "../profile/ProfileBox";

export default function TabsOnProfilePage() {
    const [activeTab, setActiveTab] = useState("Profile");

    // Placeholder content for the tabs
    const tabContent = {
        Profile: (
            <>
                <ProfileBox />
            </>
        ),
        Settings: (
            <>
                <SettingsBox />
            </>
        ),
    };

    return (
        <>
            {/* Tabs Navigation */}
            <div>
                <div className="sm:hidden">
                    <label htmlFor="Tab" className="sr-only">Tab</label>

                    <select
                        id="Tab"
                        className="w-full rounded-md border"
                        value={activeTab}
                        onChange={(e) => setActiveTab(e.target.value)}
                    >
                        <option value="Profile">Profile</option>
                        <option value="Profile">Settings</option>
                    </select>
                </div>

                <div className="hidden sm:block w-[90%] lg:flex mx-auto justify-center">
                    <div className="">
                        <nav className="-mb-px flex gap-6">
                            <button
                                className={`shrink-0 p-3 text-sm font-medium ${activeTab === "Profile"
                                    ? "border-b-2 border-ultraViolet text-ultraViolet"
                                    : "text-darkGreen border-b-2 border-transparent hover:text-blush hover:border-b-2 hover:border-blush"
                                    }`}
                                onClick={() => setActiveTab("Profile")}
                            >
                                Profile
                            </button>
                            <button
                                className={`shrink-0 p-3 text-sm font-medium ${activeTab === "Settings"
                                    ? "border-b-2 border-ultraViolet text-ultraViolet"
                                    : "text-darkGreen border-b-2 border-transparent hover:text-blush hover:border-b-2 hover:border-blush"
                                    }`}
                                onClick={() => setActiveTab("Settings")}
                            >
                                Settings
                            </button>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Content based on selected tab */}
            <div className="relative w-[95%] mx-auto h-[95%] p-4">
                {tabContent[activeTab]}
            </div>
        </>
    );
}