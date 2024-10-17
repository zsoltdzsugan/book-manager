import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SelectTextField({ options }) {
    return (
        <Box
            component="form"
            sx={{ "& .MuiTextField-root": { mt: 2, mb: 1, ml: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    fullWidth
                    id="outlined-select-currency-native"
                    select
                    label="Gender"
                    defaultValue=""
                    slotProps={{
                        select: {
                            native: true,
                        },
                    }}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </div>
        </Box>
    );
}
