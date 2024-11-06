import "./header.scss";

export default function SiteHeader({ color, children }) {
  return (
    <header className={`site-header-${color} site-header`}>{children}</header>
  );
}
