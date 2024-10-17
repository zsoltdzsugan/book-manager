import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Function to go to the next page
    const nextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    // Function to go to the previous page
    const prevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    return (
        <div className="flex items-center justify-between border-gray-200">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <nav aria-label="Pagination" className="isolate inline-flex flex-col gap-1 justify-center items-center rounded-md shadow-sm">
                    <button
                        onClick={prevPage}
                        className="relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-cornsilk hover:bg-teaGreen hover:text-ultraViolet focus:z-20 focus:outline-offset-0 whitespace-nowrap overflow-hidden overflow-ellipsis"
                    >
                        <span className="sr-only">Previous</span>
                        <ChevronUpIcon aria-hidden="true" className="h-6 w-6" />
                    </button>

                    {/* Display pagination numbers dynamically */}
                    {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`relative inline-flex items-center rounded-md w-10 h-10 place-content-center ${currentPage === page ? "bg-darkGreen text-cornsilk" : "bg-transparent text-cornsilk"
                                } ring-1 ring-inset ring-cornsilk hover:bg-teaGreen hover:text-ultraViolet focus:z-20 focus:outline-offset-0 whitespace-nowrap overflow-hidden overflow-ellipsis`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={nextPage}
                        className="relative inline-flex items-center rounded-md w-10 h-10 place-content-center text-gray-400 ring-1 ring-inset ring-cornsilk hover:bg-teaGreen hover:text-ultraViolet focus:z-20 focus:outline-offset-0 whitespace-nowrap overflow-hidden overflow-ellipsis"
                    >
                        <span className="sr-only">Next</span>
                        <ChevronDownIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </nav>
            </div>
        </div>
    );
}
