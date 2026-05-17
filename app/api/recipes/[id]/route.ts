import recipes from '@/data/recipes.json'

type Params = {
  params: Promise<{
    id: string
  }>
}

export async function GET(_: Request, { params }: Params) {
  const { id } = await params

  try {
    const recipe = recipes.find((recipe) => recipe.id === parseInt(id))
    if (!recipe) {
      return new Response('Recipe not found', { status: 404 })
    }
    return Response.json(recipe)
  } catch (error) {
    console.error('Error fetching recipe: ', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
