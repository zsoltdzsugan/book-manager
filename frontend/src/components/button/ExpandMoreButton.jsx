import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Tooltip } from "@mui/material";
import { PropTypes } from 'prop-types';

// Create the styled component separately
const StyledIconButton = styled(IconButton)(({ theme, expanded }) => ({
    marginLeft: "auto",
    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
    position: "absolute",
    right: "0.25rem",
    top: expanded ? "calc(8rem - 2.25rem)" : "calc(5rem - 2.25rem)",
    transition: theme.transitions.create(["top", "transform"], {
        duration: theme.transitions.duration.shortest,
    }),
    transitionDelay: expanded ? "50ms" : "0ms",
    [theme.breakpoints.down("lg")]: {
        display: "none",
    }
}));

export default function ExpandMoreButton({ expanded, toggleSearchBar }) {
    const transform = expanded ? "rotate(180deg)" : "rotate(0deg)";
    const top = expanded ? "calc(8rem - 2.25rem)" : "calc(5rem - 2.25rem)";

    return (
        <Tooltip title={expanded ? "Collapse" : "Expand"}>
            <StyledIconButton
                onClick={toggleSearchBar}
                expanded={expanded.toString()}
                aria-expanded={expanded.toString()}
                aria-label="show searchbar"
                sx={{ transform, top }}
            >
                <ExpandMoreIcon sx={{ fontSize: "1.75rem" }} />
            </StyledIconButton>
        </Tooltip>
    );
};

ExpandMoreButton.propTypes = {
    expanded: PropTypes.bool.isRequired,
    toggleSearchBar: PropTypes.func.isRequired,
};