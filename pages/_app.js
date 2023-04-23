import { useEffect } from "react";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  // clicking sound effect
  useEffect(() => {
    const playSound = () => {
      const audio = new Audio("/click.mp3");
      audio.play();
    };

    document.addEventListener("click", playSound);

    return () => {
      document.removeEventListener("click", playSound);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
