import BaseButton from "../button/BaseButton";
import StarRating from "../rating/StarRating";

export default function RecommendedCard() {
    return (
        <>
            <div className="flex">

                <a href="#" className="flex items-center gap-2">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="h-[200px] w-auto object-cover"
                    />
                </a>
                <div className="flex flex-col flex-grow px-1.5 justify-center">
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
                    <div>
                        <StarRating ratingType={'half-rating'} isReadOnly={true} />
                    </div>
                    <div>
                        <BaseButton text={'Want to read'} px={6} py={0.5} colorClass={`text-cornsilk bg-ultraViolet border-ultraViolet hover:bg-blush hover:text-onyx`} />
                    </div>
                </div>
            </div>
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi assumenda explicabo, eum sint, ipsam tempore deserunt doloribus cumque ad ullam eius aperiam fugiat? Eum delectus repudiandae adipisci consectetur necessitatibus dolore?</p>
            </div>
        </>
    );
}


