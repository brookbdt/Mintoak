import "../styles/globals.scss";
import "antd/dist/antd.css";
import AppContextProvider from "../components/helpers/AppContext";
import Header from "../components/headers/Header";
import Footer from "../components/footers/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AppContextProvider>
  );
}

export default MyApp;
