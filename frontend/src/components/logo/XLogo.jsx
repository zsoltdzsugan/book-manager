export default function XLogo({ iconSize }) {
    const spanSize = iconSize / 2.25;

    return (
        <div className="">
            <span
                style={{ width: `${spanSize}rem`, height: `${spanSize}rem` }}
                className="bg-onyx/40 hover:bg-onyx hover:fill-blush  rounded-full flex justify-center items-center"
            >
                <svg role="img" className={`w-${iconSize} h-${iconSize}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
            </span>
        </div>
    )
}
