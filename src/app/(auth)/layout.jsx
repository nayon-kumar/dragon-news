import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AuthLayout;
