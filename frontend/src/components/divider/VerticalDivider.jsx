export default function VerticalDivider({ mx }) {
    return (
        <span className={`relative flex items-center justify-center mx-${mx} h-full w-4`}>
            <div
                className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-transparent bg-gradient-to-b from-transparent via-onyx to-transparent opacity-100"
            ></div>
        </span>
    );
}
