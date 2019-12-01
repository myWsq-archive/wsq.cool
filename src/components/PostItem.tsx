import { PostOrPage } from "@tryghost/content-api";
import styled from "styled-components";
import theme from "@/theme";
import Dayjs from "dayjs";
import Link from "next/link";

export interface PostItemProp {
  item: PostOrPage;
}

interface CoverProp {
  imageUrl: string | undefined;
  title: string;
}

const PostItemContainer = styled.section`
  width: 968px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 18px;
`;

const Description = styled.p`
  color: ${theme.colors.gray[600]};
  line-height: 1.8;
  margin: 0.5rem auto;
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.75);
  }
  max-width: 768px;
`;

const Title = styled.h1`
  font-size: 2.6em;
  font-weight: bold;
  text-align: center;
  font-family: ${theme.fontFamily.title};
  color: ${theme.colors.gray[800]};
  margin: 1.5em 0 1em 0;
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
  @media screen and (max-width: ${theme.screens.md}) {
    display: none;
  }
`;

const HiddenTitle = styled(Title)`
  display: none;
  font-size: 1.5em;
  @media screen and (max-width: ${theme.screens.md}) {
    display: inherit;
  }
`;

const Spliter = styled.div`
  background-color: ${theme.colors.teal[500]};
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin: 0 0.6em;
`;

const SubTitle = styled.h3`
  font-size: 1.2em;
  color: ${theme.colors.gray[800]};
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
  font-weight: bold;
  font-family: ${theme.fontFamily.title};
  padding-top: 0.3em;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
`;

const TagLink = styled.a`
  font-weight: 500;
  color: ${theme.colors.gray[800]};
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
  &:hover {
    color: ${theme.colors.teal[400]};
  }
  cursor: pointer;
  margin: 0 0.5em;
`;

const LinkSpliter = styled.em`
  color: ${theme.colors.gray[500]};
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.6);
  }
  &:last-child {
    display: none;
  }
`;

const Cover: React.FunctionComponent<CoverProp> = props => {
  if (props.imageUrl) {
    const ImageContainer = styled.div`
      background-image: url(${props.imageUrl});
      position: relative;
      padding-top: 46.25%;
      background-size: cover;
      background-position: center;
      @media screen and (max-width: ${theme.screens.md}) {
        padding-top: 56.25%;
      }
      border-radius: 2px;
      box-shadow: ${theme.boxShadow.lg};
      margin-bottom: 2rem;
    `;
    const ImageTitle = styled(Title)`
      font-size: 2em;
      position: absolute;
      left: 5%;
      bottom: 5%;
      padding: 0.5em;
      background: rgba(255, 255, 255, 0.8);
      @media (prefers-color-scheme: dark) {
        background: rgba(0, 0, 0, 0.8);
      }
    `;
    return (
      <ImageContainer>
        <ImageTitle>{props.title}</ImageTitle>
      </ImageContainer>
    );
  } else {
    return <Title>{props.title}</Title>;
  }
};

const PostItem: React.FunctionComponent<PostItemProp> = props => {
  return (
    <PostItemContainer>
      <Link href="/post/[slug]" as={`/post/${props.item.slug}`}>
        <div style={{ cursor: "pointer" }}>
          <Cover
            imageUrl={props.item.feature_image}
            title={props.item.title}
          ></Cover>
          <HiddenTitle>{props.item.title}</HiddenTitle>
          <InfoContainer>
            <SubTitle>
              {Dayjs(props.item.updated_at).format("YYYY-MM-DD hh:mm:ss")}
            </SubTitle>
            <Spliter></Spliter>
            <SubTitle>
              {
                // @ts-ignore
                props.item.reading_time
              }
              &nbsp;reading
            </SubTitle>
          </InfoContainer>
          <Description>
            {props.item.custom_excerpt || props.item.excerpt}
          </Description>
        </div>
      </Link>
      {!!props.item.tags.length && (
        <InfoContainer>
          <i
            className="iconfont icon-tag"
            style={{
              color: `${theme.colors.orange[400]}`
            }}
          ></i>
          {props.item.tags.map(tag => [
            <Link href="/tag/[slug]" as={`/tag/${tag.slug}`} key={tag.slug}>
              <TagLink>{tag.name}</TagLink>
            </Link>,
            <LinkSpliter key={tag.slug + ","}>,</LinkSpliter>
          ])}
        </InfoContainer>
      )}
    </PostItemContainer>
  );
};

export default PostItem;
