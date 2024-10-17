import { Box, TextField } from '@mui/material';

export default function BasicEmailInput({ label = "Email", width }) {
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: width } }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-adornment-email"
                label={label}
                type="email"
                variant="outlined"
                fullWidth
                sx={{ m: 1, width: width }}
            />
        </Box>
    );
}
