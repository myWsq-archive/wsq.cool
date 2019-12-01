import { Pagination } from "@tryghost/content-api";
import styled from "styled-components";
import theme from "@/theme";

export interface PagerProp {
  pagination: Pagination;
  onNext?: () => void;
  onPrev?: () => void;
}

const PagerContainer = styled.div`
  color: ${theme.colors.gray[700]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const PagerIcon = styled.i`
  font-size: 2em;
  color: ${theme.colors.gray[500]};
  &:hover {
    color: ${theme.colors.teal[500]};
  }
  cursor: pointer;
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.7);
  }
  margin: 0 1em;
  &.hidden {
    visibility: hidden;
  }
`;

const Pager: React.FunctionComponent<PagerProp> = props => {
  const { page, pages, next, prev } = props.pagination;
  return (
    <PagerContainer>
      <PagerIcon
        className={`iconfont icon-page-left ${!prev && "hidden"}`}
      ></PagerIcon>
      <div>
        Page <strong>{page}</strong> of <strong>{pages}</strong>
      </div>
      <PagerIcon
        className={`iconfont icon-page-right ${!next && "hidden"}`}
      ></PagerIcon>
    </PagerContainer>
  );
};

export default Pager;
