import Link from "next/link";
import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">GOOD FOOD, GOOD MOOD</p>
        <h1>
          Find your
          <br />
          <span>next bite.</span>
        </h1>
        <p className="hero-copy">
          Simple, delicious recipes for whatever you&apos;re craving.
          <br className="desktop-break" /> Pick a favorite and let&apos;s get
          cooking.
        </p>
        <a className="button button-dark" href="#recipes">
          Explore recipes <span aria-hidden="true">↓</span>
        </a>
        <div className="hero-doodle" aria-hidden="true">
          <span>🥑</span>
          <span>🍋</span>
          <span>🍅</span>
        </div>
      </section>

      <section className="recipes-section" id="recipes">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A LITTLE INSPIRATION</p>
            <h2>Recipes to love</h2>
          </div>
          <p className="recipe-count">{recipes.length} tasty ideas</p>
        </div>
        <div className="grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
      <footer className="footer" id="about">
        <Link className="brand" href="/" aria-label="NextBites home">
          <span className="brand-mark" aria-hidden="true">
            🌿
          </span>
          <span>NextBites</span>
        </Link>
        <p>Made for good food and the people you share it with.</p>
      </footer>
    </main>
  );
}
