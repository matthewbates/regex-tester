import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DescriptionIcon from "@mui/icons-material/Description";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HelpIcon from "@mui/icons-material/Help";

export const links = [
  // {
  //   id: 1,
  //   title: "Home",
  // },
  // {
  //   id: 2,
  //   title: "About",
  // },
];

export const sidebarIcons = [
  {
    id: 1,
    name: "Cheatsheet",
    text: [
      {
        id: 1,
        text: "Character classes",
      },
      {
        id: 2,
        text: "Anchors",
      },
      {
        id: 3,
        text: "Escaped characters",
      },
      {
        id: 4,
        text: "Groups & Lookaround",
      },
      {
        id: 5,
        text: "Quantifiers & Alternation",
      },
    ],
    icon: <DescriptionIcon />,
  },
  {
    id: 2,
    name: "RegEx Reference",
    icon: <AutoStoriesIcon />,
  },
  {
    id: 3,
    name: "Help",
    icon: <HelpIcon />,
  },
];
