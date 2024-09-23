export default function DropDownItem({ icon: Icon, name, description, href }) {
    return (
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-lightBgBase dark:hover:bg-darkBgBase">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg">
                <Icon aria-hidden="true" className="h-6 w-6 group-hover:stroke-lightLinkBase" />
            </div>
            <div className="flex-auto">
                <a href={href} className="block font-semibold group-hover:text-lightLinkBase">
                    {name}
                    <span className="absolute inset-0" />
                </a>
                <p className="mt-1 group-hover:text-darkBorderBase">{description}</p>
            </div>
        </div>
    );
}
