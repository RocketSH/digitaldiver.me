import Head from "next/head";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>digitaldiver.me</title>
        <link rel="icon" href="/bubble-tea_250x250.png" />
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
