import RootLayout from "../layout";
import "../globals.css";
import { AppProps } from "next/app";

export default function Layout({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
