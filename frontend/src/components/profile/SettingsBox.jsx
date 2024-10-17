import ProfileForm from "../forms/ProfileForm";
import BorderButton from "../button/BorderButton";
import UnstyledButtonCustom from "../button/CustomButton";
import BasicPasswordInput from "../input/BasicPasswordInput";
import BasicEmailInput from "../input/BasicEmailInput";

export default function SettingsBox() {
    return (
        <div className="bg-buff/10 shadow-md shadow-onyx/50 border border-onyx/25 rounded-lg p-8 h-[100%] flex flex-col">
            <div className="w-[95%] mx-auto flex justify-between items-center">
                {/* Left Side: Profile Form */}
                <div className="flex">
                    <ProfileForm />
                </div>

                {/* Right Side: Picture and Upload Button */}
                <div className="flex flex-col">
                    <div className="w-40 h-40 rounded-md bg-gray-300"></div>
                    <BorderButton text={"Upload"} px={6} py={2} w={40} h={10} />
                </div>
            </div>
            <div className="w-[95%] mx-auto mt-12 flex">
                <div className="flex w-full">
                    <div>
                        <BasicEmailInput width={'25ch'} />
                        <BasicEmailInput width={'25ch'} label="Change Email" />
                    </div>
                    <div>
                        <BasicPasswordInput width={'25ch'} label="Change Password" />
                        <BasicPasswordInput width={'25ch'} label="Confirm New Password" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-end mb-4 h-full">
                <UnstyledButtonCustom />
            </div>

        </div>
    );
}
