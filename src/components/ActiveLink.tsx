import { Children, cloneElement } from "react";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";

const ActiveLink: React.FunctionComponent<LinkProps> = props => {
  const router = useRouter();
  const child = Children.only(props.children);
  let className = "";
  if (
    props.href === router.pathname &&
    (!props.as || props.as === router.asPath)
  ) {
    className = "active";
  }

  // @ts-ignore
  return <Link {...props}>{cloneElement(child, { className })}</Link>;
};

export default ActiveLink;
