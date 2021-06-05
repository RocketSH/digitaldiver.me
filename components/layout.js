import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main> {children} </main>
      <Footer />
    </div>
  );
};

export default Layout;
