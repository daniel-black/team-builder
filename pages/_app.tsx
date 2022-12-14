import { withTRPC } from "@trpc/next";
import { AppType } from "next/dist/shared/lib/utils";
import { ServerRouter } from "../server/router";
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps?.session || null}>
      <Component {...pageProps} />
    </SessionProvider>
  );
} 

export default withTRPC<ServerRouter>({
  config({ ctx }) {
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return { 
      url,
      headers: {
        "x-ssr": "1",
      } 
    };
  },
  ssr: true,
})(App);