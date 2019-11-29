import prism from "prismjs";
import { useEffect } from "react";

export interface ArticleProp {
  content: string;
}

const Article: React.FunctionComponent<ArticleProp> = props => {
  useEffect(() => {
    prism.highlightAll();
  }, [props.content]);
  return (
    <article dangerouslySetInnerHTML={{ __html: props.content }}></article>
  );
};

export default Article;
