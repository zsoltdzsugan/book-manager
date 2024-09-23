const Searchbar = () => {
    return (
        <div className="relative w-full h-10">
            <label htmlFor="Search" className="sr-only">Search</label>

            <input
                type="text"
                id="Search"
                placeholder="Search for..."
                className="w-full rounded-2xl border-2 border-lightBorderBase dark:border-darkBorderBase py-2.5 pr-10 shadow-sm sm:text-sm px-3.5 bg-lightBgAccent lg:bg-lightBgContrast placeholder:text-darkBorderBase dark:bg-darkBgAccent dark:lg:bg-darkBgContrast dark:placeholder:text-lightBorderBase"
            />

            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button type="button" className="text-textBase hover:text-linkBase py-1 px-0.5">
                    <span className="sr-only">Search</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 stroke-lightTextBase hover:stroke-lightLinkBase dark:stroke-darkTextBase dark:hover:stroke-darkLinkBase"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </span>
        </div>
    );
};

export default Searchbar;
