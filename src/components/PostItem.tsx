import styled from "styled-components";
import theme from "@/theme";
import Dayjs from "dayjs";
import Link from "next/link";
import { DocListItem } from "@/services/post";

export interface PostItemProp {
  item: DocListItem;
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
  margin: 2rem auto;
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
  line-height: 1.5;
  color: ${theme.colors.gray[800]};
  margin: 0;
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

const FloatCover = styled.img`
  float: right;
  width: 250px;
  margin-left: 1em;
  border-radius: 2px;
  box-shadow: ${theme.boxShadow.lg};
  @media screen and (max-width: ${theme.screens.md}) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 1em;
  }
`;

const PostItem: React.FunctionComponent<PostItemProp> = props => {
  return (
    <PostItemContainer>
      <a href={`/post/${props.item.slug}`}>
        <div style={{ cursor: "pointer" }}>
          <Title>{props.item.title}</Title>
          <HiddenTitle>{props.item.title}</HiddenTitle>
          <InfoContainer>
            <SubTitle>
              {Dayjs(props.item.published_at).format("YYYY-MM-DD hh:mm:ss")}
            </SubTitle>
            <Spliter></Spliter>
            <SubTitle>
              {props.item.word_count}
              &nbsp;words
            </SubTitle>
          </InfoContainer>
          <Description>
            {props.item.cover && (
              <FloatCover src={props.item.cover}></FloatCover>
            )}
            {props.item.custom_description || props.item.description}
          </Description>
        </div>
      </a>
      {/* {!!props.item.tags.length && (
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
      )} */}
    </PostItemContainer>
  );
};

export default PostItem;
