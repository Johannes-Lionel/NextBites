import type { CSSProperties } from "react";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="card">
      <div
        className="card-art"
        style={{ "--art-bg": recipe.color } as CSSProperties}
        aria-hidden="true"
      >
        {recipe.emoji}
      </div>
      <div className="card-content">
        <p className="card-cuisine">{recipe.cuisine}</p>
        <h3>{recipe.title}</h3>
        <div className="card-meta">
          <span>⏱ {recipe.minutes} min</span>
          <span className="difficulty">{recipe.difficulty}</span>
        </div>
      </div>
    </article>
  );
}
