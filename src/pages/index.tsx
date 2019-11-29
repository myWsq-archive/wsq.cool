import Layout from "@/components/Layout";
import { NextPage } from "next";
import { CMS } from "@/utils";
import { PostOrPage, Pagination } from "@tryghost/content-api";
import Pager from "@/components/Pager";
import PostItem from "@/components/PostItem";

export interface IndexInitialProp {
  posts: PostOrPage[];
  pagination: Pagination;
}

const Index: NextPage<IndexInitialProp> = props => {
  return (
    <Layout>
      {props.posts.map(post => (
        <PostItem key={post.id} item={post}></PostItem>
      ))}
      <Pager pagination={props.pagination}></Pager>
      中文字体
    </Layout>
  );
};

Index.getInitialProps = async ctx => {
  const posts = await CMS.posts.browse({ fields: ["title", "id", "html"] });
  return {
    // @ts-ignore
    posts: posts as PostOrPage[],
    pagination: posts.meta.pagination
  };
};

export default Index;
