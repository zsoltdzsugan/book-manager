import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";

export default function BasicDatePicker({ label, width }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
                <Box
                    sx={{ "& > :not(style)": { ml: 1, width: width } }}
                >
                    <DatePicker label={label} />
                </Box>
            </DemoContainer>
        </LocalizationProvider>
    );
}
