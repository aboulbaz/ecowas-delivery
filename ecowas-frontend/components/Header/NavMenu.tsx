import { FormattedMessage } from "react-intl";
import {
  NavMenuList,
  NavMenuListItem,
  NavMenuTitle,
  NavMenuWrapper,
} from "./Header.style";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";
import { useLanguageContext } from "utils/context";
import { LANGUAGES } from "utils/constants";
import { useMemo } from "react";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NavMenu = () => {
  const { language } = useLanguageContext();
  const router = useRouter();
  const isEnglish = useMemo(() => {
    return language !== LANGUAGES.EN;
  }, [language]);
  return (
    <NavMenuWrapper>
      <NavMenuTitle>
        <FormattedMessage id={"layout.menu"} defaultMessage={"layout.menu"} />
      </NavMenuTitle>
      <NavMenuList>
        <StyledLink href="/overview" passHref>
          <NavMenuListItem
            isActive={router.pathname === "/overview"}
            maxWidth={isEnglish}
          >
            <FormattedMessage
              id={"layout.menu-items.overview"}
              defaultMessage={"defaultMessage"}
            />
          </NavMenuListItem>
        </StyledLink>
        <StyledLink href="/dimension-results" passHref>
          <NavMenuListItem
            isActive={router.pathname === "/dimension-results"}
            maxWidth={isEnglish}
          >
            <FormattedMessage
              id={"layout.menu-items.dimension-results"}
              defaultMessage={"defaultMessage"}
            />
          </NavMenuListItem>
        </StyledLink>
        <StyledLink href="/country-comparison" passHref>
          <NavMenuListItem
            isActive={router.pathname === "/country-comparison"}
            maxWidth={isEnglish}
          >
            <FormattedMessage
              id={"layout.menu-items.country-comparison"}
              defaultMessage={"defaultMessage"}
            />
          </NavMenuListItem>
        </StyledLink>
        <StyledLink href="/country-results" passHref>
          <NavMenuListItem
            isActive={router.pathname === "/country-results"}
            maxWidth={isEnglish}
          >
            <FormattedMessage
              id={"layout.menu-items.country-results"}
              defaultMessage={"defaultMessage"}
            />
          </NavMenuListItem>
        </StyledLink>
        <StyledLink href="/hcd-gender-index" passHref>
          <NavMenuListItem
            isActive={router.pathname === "/hcd-gender-index"}
            maxWidth={isEnglish}
          >
            <FormattedMessage
              id={"layout.menu-items.hcd-gender-index"}
              defaultMessage={"defaultMessage"}
            />
          </NavMenuListItem>
        </StyledLink>
        <StyledLink href="/hcd-gender-index-deep-dive" passHref>
          <NavMenuListItem
            isActive={router.pathname === "/hcd-gender-index-deep-dive"}
            maxWidth={isEnglish}
          >
            <FormattedMessage
              id={"layout.menu-items.hcd-gender-index-deep-dive"}
              defaultMessage={"defaultMessage"}
            />
          </NavMenuListItem>
        </StyledLink>
        <StyledLink href="/methodology" passHref>
          <NavMenuListItem
            isActive={router.pathname === "/methodology"}
            maxWidth={isEnglish}
          >
            <FormattedMessage
              id={"layout.menu-items.methodology"}
              defaultMessage={"defaultMessage"}
            />
          </NavMenuListItem>
        </StyledLink>
      </NavMenuList>
    </NavMenuWrapper>
  );
};

export default NavMenu;
