import type { Recipe } from '@/@types/recipe'

async function getRecipe(id: number) {
  const response = await fetch(`http://localhost:3000/api/recipes/${id}`, {
    cache: 'no-store',
  })

  return response.json()
}

export default async function Recipe({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params
  const recipe: Recipe = await getRecipe(id)

  return (
    <div>
      Recipe {id}: {recipe.title}
    </div>
  )
}
