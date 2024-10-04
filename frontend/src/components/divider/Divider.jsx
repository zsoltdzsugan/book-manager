export default function Divider({ my }) {
    return (
        <span className={`relative flex text-center align-middle justify-center my-${my}`}>
            <div
                className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-onyx to-transparent opacity-75"
            ></div>
        </span >
    )
}
