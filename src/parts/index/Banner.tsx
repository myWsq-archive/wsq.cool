import styled from "styled-components";
import theme from "@/theme";

const Container = styled.section`
  background: ${theme.colors.gray[200]};
  font-size: 3rem;
  text-align: center;
  padding: 4rem 0;
  color: ${theme.colors.gray[600]};
  font-weight: 600;
`;

const Banner: React.FunctionComponent = () => {
  return <Container>Hello Next.js</Container>;
};
export default Banner;
