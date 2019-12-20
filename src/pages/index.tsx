import Layout from "@/components/Layout";
import { NextPage } from "next";
import PostItem from "@/components/PostItem";
import styled from "styled-components";
import { getPosts, DocListItem } from "@/services/post";

export interface IndexInitialProp {
  posts: DocListItem[];
}

const Spliter = styled.div`
  height: 1px;
  width: 154px;
  margin: 5% auto;
  background: rgba(0, 0, 0, 0.1);
  @media (prefers-color-scheme: dark) {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Index: NextPage<IndexInitialProp> = props => {
  return (
    <Layout>
      {props.posts.map(post => [
        <PostItem key={post.id} item={post}></PostItem>,
        <Spliter key={post.id + ","}></Spliter>
      ])}
      {/* <Pager pagination={props.pagination}></Pager> */}
    </Layout>
  );
};

Index.getInitialProps = async ctx => {
  const posts = await getPosts();
  return {
    // @ts-ignore
    posts: posts
  };
};

export default Index;
