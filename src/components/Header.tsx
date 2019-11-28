import styled from "styled-components";
import theme from "@/theme";
import ActiveLink from "./ActiveLink";

const StyledLink = styled.a`
  cursor: pointer;
  color: ${theme.colors.gray[700]};
  &:hover,
  &.active {
    color: ${theme.colors.teal[500]};
  }
  padding: 0 0.5rem;
`;

const NavItem = styled.section`
  display: flex;
  align-items: center;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Logo = styled.h1`
  color: ${theme.colors.gray[800]};
`;

const getNavItems = () => {
  const links = [
    {
      text: "Home",
      path: "/"
    },
    {
      text: "About",
      path: "/about"
    }
  ];
  return links.map(item => (
    <NavItem key={item.text + item.path}>
      <ActiveLink href={item.path}>
        <StyledLink>{item.text}</StyledLink>
      </ActiveLink>
    </NavItem>
  ));
};

const HeaderContainer = styled.header`
  display: flex;
  height: 4rem;
  padding: 0 1rem;
  box-shadow: ${theme.boxShadow.default};
`;

const HeaderComponent: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <NavItem>
        <Logo>Hello</Logo>
      </NavItem>
      <Spacer></Spacer>
      {getNavItems()}
    </HeaderContainer>
  );
};

export default HeaderComponent;
