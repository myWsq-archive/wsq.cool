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
  padding: 0 0.8rem;
  text-decoration: none;
  @media (prefers-color-scheme: dark) {
    color: ${theme.colors.gray[500]};
  }
`;

const Logo = styled.div`
  img {
    width: 420px;
  }
  @media (prefers-color-scheme: dark) {
    img {
      filter: invert(1);
    }
  }
  @media (max-width: ${theme.screens.sm}) {
    img {
      width: 80%;
    }
  }
  text-align: center;
  cursor: pointer;
  margin: 2em 0;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const NavContainer = styled.section`
  text-align: center;
  margin-bottom: 7%;
`;

const HeaderContainer = styled.header``;

const HeaderComponent: React.FunctionComponent = () => {
  const layout = LayoutContainer.useContainer();
  return (
    <HeaderContainer>
      <Logo>
        <a href="/">
          <img src="https://ipic-1253962968.cos.ap-beijing.myqcloud.com/2020-02-11-PNG%E5%9B%BE%E5%83%8F-BDAFD91BA796-1%20-2-.png"></img>
        </a>
      </Logo>
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
