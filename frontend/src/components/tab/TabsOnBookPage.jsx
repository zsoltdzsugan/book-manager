import { useState } from "react";
import UpdateBox from "../review/UpdateBox";
import DescBook from "../description/DescBook";
import DescAuthor from "../description/DescAuthor";
import DescReview from "../description/DescReview";
import DescDetail from "../description/DescDetail";

export default function TabsOnBookPage() {
    const [activeTab, setActiveTab] = useState("Description");

    // Placeholder content for the tabs
    const tabContent = {
        Description: (
            <>
                <DescBook />
            </>
        ),
        Author: (
            <>
                <DescAuthor />
            </>
        ),
        Details: (
            <>
                <DescDetail />
            </>
        ),
        Editions: (
            <>
                <UpdateBox />
            </>
        ),
        Reviews: (
            <>
                <DescReview />
            </>
        ),
        SimilarBooks: (
            <>
                <UpdateBox />
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
                        <option value="Description">Description</option>
                        <option value="Author">Author</option>
                        <option value="Details">Details</option>
                        <option value="Editions">Editions</option>
                        <option value="Reviews">Reviews</option>
                        <option value="Similar books">Similar Books</option>
                    </select>
                </div>

                <div className="hidden sm:block w-[90%] lg:flex mx-auto justify-center">
                    <div className="">
                        <nav className="-mb-px flex gap-6">
                            <button
                                className={`shrink-0 p-3 text-sm font-medium ${activeTab === "Description"
                                    ? "border-b-2 border-ultraViolet text-ultraViolet"
                                    : "text-darkGreen border-b-2 border-transparent hover:text-blush hover:border-b-2 hover:border-blush"
                                    }`}
                                onClick={() => setActiveTab("Description")}
                            >
                                Description
                            </button>
                            <button
                                className={`shrink-0 p-3 text-sm font-medium ${activeTab === "Author"
                                    ? "border-b-2 border-ultraViolet text-ultraViolet"
                                    : "text-darkGreen border-b-2 border-transparent hover:text-blush hover:border-b-2 hover:border-blush"
                                    }`}
                                onClick={() => setActiveTab("Author")}
                            >
                                Author
                            </button>
                            <button
                                className={`shrink-0 p-3 text-sm font-medium ${activeTab === "Details"
                                    ? "border-b-2 border-ultraViolet text-ultraViolet"
                                    : "text-darkGreen border-b-2 border-transparent hover:text-blush hover:border-b-2 hover:border-blush"
                                    }`}
                                onClick={() => setActiveTab("Details")}
                            >
                                Details
                            </button>
                            <button
                                className={`shrink-0 p-3 text-sm font-medium ${activeTab === "Editions"
                                    ? "border-b-2 border-ultraViolet text-ultraViolet"
                                    : "text-darkGreen border-b-2 border-transparent hover:text-blush hover:border-b-2 hover:border-blush"
                                    }`}
                                onClick={() => setActiveTab("Editions")}
                            >
                                Editions
                            </button>
                            <button
                                className={`shrink-0 p-3 text-sm font-medium ${activeTab === "Reviews"
                                    ? "border-b-2 border-ultraViolet text-ultraViolet"
                                    : "text-darkGreen border-b-2 border-transparent hover:text-blush hover:border-b-2 hover:border-blush"
                                    }`}
                                onClick={() => setActiveTab("Reviews")}
                            >
                                Reviews
                            </button>
                            <button
                                className={`shrink-0 p-3 text-sm font-medium ${activeTab === "Similar books"
                                    ? "border-b-2 border-ultraViolet text-ultraViolet"
                                    : "text-darkGreen border-b-2 border-transparent hover:text-blush hover:border-b-2 hover:border-blush"
                                    }`}
                                onClick={() => setActiveTab("Similar books")}
                            >
                                Similar Books
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

// <div className="mt-2 flex-grow">
//     {/* Book Details */}
//     <div className="flex flex-col flex-grow px-1.5 justify-center">
//         {/* Title Link */}
//         <a href="/book-link" className="text-lg font-bold sm:text-lg hover:underline">
//             Title
//         </a>

//         {/* Author Link */}
//         <div>
//             <span className="text-md sm:text-sm">by </span>
//             <a href="/author-link" className="mt-2 text-md font-bold sm:text-sm hover:underline">
//                 author
//             </a>
//         </div>
//         <div>
//             <StarRating ratingType={"half-rating"} isReadOnly={true} />
//         </div>
//     </div>
//     <div className="mt-2 flex-grow">
//         <p className={`text-sm overflow-hidden text-ellipsis line-clamp`}>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi assumenda explicabo, eum sint, ipsam tempore deserunt doloribus cumque ad ullam eius aperiam fugiat? Eum delectus repudiandae adipisci consectetur necessitatibus dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolorum, quis nostrum illo temporibus quaerat sunt explicabo perferendis voluptate, nam odio obcaecati architecto officiis dicta distinctio dolorem sapiente cumque deleniti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, atque. Aliquam inventore aut suscipit maxime nemo doloremque voluptatem dolore blanditiis vitae, dolorem voluptas nesciunt! Sint reprehenderit quaerat quo voluptas deserunt.
//         </p>

//     </div>
// </div>
