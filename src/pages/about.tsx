import Layout from "@/components/Layout";
import styled from "styled-components";
import theme from "@/theme";

const Span = styled.p`
  font-size: 1.2em;
  text-align: center;
  color: ${theme.colors.gray[800]};
  margin-top: 100px;
`;

const About: React.FunctionComponent = () => {
  return (
    <Layout>
      <Span>
        <figure>
          <img
            src="https://ipic-1253962968.cos.ap-beijing.myqcloud.com/2019-11-27-%E4%B8%8B%E8%BD%BD.jpeg"
            width="400"
          ></img>
        </figure>
        This is an about page.
      </Span>
    </Layout>
  );
};

export default About;
