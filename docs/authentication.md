# 🔐 Authentication

Auth is handled with the open source [Next Auth](https://next-auth.js.org/getting-started/introduction) library. We currently support two auth providers:

- [Email Magic Link](https://next-auth.js.org/providers/email)
- [Google Oauth](https://next-auth.js.org/providers/google)

## Auth Config File

Providers, adapters and any other config for Next Auth is setup in the [[...nextauth].ts](/src/pages/api/auth/[...nextauth].ts) file.

## Email Magic Link

- We use [Send Grid](https://sendgrid.com/) for an SMTP service. When using Next Auth's email provider, it is required that you also setup a database adapter. You can find more details about our db/adapter in the [database README](/docs/database.md).

## Google Oauth

- Requires configuration of Oauth credentials in the Google developer console.

## Sessions

We use the `database` session strategy provided by Next Auth. Instead of an encrypted JWT, a cookie which contains the sessionToken will be passed back and forth between the client and server.
