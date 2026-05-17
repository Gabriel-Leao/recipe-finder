import type { Recipe } from '@/@types/recipe'

const getRecipes = async () => {
  const response = await fetch('http://localhost:3000/api/recipes', {
    cache: 'no-store',
  })

  return response.json()
}

export default async function Recipes() {
  const recipes = await getRecipes()
  return (
    <>
      {recipes.map((recipe: Recipe) => (
        <div key={recipe.id}>
          Recipe {recipe.id}: {recipe.title}
        </div>
      ))}
    </>
  )
}
