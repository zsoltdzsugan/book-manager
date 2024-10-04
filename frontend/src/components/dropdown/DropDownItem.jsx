export default function DropDownItem({ icon: Icon, name, description, href }) {
    return (
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-teaGreen">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg">
                <Icon aria-hidden="true" className="h-6 w-6 group-hover:stroke-ultraViolet stroke-darkGreen" />
            </div>
            <div className="flex-auto">
                <a href={href} className="block font-bold group-hover:text-ultraViolet text-darkGreen">
                    {name}
                    <span className="absolute inset-0" />
                </a>
                <p className="mt-1 group-hover:text-ultraViolet text-darkGreen">{description}</p>
            </div>
        </div>
    );
}
