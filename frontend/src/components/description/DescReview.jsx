import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { MdCheck } from "react-icons/md";
import ReviewCard from "../review/ReviewCard";
import ReviewRating from "../rating/ReviewRating";
import Divider from "../divider/Divider";

export default function DescReview() {
    const [filter, setFilter] = useState("popular");

    const handleFilterChange = (event, newFilter) => {
        if (newFilter !== null) {
            setFilter(newFilter);
        }
    };

    const toggleButtonGroupStyles = {
        display: "flex",
        justifyContent: "center",
        borderRadius: "20px", // Makes the group look like a pill
    };

    const toggleButtonStyles = {
        fontSize: "0.875rem",
        padding: "5px 15px",
        border: "2",
        borderColor: "#7D9A6B",
        borderRadius: "0",
        backgroundColor: "#7D9A6B",
        color: "#fefae0ff",
        "&:first-of-type": {
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
        },
        "&:last-of-type": {
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
        },
        "&:hover": {
            backgroundColor: "#ccd5aeff",
            color: "#56638aff",

        },
        "&.Mui-selected": {
            backgroundColor: "#56638aff",
            color: "#fefae0ff",
            borderColor: "#56638aff",
            "&:hover": {
                backgroundColor: "#56638abf",
                borderColor: "#56638aff",
            },
        },
    };

    return (
        <div className="bg-buff/10 shadow-md shadow-onyx/50 border border-onyx/25 rounded-lg p-4 h-full">
            <div className="w-[95%] mx-auto h-full flex flex-col gap-2">
                <ReviewRating />
                <Divider my={2} />
                {/* Segmented Buttons */}
                <div className="my-4">
                    <ToggleButtonGroup
                        value={filter}
                        exclusive
                        onChange={handleFilterChange}
                        aria-label="Review Filter"
                        sx={toggleButtonGroupStyles}
                    >
                        <ToggleButton
                            value="popular"
                            aria-label="Popular"
                            sx={toggleButtonStyles}
                        >
                            {filter === "popular" && <MdCheck className="mr-1" />} {/* Checkmark */}
                            Popular
                        </ToggleButton>
                        <ToggleButton
                            value="newest"
                            aria-label="Newest"
                            sx={toggleButtonStyles}
                        >
                            {filter === "newest" && <MdCheck className="mr-1" />} {/* Checkmark */}
                            Newest
                        </ToggleButton>
                        <ToggleButton
                            value="oldest"
                            aria-label="Oldest"
                            sx={toggleButtonStyles}
                        >
                            {filter === "oldest" && <MdCheck className="mr-1" />} {/* Checkmark */}
                            Oldest
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div className="flex flex-col overflow-y-auto w-full scrollbar-thin scrollbar-thumb scrollbar-ml-1 pr-4 gap-4">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
            </div>
        </div>
    );
}
