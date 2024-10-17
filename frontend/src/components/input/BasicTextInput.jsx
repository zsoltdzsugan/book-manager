import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextInput({ label, width, autoComplete }) {
    const autoCompleteBool = autoComplete ? "on" : "off";

    return (
        <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: width } }}
            noValidate
            autoComplete={autoCompleteBool}
        >
            <TextField id="outlined-basic" label={label} variant="outlined" />
        </Box>
    );
}