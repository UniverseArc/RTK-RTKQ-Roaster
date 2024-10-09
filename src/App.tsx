import "./index.css"
import RecipeItem from "./components/recipeItem/RecipeItem"
import { Header } from "./components/header/Header"
import { useGetRecipesQuery } from "./store/api/api"
import { CreateRecipe } from "./components/createRecipe/createRecipe"
import { useState } from "react"

function App() {

  const [state, setState] = useState({
    searchTerm: "",
    queryTerm: "",
  })

  const { isLoading, data } = useGetRecipesQuery(state.queryTerm
    //undefined, {skip: !userId}
  )

  const handleSearch = () => {
    setState({ ...state, queryTerm: state.searchTerm })
    console.log(state.searchTerm);
  }

  return (
    <>
      <main>
        <Header />
        <CreateRecipe />

        <article>
          <p>If you wanna find: </p>
          <input value={state.searchTerm} onChange={e => setState({ ...state, searchTerm: e.target.value })}></input>
          <button onClick={handleSearch}>Search</button>
        </article>

        {isLoading ? <div>Loading...</div> : data ? data.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />) : <div>Not found</div>}
      </main>
      {/* <User/> */}
    </>
  )
}

export default App
