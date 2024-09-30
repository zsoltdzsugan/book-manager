import GridList from "../components/list/GridList";
import Navbar from "../components/navbar/Navbar";
import BooksPagination from "../components/pagination/BooksPagination";
import SideBar from "../components/sidebar/SideBar";
import SideBarMenuItem from "../components/sidebar/SideBarMenuItem";
import { ArchiveBoxIcon, BookOpenIcon, BookmarkIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/solid';

export default function MyBooksPage() {
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-[auto_1fr] gap-2 lg:gap-4 w-[95vw] h-[82.5vh] mx-auto">
                <div className="transition-all duration-300 bg-lightBgContrast">
                    <SideBar>
                        <SideBarMenuItem icon={<ArchiveBoxIcon className="h-6 w-6" />} text="All" num={200} active />
                        <SideBarMenuItem icon={<BookOpenIcon className="h-6 w-6" />} text="Currently Reading" num={5} />
                        <SideBarMenuItem icon={<BookmarkIcon className="h-6 w-6" />} text="Want to Read" num={10570} />
                        <SideBarMenuItem icon={<ClipboardDocumentListIcon className="h-6 w-6" />} text="Read" num={666} />
                    </SideBar>
                </div>
                <div className="rounded-lg transition-all duration-300 bg-lightBgContrast relative p-6 min-h-fit flex flex-col gap-6">
                    <BooksPagination />
                    <GridList />
                </div>
            </div>
        </>
    );
}
