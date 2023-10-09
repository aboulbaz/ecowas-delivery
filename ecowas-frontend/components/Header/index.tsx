import { useRouter } from "next/router";
import Filter from "./Filter";
import { HeaderWrapper } from "./Header.style";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Title from "./Title";
import TranslationDropdown from "./TranslationDropdown";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Title />
      <TranslationDropdown />
      <NavMenu />
      <Logo />
    </HeaderWrapper>
  );
};

export default Header;
