import VerticalDivider from "../components/divider/VerticalDivider";
import TabsOnProfilePage from "../components/tab/TabsOnProfilePage";

export default function ProfilePage() {
    return (
        <div className="flex flex-col lg:flex-row px-2 w-[90%] mx-auto gap-4 lg:gap-8 text-onyx justify-center">
            <div className="flex flex-col w-[25%] flex-shrink gap-4">
                <div className="flex flex-col items-center gap-4">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="User"
                        className="w-44 h-44 bg-black rounded-full object-cover border-2"
                    />

                    <div className="flex flex-col items-center">
                        <p className="font-bold text-onyx text-2xl">James Islington</p>
                        <div className="flex mt-0.5 gap-2 text-sm">
                            <span>Joined in August 2024</span>
                        </div>
                    </div>
                </div>

            </div>
            <VerticalDivider mx={8} />
            <div className="flex w-full h-full">
                <div className="flex-1 w-full overflow-hidden">
                    <TabsOnProfilePage />
                </div>

            </div>
        </div>
    )
}
