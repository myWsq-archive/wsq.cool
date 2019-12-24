import { NextPage } from "next";
import { getDocDetail, DocDetail } from "@/services/post";
import Layout from "@/components/Layout";
import Head from "next/head";
import md from "markdown-it";
import Article from "@/components/Article";
import styled from "styled-components";

export interface IndexInitialProp {
  post: DocDetail;
}

const ArticleContainer = styled.div`
  max-width: 100%;
  width: 816px;
  padding: 1rem;
  margin: 0 auto;
`;

const Author: NextPage<IndexInitialProp> = props => {
  const { post } = props;
  return (
    <Layout>
      <Head>
        <title>{post.title} - wsq.cool</title>
      </Head>
      <ArticleContainer>
        <Article content={post.sourcecode}></Article>
      </ArticleContainer>
    </Layout>
  );
};

Author.getInitialProps = async ctx => {
  const post = await getDocDetail("author", 644307);
  const markdown = new md({
    html: true
  });
  post.sourcecode = markdown.render(post.sourcecode);
  return {
    post
  };
};

export default Author;
