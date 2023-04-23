import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Button, Typography } from "@mui/material";
import { ChevronRight as ChevronRightIcon } from "@mui/icons-material";

import LandingLayout from "src/components/layouts/LandingLayout";
import HorizontalLogo from "src/components/svg/HorizontalLogo";

const WIDTH_AND_PADDING = 448;

export default function Home() {
  // const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Rapid D&D</title>
        <meta
          name="description"
          content="Dungeons and Dragons character generator using AI to complete an entire character from scratch"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingLayout>
        <Box
          sx={(theme) => ({
            width: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
            [theme.breakpoints.down(WIDTH_AND_PADDING)]: {
              width: "100%",
            },
          })}
        >
          <HorizontalLogo width="100%" />
          <Typography
            variant="h6"
            sx={{
              color: (theme) =>
                theme.palette.getContrastText(theme.palette.grey[900]),
              textAlign: "center",
            }}
          >
            Get ready for epic adventures with quick and easy AI-generated
            characters for your campaign or one shot!
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}
          >
            <Button onClick={signIn}>Sign In</Button>
            <Button
              sx={{
                borderColor: "common.white",
                color: "common.white",
                "&:hover": {
                  borderColor: "grey.500",
                },
              }}
              endIcon={<ChevronRightIcon />}
              variant="outlined"
            >
              More Info
            </Button>
          </Box>
        </Box>
      </LandingLayout>
    </>
  );
}
