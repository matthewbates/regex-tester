import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export const Menu = ({ toggleSidebar }) => {
  return (
    <FormatListBulletedIcon
      onClick={toggleSidebar}
      sx={{ marginLeft: "0.5em", cursor: "pointer" }}
    />
  );
};
