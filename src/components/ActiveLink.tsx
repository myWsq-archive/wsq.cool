import { Children, cloneElement } from "react";
import { useRouter } from "next/router";
import { LinkProps } from "next/link";

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
  return <span>{cloneElement(child, { className, href: props.href })}</span>;
};

export default ActiveLink;
