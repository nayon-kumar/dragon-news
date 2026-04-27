import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
