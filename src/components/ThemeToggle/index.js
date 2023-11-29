import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

export const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <IconButton
      onClick={toggleTheme}
      sx={{
        marginRight: "0.5em",
        border: theme === "light" ? "2px solid #000000" : "2px solid #ffffff",
        "&:hover": { background: "none" },
      }}
    >
      {theme === "light" ? (
        <LightModeIcon fontSize="small" sx={{ color: "#000000" }} />
      ) : (
        <ModeNightIcon fontSize="small" sx={{ color: "#ffffff" }} />
      )}
    </IconButton>
  );
};
