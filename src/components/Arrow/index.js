import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const Arrow = ({ index, activeIndex }) => {
  return (
    <KeyboardArrowRightIcon
      sx={{
        display: "flex",
        marginLeft: "auto",
        transition: "0.3s ease",
        transform: index === activeIndex ? "rotate(90deg)" : "rotate(0deg)",
      }}
    />
  );
};
