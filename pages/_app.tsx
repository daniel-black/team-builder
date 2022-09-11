import { withTRPC } from "@trpc/next";
import { AppRouter } from "./api/trpc/[trpc]";
import { AppType } from "next/dist/shared/lib/utils";

const App: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
} 

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';
    return { url };
  },
  ssr: false,
})(App);