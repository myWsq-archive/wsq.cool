import { NextPage } from "next";
import { getDocDetail, DocDetail } from "@/services/post";
import Layout from "@/components/Layout";
import Head from "next/head";
import Article from "@/components/Article";
import styled from "styled-components";
import { renderMarkdown } from "@/utils";
export interface IndexInitialProp {
  post: DocDetail;
}

const ArticleContainer = styled.div`
  max-width: 100%;
  width: 816px;
  padding: 1rem;
  margin: 0 auto;
`;

const PostSlug: NextPage<IndexInitialProp> = props => {
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

PostSlug.getInitialProps = async ctx => {
  const slug = ctx.query.slug as string;
  const post = await getDocDetail(slug, 272956);
  post.sourcecode = renderMarkdown(post.sourcecode);
  return {
    post
  };
};

export default PostSlug;
