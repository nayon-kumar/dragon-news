import logo from "@/assets/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Image src={logo} alt="Dragon news logo" />
      <p className="text-[#706F6F]">Journalism Without Fear or Favour</p>
    </div>
  );
};

export default Header;
