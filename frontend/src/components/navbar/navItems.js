import BrowseItems from "./browseItems";

export default [
  {
    name: "Home",
    href: "/",
    isDropDown: false,
    dropDownList: null,
    isMobileOnly: false,
  },
  {
    name: "Browse",
    href: "#",
    isDropDown: true,
    dropDownList: BrowseItems,
    isMobileOnly: false,
  },
  {
    name: "My Books",
    href: "/books",
    isDropDown: false,
    dropDownList: null,
    isMobileOnly: false,
  },
  {
    name: "Community",
    href: "/community",
    isDropDown: false,
    dropDownList: null,
    isMobileOnly: false,
  },
  {
    name: "Settings",
    href: "/settings",
    isDropDown: false,
    dropDownList: null,
    isMobileOnly: true,
  },
  {
    name: "Help",
    href: "/help",
    isDropDown: false,
    dropDownList: null,
    isMobileOnly: true,
  },
];
