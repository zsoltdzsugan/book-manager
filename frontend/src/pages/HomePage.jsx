import Navbar from "../components/navbar/Navbar";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mx-auto max-w-[95%]">
                <div className="h-32 rounded-lg bg-gray-200"></div>
                <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
                <div className="h-32 rounded-lg bg-gray-200"></div>
            </div>
        </>
    )
}
