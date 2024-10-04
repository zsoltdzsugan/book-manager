import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { createContext, useState } from 'react';

const SideBarContext = createContext();

export default function SideBar({ children }) {
    const [expanded, setExpanded] = useState(true);

    return (
        <aside className={`h-full transition-all duration-100 ${expanded ? "w-72" : "w-20"}`}> {/* Use transition for smooth animation */}
            <nav className="h-full flex flex-col border-r shadow-sm rounded-md">
                <div className="p-3 pb-2 flex justify-between items-center">
                    <p className={`overflow-hidden transition-all ${expanded ? "w-20" : "w-0 hidden"}`}>Bookshelf</p>
                    <button onClick={() => setExpanded(!expanded)} className="p-1.5 py-2 px-4 rounded-lg">
                        {expanded ? <ChevronLeftIcon className="w-6 h-6" /> : <ChevronRightIcon className="w-6 h-6" />}
                    </button>
                </div>
                <SideBarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3 space-y-2">
                        {children}
                    </ul>
                    <div className="bg-gray-400 p-3 pb-2 rounded-md flex-auto flex flex-col justify-evenly items-center">
                        {expanded ? (
                            <>
                                <p>Reading Challenge</p>
                                <p>1</p>
                                <p>of</p>
                                <p>24</p>
                                <p>in</p>
                                <p>2024</p>
                            </>
                        ) : (
                            <>
                                <p>Reading</p>
                                <p>Challenge</p>
                                <p>1 / 24</p>
                                <p>in</p>
                                <p>2024</p>
                            </>
                        )}
                    </div>
                </SideBarContext.Provider>
            </nav>
        </aside>
    );
}

export { SideBarContext };
