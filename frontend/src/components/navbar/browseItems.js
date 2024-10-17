import {
  AdjustmentsHorizontalIcon,
  BookmarkSquareIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default [
  {
    name: "Recommendations",
    description: "Discover books tailored to your preferences.",
    href: "/recommendations",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "New Releases",
    description: "Stay updated with the latest books.",
    href: "/new",
    icon: RocketLaunchIcon,
  },
  {
    name: "Explore",
    description: "Dive into trending titles from various genres.",
    href: "/explore",
    icon: GlobeAltIcon,
  },
  {
    name: "All Genres",
    description: "Browse books by specific genres",
    href: "/all",
    icon: BookmarkSquareIcon,
  },
];
