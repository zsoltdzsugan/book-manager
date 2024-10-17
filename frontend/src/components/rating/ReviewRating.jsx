import BaseButton from "../button/BaseButton"
import StarRating from "./StarRating"

export default function ReviewRating() {
    return (
        <div className="flex w-[70%] items-center mx-auto">
            <div className="flex text-sm flex-col justify-center items-center flex-1">
                <StarRating size="large" fontSize={"1.5rem"} fontWeight={"normal"} isReadOnly={true} />
                <div className="flex ml-1.5 mt-0.5 gap-2">
                    <span>57.772 ratings</span><span>•</span><span>10.304 reviews</span>
                </div>
                <div className="ml-1.5">
                    <BaseButton text={"Write a review"} w={"56"} h={"full"} px={6} py={2} />

                </div>
            </div>
            <div className="flex flex-1 flex-col">
                {
                    [
                        { star: "5", percentage: 70 },
                        { star: "4", percentage: 17 },
                        { star: "3", percentage: 8 },
                        { star: "2", percentage: 4 },
                        { star: "1", percentage: 1 },
                    ].map((rating) => (
                        <div className="flex mt-4 group justify-start" key={rating.star}>
                            <a href="#" className="text-sm font-medium text-ultraViolet group-hover:text-blush group-hover:underline">
                                {rating.star} star
                            </a>
                            <div className="w-2/3 h-5 mx-4 bg-onyx/25 rounded flex items-start">
                                <div
                                    className="h-5 bg-ultraViolet group-hover:bg-blush rounded"
                                    style={{ width: `${rating.percentage}%` }}
                                ></div>
                            </div>
                            <span className="text-sm font-medium text-ultraViolet group-hover:text-blush">
                                {rating.percentage}%
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
