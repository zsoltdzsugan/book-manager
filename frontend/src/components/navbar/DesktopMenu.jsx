import PopoverDropDown from "../dropdown/PopoverDropDown";
import PropTypes from "prop-types";

export default function DesktopMenu({ navItems }) {
    return <PopoverDropDown navItems={navItems} />;
};

DesktopMenu.propTypes = {
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            isDropDown: PropTypes.bool.isRequired,
            isMobileOnly: PropTypes.bool.isRequired,
            dropDownList: PropTypes.oneOfType([
                PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.string.isRequired,
                        description: PropTypes.string,
                        href: PropTypes.string.isRequired,
                        icon: PropTypes.elementType,
                    })
                ),
                PropTypes.oneOf([null]), // Allows "null" if no dropdown items
            ]),
        })
    ).isRequired
}