import styles from './RecipeItem.module.css'
import { useActions } from '../../hooks/useActions'
import { useFavourites } from '../../hooks/useFavourites'

export const RecipeItem = ({ recipe }) => {
  
  const state = useFavourites()

  const {toggleAddFavourite} = useActions()

  const sendData = (recipe) => {
    toggleAddFavourite(recipe)
  }
  const isExists = state.some(r => r.id === recipe.id)

  return (
    <div className={styles.receiptItem}>
      <h2>{recipe.name} {recipe.surname}</h2>
      <button onClick={() => sendData(recipe)}>{isExists ? "Remove from" : "Add to"} favourites xd</button>
    </div >
  )
}

export default RecipeItem
