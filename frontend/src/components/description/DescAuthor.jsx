import BorderButton from "../button/BorderButton";
import Divider from "../divider/Divider";

export default function DescAuthor() {
    return (
        <div className="bg-buff/10 shadow-md shadow-onyx/50 border border-onyx/25 rounded-lg p-4 h-full">
            <div className="w-[95%] mx-auto h-full gap-4 flex flex-col">
                <div className="flex items-center justify-between -ml-16 bg-gradient-to-r from-darkGreen to-teaGreen rounded-full">
                    <div className="flex items-center">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User"
                            className="w-20 h-20 bg-black rounded-full object-cover mr-3 border-2"
                        />
                        <div>
                            <p className="font-bold text-onyx text-2xl">James Islington</p>
                            <div className="flex mt-0.5 gap-2 text-sm">
                                <span>8 books</span><span>•</span><span>8,998 followers</span>
                            </div>
                        </div>

                    </div>
                    <div className="flex mr-10">
                        <BorderButton text={"Follow"} h={"12"} px={6} py={2} colorClass={"rounded-full border-2 border-ultraViolet bg-ultraViolet text-cornsilk hover:border-blush hover:bg-ultraViolet/25 hover:text-blush"} />
                    </div>
                </div>
                <Divider my={4} />
                <div className=" mb-4 text-justify pr-3">
                    <p>James Islington was born and raised in southern Victoria, Australia. His influences growing up were the stories of Raymond E. Feist and Robert Jordan, but it wasn"t until later, when he read Brandon Sanderson"s Mistborn series - followed soon after by Patrick Rothfuss" Name of the Wind - that he was finally inspired to sit down and write something of his own. He now lives with his wife and two children on the Mornington Peninsula in Victoria.</p>
                </div>
            </div>
        </div>
    )
}
