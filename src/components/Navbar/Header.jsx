import logo from "@/assets/logo.png";
import { format } from "date-fns";
import Image from "next/image";
import MyContainer from "../Container/MyContainer";

const Header = () => {
  return (
    <MyContainer>
      <div className="text-center mt-12.5">
        <Image
          height={60}
          width={471}
          src={logo}
          alt="Dragon news logo"
          className="mx-auto"
        />
        <p className="text-[#706F6F] mt-5">Journalism Without Fear or Favour</p>
        <p className="text-[#706F6F] mt-2.5">
          {format(new Date(), "EEE, MMM dd, yyyy")}
        </p>
      </div>
    </MyContainer>
  );
};

export default Header;
