import { Link } from "react-router-dom";

const links = [
  { title: "من نحن", url: "about" },
  { title: "اقرب الصيدليات", url: "nearestP" },
  { title: "تواصل معانا", url: "contact" },
];

function NavLinks() {
  return (
    <div className="hidden md:block">
      <nav aria-label="Global">
        <ul className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <li key={link.title}>
              <Link to={link.url} className="text-gray-500 transition hover:text-gray-500/75">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavLinks;
