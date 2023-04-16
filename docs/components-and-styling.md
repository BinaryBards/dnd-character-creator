# 🧱 Components and Styling

## Normalization and global style resets

- We use the [`CssBaseline`](https://mui.com/material-ui/react-css-baseline/) component from MUI to reset browser defaults and normalize our app styles.

## MUI Theme

We will be customizing our app as much as possible through the MUI theme. This is the source of truth for styling. The theme makes our lives easier because we can make a change in one place and it will cascade to all the appropriate components.

The theme file lives in [`/src/theme/inde.jx`](/src/theme/index.js).

We don't have to fill in every field possible in the theme because MUI ships with a default theme which has reasonably good looking, albeit basic styling. Any fields that we add to the theme object inside the file will override the default theme.

MUI has a [list](https://mui.com/material-ui/customization/default-theme/) of all fields supported by their theme and their default values.

## How to style components using MUI

There are 3 different ways that we will be styling our components using MUI:

1. The `sx` prop: Every MUI component has an `sx` prop which is a JS object containing CSS properties/fields. There are some really cool shortcuts with field names and values. The `sx` prop is mostly used for one off changes or when there are just a few CSS properties that need styling overrides.

```jsx
import { Box } from "@mui/material";

const MyComponent = () => {
  return (
    <Box
      sx={{
        width: 200,
        height: 200,
        p: 1,
        backgroundColor: (theme) => theme.palette.primary,
      }}
    >
      Hi I'm a div!
    </Box>
  );
};
```

As you can see, there are some unique things going on here:

- CSS properties are cammel case isntead of kabob case.
- Properties that accept pixel units like `width` and `height` can be written as a number.
- Specific properties like `padding` can be written in shorthand like `p` and the numeric value for some of these properties represents a spacing unit instead of a pixel. In the case of padding, the `1` actually means 1 spacing unit which is 4 px in the default MUI theme.
- You can use values from the theme via callback function, note the `backgroundColor` property.

The MUI [docs on sx](https://mui.com/material-ui/customization/how-to-customize/#the-sx-prop) go through more examples and document shorthand properties and which ones can use spacing units.

2. Reusable `styled` components: This technique is used when you have an MUI component with style overrides that needs to be used multiple times within a component file. You can read more about this technique [here](https://mui.com/material-ui/customization/how-to-customize/#2-reusable-component).

```jsx
import { Grid } from "@mui/material";
import {styled} from '@mui/system

const RedGridItem = styled(Grid)({
  backgroundColor: (theme) => theme.palette.red[200],
  height: 200,
});

const MyGrid = () => {
  return (
    <Grid container>
      <RedGridItem item>Item 1</RedGridItem>
      <RedGridItem item>Item 2</RedGridItem>
      <RedGridItem item>Item 3</RedGridItem>
    </Grid>
  );
};

export default MyGrid;
```

3. Making changes to the global MUI theme. This is located in the `src/theme/index.js` file in this app. These changes will affect all components of the specified type. You can change more than a component's styles this way. The [docs](https://mui.com/material-ui/customization/theme-components/) give more examples but here's an example of how you can override styles and default props at a global level:

```jsx
const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        containedPrimary: {
          background: "linear-gradient(#42E695, #3BB2B8)",
        },
      },
    },
  },
});
```

This themes the MuiButton component to have a default variant of `contained` which is basically a button with a background color and also overrides the styles for a contained button to have a background with a linear gradient instead of a solid color.

## Semantic HTML tags

When writing semantic tags such as `main`, `div`, `span`, etc -- use the [MUI Box component](https://mui.com/material-ui/react-box/). This allows us to use the `sx` prop to style these elements.

## Typography

When adding any kind of typography elements such as `h1`, `h2`, `p`, `caption`, etc -- use the [MUI Typography component](https://mui.com/material-ui/react-typography/).

## Links

When adding any kind of page link or external link, isntead of using an `a` tag, use the [MUI Link component](https://mui.com/material-ui/react-link/). This has been set up in the [theme/index.js]('src/theme/index.js') file to use the [NextJS Link component](https://nextjs.org/docs/api-reference/next/link) with the MUI Link theme styles. The NextJS Link component allows us to link to pages within our app with relative routes `href='/my-page'`.

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
