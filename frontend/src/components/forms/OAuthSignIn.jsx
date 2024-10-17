import { AppProvider, SignInPage } from "@toolpad/core";
import Logo from "../logo/Logo";
import UnderlineLink from "../link/UnderlineLink";
import { useTheme } from "@mui/material";

const providers = [
    { id: "google", name: "Google" },
    { id: "facebook", name: "Facebook" },
    { id: "credentials", name: "Email and Password" },
];

const signIn = async (provider) => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Sign in with ${provider.id}`);
            resolve();
        }, 500);
    });
    return promise;
};

export default function ThemeSignInPage() {
    const theme = useTheme();

    const branding = {
        logo: (
            <Logo iconSize={10} strokeSize={1} hasTitle={false} isLink={false} />
        ),
        title: "bestReads",
    };

    return (
        <AppProvider theme={theme} branding={branding}>
            <div className="flex flex-col justify-center items-center place-content-center -mt-4">
                <SignInPage signIn={signIn} providers={providers} />
                <div className="flex w-[90%] justify-between -mt-2">
                    <UnderlineLink value={"Forgot password?"} />
                    <UnderlineLink value={"Don't have an account? Sign up!"} />
                </div>

            </div>
        </AppProvider >
    );
}
