import BasicDatePicker from "./DatePicker";
import CountrySelectInput from "../input/CountrySelectInput";
import BasicTextInput from "../input/BasicTextInput";
import BasicSelectInput from "../input/BasicSelectInput";

const genderOptions = [
    {
        value: "",
        label: "",
    },
    {
        value: "male",
        label: "Male",
    },
    {
        value: "female",
        label: "Female",
    },
];

export default function ProfileForm() {
    return (
        <div className="flex w-full">
            <form action="#" className="flex flex-col">
                <BasicTextInput label={"First name"} width={"25ch"} autoComplete={true} />
                <BasicTextInput label={"Middle name"} width={"25ch"} autoComplete={true} />
                <BasicTextInput label={"Last name"} width={"25ch"} autoComplete={true} />
            </form >
            <div className="flex flex-col">
                <BasicDatePicker label={"Date of Birth"} width={"25ch"} />
                <BasicSelectInput options={genderOptions} />
                <CountrySelectInput label={"Country"} width={"25ch"} />
            </div>
        </div >
    );
}
