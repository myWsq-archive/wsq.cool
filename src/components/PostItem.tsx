import { PostOrPage } from "@tryghost/content-api";

export interface PostItemProp {
  item: PostOrPage;
}

const PostItem: React.FunctionComponent<PostItemProp> = props => {
  return (
    <section>
      <h1>{props.item.title}</h1>
    </section>
  );
};

export default PostItem;
