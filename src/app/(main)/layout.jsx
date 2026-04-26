import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navbar/Header";
import Navbar from "@/components/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
