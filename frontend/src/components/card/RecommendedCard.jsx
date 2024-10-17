import BaseButton from "../button/BaseButton";
import { useNavbarHeight } from "../layout/Layout";
import StarRating from "../rating/StarRating";
import { useEffect, useState } from "react";

export default function RecommendedCard() {
    const navbarHeight = useNavbarHeight();
    const [lineClampClass, setLineClampClass] = useState("line-clamp-x9"); // Default to line-clamp-x9

    useEffect(() => {
        const timer = setTimeout(() => {
            setLineClampClass(navbarHeight === "9rem" ? "line-clamp-sm" : "line-clamp-lg");
        }, 500); // Delay of 0.5 seconds

        return () => clearTimeout(timer);
    }, [navbarHeight]);

    return (
        <div className="flex flex-col h-full">
            {/* Image and Content Wrapper */}
            <div className="flex flex-grow">
                {/* Image */}
                <a href="#" className="flex items-center gap-2">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="h-auto w-32 object-cover"
                    />
                </a>
                {/* Book Details */}
                <div className="flex flex-col flex-grow px-1.5 justify-center items-start gap-2">
                    {/* Title Link */}
                    <a href="/book-link" className="text-lg font-bold sm:text-lg hover:underline">
                        Title
                    </a>

                    {/* Author Link */}
                    <div>
                        <span className="text-md sm:text-sm">by </span>
                        <a href="/author-link" className="mt-2 text-md font-bold sm:text-sm hover:underline">
                            author
                        </a>
                    </div>
                    <div className="my-2 flex flex-col justify-start w-full gap-4">
                        <StarRating isReadOnly={true} />
                        <BaseButton text={"Want to read"} px={6} py={0.25} colorClass={`rounded-md text-cornsilk bg-ultraViolet border-ultraViolet hover:bg-ultraViolet/25 hover:border-blush hover:text-blush`} />
                    </div>
                </div>
            </div>
            {/* Description Area */}
            <div className="mt-2 flex-grow">
                <p className={`text-sm overflow-hidden text-ellipsis line-clamp ${lineClampClass}`}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi assumenda explicabo, eum sint, ipsam tempore deserunt doloribus cumque ad ullam eius aperiam fugiat? Eum delectus repudiandae adipisci consectetur necessitatibus dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolorum, quis nostrum illo temporibus quaerat sunt explicabo perferendis voluptate, nam odio obcaecati architecto officiis dicta distinctio dolorem sapiente cumque deleniti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, atque. Aliquam inventore aut suscipit maxime nemo doloremque voluptatem dolore blanditiis vitae, dolorem voluptas nesciunt! Sint reprehenderit quaerat quo voluptas deserunt.
                </p>
            </div>
        </div>
    );
}
