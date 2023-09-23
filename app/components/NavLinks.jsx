import Link from "next/link";

const NavLinks = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="mx-3 cursor-pointer hover:text-cyan-500 transition-colors"
    >
      {title}
    </Link>
  );
};

export default NavLinks;
