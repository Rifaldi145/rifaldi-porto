import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main
        className={` bg-gradient-to-br from-indigo-800/30 dark:from-zinc-900 via-transparent dark:via-indigo-950/30 to-transparent overflow-clip`}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
