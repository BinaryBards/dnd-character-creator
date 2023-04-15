import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  console.log(session);
  return (
    <>
      <Head>
        <title>D&D Character Creator</title>
        <meta
          name="description"
          content="Dungeons and Dragons character generator using AI to complete an entire character from scratch"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button onClick={signIn}>Sign In</button>{" "}
        <button onClick={signOut}>Sign Out</button>
      </main>
    </>
  );
}
