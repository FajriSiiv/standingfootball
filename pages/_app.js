import "../styles/globals.css";
import "antd/dist/antd.css";
import LayoutFill from "./Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutFill>
      <Component {...pageProps} />
    </LayoutFill>
  );
}

export default MyApp;
