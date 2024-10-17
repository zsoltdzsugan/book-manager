import { Box, Typography } from '@mui/material';

export default function WelcomeMessage() {
    return (
        <Box>
            <Typography variant="h3" sx={{ py: 2, color: "#FFFAF0" }}>
                Welcome on bestReads!
            </Typography>
            <Typography variant="h4" sx={{ px: 2, color: "#FFFAF0" }}>
                1. Browse
            </Typography>
            <Typography variant="h4" sx={{ px: 2, color: "#FFFAF0" }}>
                2. Read
            </Typography>
            <Typography variant="h4" sx={{ px: 2, color: "#FFFAF0" }}>
                3. ...
            </Typography>
            <Typography variant="h4" sx={{ px: 2, color: "#FFFAF0" }}>
                4. Repeat
            </Typography>
        </Box>
    )
}
