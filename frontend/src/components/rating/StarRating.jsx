import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const fillColor = {
    "& .MuiRating-iconFilled": {
        color: "#e0607eff", // Color for filled stars
    },
    "& .MuiRating-iconHover": {
        color: "#e0607eff80", // Color for hover (using rgba hex format for transparency)
    },
    "& .MuiRating-iconStroke": {
        color: "green", // Color for stroke
    },
};

export default function StarRating({ size = "", fontSize = "0.75rem", fontWeight = "bold", isReadOnly = false, withTypography = true }) {
    const [value, setValue] = React.useState(isReadOnly ? 3.69 : 0);

    return (
        <Box sx={{ "& > legend": { mt: 0.25 } }} className="flex items-center align-middle gap-3">
            <Rating
                name="half-rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                precision={isReadOnly ? 0.1 : 0.5}
                readOnly={isReadOnly}
                sx={fillColor}
                size={size}
            />
            {withTypography && (<Typography component="legend" sx={{ fontSize: fontSize, fontWeight: fontWeight }}>
                {value.toFixed(2)}
            </Typography>)}

        </Box>
    );
}
