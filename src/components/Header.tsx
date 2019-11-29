import styled from "styled-components";
import theme from "@/theme";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import { LayoutContainer } from "@/containers/Layout";

const StyledLink = styled.a`
  cursor: pointer;
  color: ${theme.colors.gray[700]};
  &:hover,
  &.active {
    color: ${theme.colors.teal[500]};
  }
  font-weight: 500;
  padding: 0 1rem;
  text-decoration: none;
`;

const Logo = styled.h1`
  color: ${theme.colors.gray[800]};
  font-family: ${theme.fontFamily.title}
  text-align: center;
  cursor: pointer;
  line-height: 2em;
  font-size: 3em;
`;

const NavContainer = styled.section`
  text-align: center;
`;

const HeaderContainer = styled.header``;

const HeaderComponent: React.FunctionComponent = () => {
  const layout = LayoutContainer.useContainer();
  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>wsq.cool</Logo>
      </Link>
      <NavContainer>
        <ActiveLink href="/">
          <StyledLink>Home</StyledLink>
        </ActiveLink>
        <ActiveLink href="/author">
          <StyledLink>Author</StyledLink>
        </ActiveLink>
        <StyledLink href="mailto: wsq961@outlook.com">Contact</StyledLink>
        <StyledLink onClick={() => layout.setSearchPanelVisible(true)}>
          Search
        </StyledLink>
      </NavContainer>
    </HeaderContainer>
  );
};

export default HeaderComponent;
