import Link from "next/link";

export default function NavBar() {
  return (
    <header className="navbar">
      <Link className="brand" href="/" aria-label="NextBites home">
        <span className="brand-mark" aria-hidden="true">
          🌿
        </span>
        <span>NextBites</span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#recipes">Recipes</a>
        <a href="#about">Our kitchen</a>
        <a className="nav-cta" href="#recipes">
          Get cooking
        </a>
      </nav>
    </header>
  );
}
