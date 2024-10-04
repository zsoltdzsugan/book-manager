import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const fillColor = {
    '& .MuiRating-iconFilled': {
        color: "#e0607eff", // Example: color for filled stars
    },
    '& .MuiRating-iconHover': {
        color: '#e0607eff/50', // Example: color for hover
    },
    '& .MuiRating-iconStroke': {
        color: 'green', // Example: color for hover
    },
};

export default function StarRating({ ratingType = 'half-rating', isReadOnly = false }) {
    const [value, setValue] = React.useState(4.43);

    return (
        <Box sx={{ '& > legend': { mt: 0 } }} className="flex items-center align-middle gap-2">
            <Rating
                name={ratingType}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                precision={0.1}
                readOnly={isReadOnly}
                sx={fillColor}
            />
            <Typography component="legend" sx={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{value}</Typography>
        </Box>
    );
}
