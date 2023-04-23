import { forwardRef } from "react";
import { createTheme } from "@mui/material/styles";
import NextLink from "next/link";

import { BRAND_GRADIENT, DEFAULT_BUTTON_VARIANT } from "./constants";

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  return <NextLink ref={ref} {...props} />;
});

/*
  We are using an MUI technique called theme composition. This is creating a default MUI theme and then using that theme to access palette colors
  or whatever other values you need from the default MUI theme to create your custom theme overrides in the second `createTheme` function call.
*/

// Create default instance of MUI theme
let theme = createTheme({
  palette: {
    gradient: { brand: BRAND_GRADIENT },
    primary: { main: "#42E695" },
  },
});

// Our custom theme with overrides which will be exported and used in our theme provider.
theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: theme.palette.grey[200],
        },
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: DEFAULT_BUTTON_VARIANT,
      },
      styleOverrides: {
        containedPrimary: {
          background: theme.palette.gradient.brand,
          color: theme.palette.text.primary,
        },
      },
    },
  },
  palette: { ...theme.palette },
});

export default theme;
