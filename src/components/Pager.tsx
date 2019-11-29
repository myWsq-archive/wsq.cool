import { Pagination } from "@tryghost/content-api";

export interface PagerProp {
  pagination: Pagination;
  onNext?: () => void;
  onPrev?: () => void;
}

const Pager: React.FunctionComponent<PagerProp> = props => {
  return <div>{props.pagination.pages}</div>;
};

export default Pager;
