import prism from "prismjs";
import { useEffect } from "react";
import styled from "styled-components";
import theme from "@/theme";

export interface ArticleProp {
  content: string;
}

const ArticleContainer = styled.article`
  max-width: 100%;
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.75);
  }
  color: ${theme.colors.gray[700]};
  strong {
    color: ${theme.colors.gray[800]};
    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 0.85);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${theme.colors.gray[800]};
    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 0.85);
    }
    font-family: ${theme.fontFamily.title};
  }

  line-height: 1.8;
  /* a {
    @apply underline text-teal-500;
  } */
  & > * {
    margin: 1.1em auto;
  }

  h1 {
    margin-top: 0;
    font-size: 2.5em;
  }

  h2 {
    margin-top: 42px;
    font-size: 1.5em;
    font-weight: 600;
  }

  h3 {
    font-size: 1.3em;
    font-weight: 600;
  }

  h4 {
    font-size: 1.1em;
  }

  h5 {
    font-size: 1em;
    font-weight: 600;
  }

  h6 {
    font-size: 1em;
    font-weight: 600;
    color: #555;
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
  }

  img {
    max-width: 100% !important;
  }

  ol,
  ul {
    list-style-position: inside;
    line-height: 1.8;
  }
  a {
    color: inherit;
    &:hover {
      color: ${theme.colors.teal[400]};
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }
  table,
  th,
  td {
    border: 1px solid ${theme.colors.gray[400]};
    @media (prefers-color-scheme: dark) {
      border: 1px solid ${theme.colors.gray[700]};
    }
  }
  th,
  td {
    padding: 1em;
  }
`;

const Article: React.FunctionComponent<ArticleProp> = props => {
  useEffect(() => {
    prism.highlightAll();
  }, [props.content]);
  return (
    <ArticleContainer
      dangerouslySetInnerHTML={{ __html: props.content }}
    ></ArticleContainer>
  );
};

export default Article;
