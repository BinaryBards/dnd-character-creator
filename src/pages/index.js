import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mui/material";

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
      <main>
        <Button onClick={signIn}>Sign In</Button>
        <Button variant="outline" onClick={signOut}>
          Sign Out
        </Button>
      </main>
    </>
  );
}
