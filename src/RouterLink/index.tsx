import { Link } from "react-router"

type RouterLinkProps = {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<'a'>

export const RouterLink = ({ href, children, ...props }: RouterLinkProps) => {
  return <Link to={href} {...props}>{children}</Link>
}