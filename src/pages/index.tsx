import Layout from "@/components/Layout";
import { NextPage } from "next";
import { CMS } from "@/utils";
import { PostOrPage, Pagination } from "@tryghost/content-api";
import Pager from "@/components/Pager";
import PostItem from "@/components/PostItem";
import styled from "styled-components";

export interface IndexInitialProp {
  posts: PostOrPage[];
  pagination: Pagination;
}

const Spliter = styled.div`
  height: 1px;
  width: 154px;
  margin: 2rem auto;
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
      <Pager pagination={props.pagination}></Pager>
    </Layout>
  );
};

Index.getInitialProps = async ctx => {
  const posts = await CMS.posts.browse({ include: "tags" });
  return {
    // @ts-ignore
    posts: posts as PostOrPage[],
    pagination: posts.meta.pagination
  };
};

export default Index;
