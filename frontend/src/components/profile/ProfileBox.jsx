const booksRead = {
    2019: 2,
    2020: 4,
    2021: 8,
    2022: 20,
    2023: 0,
    2024: 3,
};

const totalBooksRead = Object.values(booksRead).reduce((acc, curr) => acc + curr, 0);

const statistics = {
    "Books read": totalBooksRead,
    "reviews": 204,
    "avg. rating": 4.69,
    "comments": 1024,
}

export default function ProfileBox() {
    return (
        <div className="bg-buff/10 shadow-md shadow-onyx/50 border border-onyx/25 rounded-lg p-4 h-full">
            <div className="w-[95%] mx-auto h-full gap-4 flex flex-col">
                <div>
                    <h1 className="text-md font-bold italic mb-2 bg-gradient-to-r from-darkGreen to-teaGreen rounded-full p-2 -ml-16 pl-16">This edition</h1>
                    <div className="overflow-x-auto text-sm">
                        <table className="min-w-full">
                            <tbody>
                                {Object.entries(statistics).map(([field, detail]) => (
                                    <tr key={field}>
                                        <td className="p-2 capitalize font-medium w-[20%]">{field}</td>
                                        <td className="p-2 flex-1">{detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
