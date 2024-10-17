import { useState } from "react";
import StarRating from "../rating/StarRating";
import Divider from "../divider/Divider";
import BaseButton from "../button/BaseButton";

export default function ReviewCard() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <>
            <div className="bg-transparent rounded-sm border-l-4 border-l-ultraViolet border-onyx/25 p-4 flex gap-4">
                <div className="flex flex-col w-1/4 items-center">
                    {/* User Info */}
                    <div className="flex flex-col justify-center items-center gap-6">
                        <div className="flex-shrink-0 flex">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="User"
                                className="w-20 h-20 bg-black rounded-full object-cover border-2"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold text-onyx">John Doe</p>
                            <div className="flex mt-0.5 gap-2 text-sm">
                                <span>8 reviews</span><span>•</span><span>8,998 followers</span>
                            </div>
                        </div>
                        <BaseButton text={"Follow"} px={6} py={2} colorClass={"bg-darkGreen text-cornsilk border-darkGreen rounded-full hover:bg-teaGreen hover:text-ultraViolet"} />
                    </div>
                </div>

                <div className="flex flex-1 flex-col">
                    {/* Reviewed Book */}
                    <div className="flex-1 flex flex-col gap-2 mb-2">
                        <div className="flex justify-between items-end">
                            <p className="text-lg font-bold text-onyx">Review Title</p>
                            <div className="text-onyx/75 text-sm">27/10/2024</div>
                        </div>
                        <StarRating withTypography={true} isReadOnly={true} fontSize={"0.75rem"} size={"small"} />
                    </div>
                    {/* Review/Update Text */}
                    <div>
                        <p className={`text-onyx ${isExpanded ? "" : "line-clamp-3"}`}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio voluptatum eligendi placeat laudantium assumenda obcaecati! Fugiat et molestias quae, sint porro eum ipsam quod facere modi ducimus placeat fugit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio voluptatum eligendi placeat laudantium assumenda obcaecati! Fugiat et molestias quae, sint porro eum ipsam quod facere modi ducimus placeat fugit corporis.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio voluptatum eligendi placeat laudantium assumenda obcaecati! Fugiat et molestias quae, sint porro eum ipsam quod facere modi ducimus placeat fugit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio voluptatum eligendi placeat laudantium assumenda obcaecati! Fugiat et molestias quae, sint porro eum ipsam quod facere modi ducimus placeat fugit corporis.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio voluptatum eligendi placeat laudantium assumenda obcaecati! Fugiat et molestias quae, sint porro eum ipsam quod facere modi ducimus placeat fugit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio voluptatum eligendi placeat laudantium assumenda obcaecati! Fugiat et molestias quae, sint porro eum ipsam quod facere modi ducimus placeat fugit corporis.
                        </p>
                        <button
                            className="text-ultraViolet text-sm font-semibold mt-1 flex w-full justify-end"
                            onClick={toggleExpand}
                        >
                            {isExpanded ? "Show Less" : "Show More"} <span className={`ml-1 ${isExpanded ? "rotate-180" : ""}`}>&#x25BC;</span>
                        </button>
                    </div>

                    {/* Interaction Buttons */}
                    <div className="flex justify-between items-end mt-2">
                        <div className="space-x-4">
                            <button className="text-ultraViolet text-sm font-semibold hover:underline hover:text-blush hover:underline-blush">
                                Like
                            </button>
                            <button className="text-ultraViolet text-sm font-semibold hover:underline hover:text-blush hover:underline-blush">
                                Comment
                            </button>
                        </div>
                        <div className="text-onyx/75 text-sm">12 Likes</div>
                    </div>
                </div>


            </div>
            <Divider my={2} />
        </>
    );
}
