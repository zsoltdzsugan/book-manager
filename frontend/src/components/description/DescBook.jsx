import Divider from "../divider/Divider";
import StarRating from "../rating/StarRating";

export default function DescBook() {
    return (
        <div className="bg-buff/10 shadow-md shadow-onyx/50 border border-onyx/25 rounded-lg p-4 h-full">
            <div className="w-[95%] mx-auto h-full gap-4 flex flex-col">
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl italic text-onyx/50"><span className="hover:underline cursor-pointer">Hierarchy #1</span></h3>
                    <h1 className="text-4xl font-semibold rounded-full py-4 px-14 -ml-16 bg-gradient-to-r from-darkGreen to-teaGreen">The Will of the Many</h1>
                    <h2 className="text-lg">James Islington</h2>

                </div>
                <div className="flex my-4 items-center text-sm">
                    <StarRating size="large" fontSize={"1.5rem"} fontWeight={"normal"} isReadOnly={true} />
                    <div className="flex mx-6 mt-0.5 gap-2">
                        <span>57.772 ratings</span><span>•</span><span>10.304 reviews</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <span>Genres</span>
                    <span className="font-semibold">Fantasy Fiction Mystery Science Fiction High Fantasy ...more </span>
                </div>
                <Divider my={4} />
                <div className="flex flex-col gap-2 overflow-hidden">
                    <div className="flex flex-col gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb pr-3 text-justify mx-auto">
                        <p>At the elite Catenan Academy, a young fugitive uncovers layered mysteries and world-changing secrets in this new fantasy series by internationally bestselling author of The Licanius Trilogy, James Islington.</p>

                        <p>AUDI. VIDE. TACE.</p>

                        <p>The Catenan Republic – the Hierarchy – may rule the world now, but they do not know everything.</p>

                        <p>I tell them my name is Vis Telimus. I tell them I was orphaned after a tragic accident three years ago, and that good fortune alone has led to my acceptance into their most prestigious school. I tell them that once I graduate, I will gladly join the rest of civilised society in allowing my strength, my drive and my focus – what they call Will – to be leeched away and added to the power of those above me, as millions already do. As all must eventually do.</p>

                        <p>I tell them that I belong, and they believe me.</p>

                        <p>But the truth is that I have been sent to the Academy to find answers. To solve a murder. To search for an ancient weapon. To uncover secrets that may tear the Republic apart.</p>

                        <p>And that I will never, ever cede my Will to the empire that executed my family.</p>

                        <p>To survive, though, I will still have to rise through the Academy’s ranks. I will have to smile, and make friends, and pretend to be one of them and win. Because if I cannot, then those who want to control me, who know my real name, will no longer have any use for me.</p>

                        <p>And if the Hierarchy finds out who I truly am, they will kill me.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
