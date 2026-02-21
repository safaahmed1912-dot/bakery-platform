import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/stl-library", label: "STL Library" },
  { href: "/designer-request", label: "Cookie Cutter Designer Request" },
  { href: "/profile", label: "Profile" },
];

export function MainNav() {
  return (
    <nav className="nav">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="nav-link">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
