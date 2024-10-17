import { useSidebarVisible } from "./SideBar";

export default function SideBarIcon({ children }) {
    const { isSidebarCollapsed } = useSidebarVisible();

    return (
        <a
            href={children.href}
            className="group relative flex justify-center rounded px-2 py-1.5 hover:bg-teaGreen"
        >
            {children.icon}

            <span
                className={`z-10 invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-onyx px-2 py-1.5 text-xs font-medium text-cornsilk ${isSidebarCollapsed ? "group-hover:visible" : "invisible"}`}
            >
                {children.text}
            </span>
        </a>
    );
}
