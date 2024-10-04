import BorderButton from "../button/BorderButton";
import ProgressBar from "../progress/ProgressBar";

export default function CurrentlyReadingCard() {
    return (
        <div className="flex">
            <a href="#" className="flex items-center gap-2">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    className="h-[125px] w-auto object-cover"
                />
            </a>
            <div className="flex flex-col flex-grow px-1.5">
                {/* Title Link */}
                <a href="/book-link" className="mt-4 text-lg font-bold sm:text-lg hover:underline">
                    Title
                </a>

                {/* Author Link */}
                <div>
                    <span className="text-md sm:text-sm">by </span>
                    <a href="/author-link" className="mt-2 text-md font-bold sm:text-sm hover:underline">
                        author
                    </a>

                </div>

                <div className="mt-2">
                    <ProgressBar />
                    <BorderButton text={'Update progress'} px={6} py={0.5} colorClass={`border-ultraViolet hover:border-blush text-ultraViolet hover:text-blush`} />
                </div>
            </div>
        </div>
    );
}

