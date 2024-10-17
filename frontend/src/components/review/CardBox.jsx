import DropdownButton from "../button/DropdownButton";
import StarRating from "../rating/StarRating";
import DropdownButtonWLink from "../button/DropdownBorderBtnWLink";

const readOptions = [
    "Want to read",
    "Currently reading",
    "Read"
];

const buyOptions = [
    "Buy on Amazon",
    "Buy on Audible",
];

export default function CardBox() {
    return (
        <div className="flex w-full relative">
            <div className="flex flex-col gap-6">
                <div>
                    <a href="#" className="flex items-center">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            className="h-auto w-72 object-cover"
                        />
                    </a>
                </div>
                <div>
                    <div className="flex flex-col flex-grow justify-center">
                        <div className="flex flex-col gap-2 mt-2">
                            <DropdownButton text={"Want to read"} w={"full"} h={"full"} px={6} py={2} borderColor={"darkGreen"} colorClass={`text-cornsilk bg-darkGreen border-onyx/25 hover:bg-teaGreen hover:text-ultraViolet`} options={readOptions} />
                            <DropdownButtonWLink text={"Buy the book"} w={"full"} h={"full"} px={6} py={2} borderColor={"darkGreen"} colorClass={`text-cornsilk bg-darkGreen border-onyx/25 group-hover:bg-teaGreen group-hover:text-ultraViolet`} options={buyOptions} />
                        </div>
                        <div className="mt-8 mx-auto">
                            <StarRating size="large" isReadOnly={false} withTypography={false} />
                            <p className="mt-2 text-sm text-center">Rate this book</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
