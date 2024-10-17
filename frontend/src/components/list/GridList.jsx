import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import { useNavbarHeight } from "../layout/Layout";
import { useSidebarVisible } from "../sidebar/SideBar";
import { useState } from "react";

export default function GridList() {
    const navbarHeight = useNavbarHeight();
    const { isSidebarCollapsed } = useSidebarVisible();
    const [currentPage, setCurrentPage] = useState(1);

    // Determine the number of cards based on the visibility of the navbar and sidebar
    const getVisibleCardsCount = () => {
        if (isSidebarCollapsed && navbarHeight === "6rem") return 70;
        if (navbarHeight === "6rem" || isSidebarCollapsed) return 60;
        return 50;
    };

    const itemsPerPage = getVisibleCardsCount();
    const totalItems = 100; // Set this to the total number of items/cards you have

    // Calculate the visible cards for the current page
    const startIdx = (currentPage - 1) * itemsPerPage;
    const visibleCardsCount = Math.min(itemsPerPage, totalItems - startIdx);

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="relative h-screen">
            <div className="flex h-full w-full">
                <div
                    className={`relative grid px-20 justify-items-center flex-grow ${isSidebarCollapsed && navbarHeight === "6rem"
                        ? "sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-14 gap-x-24"
                        : (navbarHeight === "6rem" || isSidebarCollapsed)
                            ? "sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-x-24"
                            : "sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10"
                        }`}
                >
                    {Array.from({ length: visibleCardsCount }, (_, idx) => (
                        <Card key={idx} />
                    ))}
                </div>

                {/* Pagination Component */}
                <div className={"flex flex-col items-center justify-center h-full p-2 bg-onyx rounded-r-md w-20"}>
                    <Pagination
                        currentPage={currentPage}
                        totalItems={totalItems}
                        itemsPerPage={itemsPerPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
}
