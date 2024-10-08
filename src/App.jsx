import "./index.css"
import RecipeItem from "./components/recipeItem/RecipeItem"
import { Header } from "./components/header/Header"
import { useGetRecipesQuery } from "./store/api/api"
import { CreateRecipe } from "./components/createRecipe/createRecipe"

function App() {

  // const userId = 1;

  const { isLoading, data } = useGetRecipesQuery(
    //undefined, {skip: !userId}
  )
  return (
    <>
      <main>
        <Header />
        <CreateRecipe />
        {isLoading ? <div>Loading...</div> : data ? data.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />) : <div>Not found</div>}
      </main>
      {/* <User/> */}
    </>
  )
}

export default App
