export default function ProgressBar() {
    return (
        <div className="relative">
            <span id="ProgressLabel" className="sr-only">Loading</span>

            <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="relative block rounded-full bg-cornsilk border-2 border-ultraViolet"
            >
                <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
                    <span className="font-bold text-cornsilk"> 75% </span>
                </span>

                <span className="block h-4 rounded-full bg-ultraViolet text-center border border-ultraViolet" style={{ width: "75%" }}> </span>
            </span>
        </div>
    );
}
