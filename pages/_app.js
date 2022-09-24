import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
