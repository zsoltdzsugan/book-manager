/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const preventDefault = (event) => event.preventDefault();

export default function UnderlineLink({ value, underline = "always", }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                typography: "body2",
                "& > :not(style) ~ :not(style)": {
                    ml: 2,
                },
            }}
            onClick={preventDefault}
        >
            <Link href="#" underline="always">
                {value}
            </Link>
        </Box>
    );
}
