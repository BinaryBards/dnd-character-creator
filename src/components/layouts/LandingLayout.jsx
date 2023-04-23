import { Box } from "@mui/material";

const LandingLayout = ({ children }) => {
  return (
    <main>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
          background: (theme) =>
            `url(/hexagon-overlay.svg) no-repeat, ${theme.palette.gradient.brand}`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={(theme) => ({
            width: "78%",
            minHeight: "100vh",
            backgroundColor: "grey.900",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: theme.spacing(3),
            [theme.breakpoints.down("lg")]: {
              width: "100%",
              border: "solid",
              borderImageSlice: 1,
              borderWidth: 10,
              borderImageSource: theme.palette.gradient.brand,
              background: (theme) =>
                `url(/hexagon-overlay.svg) no-repeat, ${theme.palette.grey[900]}`,
              backgroundSize: "cover",
            },
          })}
        >
          {children}
        </Box>
      </Box>
    </main>
  );
};

export default LandingLayout;
