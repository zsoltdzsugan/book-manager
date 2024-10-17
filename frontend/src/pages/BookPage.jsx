import CardBox from "../components/review/CardBox";
import TabsOnBookPage from "../components/tab/TabsOnBookPage";
import VerticalDivider from "../components/divider/VerticalDivider";

export default function BookPage() {
    return (
        <div className="flex flex-col lg:flex-row px-2 w-[90%] mx-auto gap-4 lg:gap-8 text-onyx justify-center items-center">
            <div className="flex flex-col flex-shrink-0 gap-4">
                <CardBox />
            </div>
            <VerticalDivider mx={8} />
            <div className="flex w-full h-full">
                <div className="flex-1 w-full overflow-hidden">
                    <TabsOnBookPage />
                </div>

            </div>
        </div>
    )
}
