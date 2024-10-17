import { useSidebarVisible } from "./SideBar"

export default function SideBarText({ children }) {
    const { isSidebarCollapsed } = useSidebarVisible();

    return (
        <a
            href={children.href}
            className={`group flex items-center justify-between rounded-md px-4 py-2 text-darkGreen hover:bg-teaGreen hover:text-ultraViolet transition-all duration-100  ${isSidebarCollapsed ? "opacity-0" : "opacity-100"}`}
        >
            <span className={`text-sm font-medium text-nowrap`}> {children.text} </span>

            <span
                className="shrink-0 rounded-full bg-cornsilk px-3 py-0.5 text-xs text-onyx group-hover:bg-blush group-hover:text-cornsilk"
            >
                {children.count}
            </span>
        </a>
    )
}
