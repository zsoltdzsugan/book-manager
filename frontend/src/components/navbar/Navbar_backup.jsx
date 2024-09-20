import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex h-16 justify-between bg-slate-800">
            {/* Logo Section */}
            <div className="flex items-center flex-1 mx-8">
                <span className="text-3xl font-bold text-white">Logo</span>
            </div>

            {/* Navigation Links */}
            <div className="lg:flex gap-4 py-2 items-center justify-end sm:flex-1 hidden">
                <ul className="flex justify-between w-full">
                    {[
                        ['Home', '/home'],
                        ['Browse', '/browse'],
                        ['MyBooks', '/mybooks'],
                        ['Idk', '/idk'],
                    ].map(([title, url]) => (
                        <li key={title} className="flex-1 text-center text-xl">
                            <Link
                                to={url}
                                className="block rounded-lg py-2 px-2 text-slate-300 font-medium hover:bg-slate-300 hover:text-slate-800"
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Profile Section */}
            <div className="flex items-center mx-8">
                <span className="text-white">Profile</span>
            </div>
        </nav>
    );
};

export default Navbar;
