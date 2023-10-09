import Image from "next/image";
import LogoImage from 'public/assets/images/logo.svg'
import { LogoWrapper, StyledLogoImage } from "./Header.style";
const Logo = () => {
  return (
    <LogoWrapper>
      <StyledLogoImage
        priority
        src={LogoImage}
        alt={""}
      />
    </LogoWrapper>
  );
};

export default Logo;
