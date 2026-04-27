import Footer from "@/components/Footer/Footer";
import BreakingNews from "@/components/Header/BreakingNews";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <BreakingNews />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
