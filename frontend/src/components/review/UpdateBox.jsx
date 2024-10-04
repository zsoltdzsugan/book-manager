export default function UpdateBox() {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            {/* User Info */}
            <div className="flex items-center mb-3 -ml-6">
                <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="w-14 h-14 bg-black rounded-full object-cover mr-3 border-2"
                />
                <div>
                    <p className="font-bold text-gray-800">John Doe</p>
                    <p className="text-sm text-gray-500">Updated 2 hours ago</p>
                </div>
            </div>

            {/* Reviewed Book */}
            <div className="flex items-center mb-3">
                <img
                    src="https://via.placeholder.com/80x120"
                    alt="Book Cover"
                    className="w-20 h-28 object-cover rounded-lg mr-3"
                />
                <div>
                    <p className="text-lg font-bold text-gray-800">Title</p>
                    <p className="text-sm text-gray-500">by author</p>
                </div>
            </div>

            {/* Review/Update Text */}
            <div className="mb-3">
                <p className="text-gray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio voluptatum eligendi placeat laudantium assumenda obcaecati! Fugiat et molestias quae, sint porro eum ipsam quod facere modi ducimus placeat fugit corporis.
                </p>
            </div>

            {/* Interaction Buttons */}
            <div className="flex justify-between items-center mt-2">
                <div className="space-x-4">
                    <button className="text-indigo-500 text-sm font-semibold hover:underline">
                        Like
                    </button>
                    <button className="text-indigo-500 text-sm font-semibold hover:underline">
                        Comment
                    </button>
                    {/* <button className="text-indigo-500 text-sm font-semibold hover:underline">
                        Archive
                    </button> */}
                </div>
                <div className="text-gray-500 text-sm">12 Likes</div>
            </div>
        </div>
    );
}
