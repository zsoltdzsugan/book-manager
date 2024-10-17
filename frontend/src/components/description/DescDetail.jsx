const bookDetails = {
    format: "639 pages, Kindle Edition",
    published: "May 23, 2023 by Gallery / Saga Press",
    ISBN: "9781982141196 (ISBN10: 1982141190)",
    ASIN: "B0BHTMBW5B",
    language: "English",
};

const bookAwards = [
    "Aurealis Award for Best Fantasy Novel (2023)",
    "Goodreads Choice Award Nominee for Fantasy (2023)",
];

export default function DescDetail() {
    return (
        <div className="bg-buff/10 shadow-md shadow-onyx/50 border border-onyx/25 rounded-lg p-4 h-full">
            <div className="w-[95%] mx-auto h-full gap-4 flex flex-col">
                <div className="mb-4">
                    <h1 className="text-md font-bold italic mb-2 bg-gradient-to-r from-darkGreen to-teaGreen rounded-full p-2 -ml-16 pl-16">Awards</h1>
                    <div className="shadow-sm p-2">
                        {bookAwards.map((award, idx) => (
                            <p key={idx} className="text-sm text-gray-700">
                                {award}
                            </p>
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className="text-md font-bold italic mb-2 bg-gradient-to-r from-darkGreen to-teaGreen rounded-full p-2 -ml-16 pl-16">This edition</h1>
                    <div className="overflow-x-auto text-sm">
                        <table className="min-w-full">
                            <tbody>
                                {Object.entries(bookDetails).map(([field, detail]) => (
                                    <tr key={field}>
                                        <td className="p-2 capitalize font-medium w-[20%]">{field}</td>
                                        <td className="p-2">{detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h1 className="text-md font-bold italic mb-2 bg-gradient-to-r from-darkGreen to-teaGreen rounded-full p-2 -ml-16 pl-16">More editions</h1>
                </div>
            </div>
        </div>
    );
}
