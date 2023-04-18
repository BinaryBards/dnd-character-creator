import { Box } from "@mui/material";

const LandingLayout = ({ children }) => {
  return (
    <main>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          background: (theme) =>
            `url(/hexagon-overlay.svg) no-repeat top right, ${theme.palette.gradient.brand}`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            width: "78%",
            height: "100vh",
            backgroundColor: "grey.900",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Box>
      </Box>
    </main>
  );
};

export default LandingLayout;
