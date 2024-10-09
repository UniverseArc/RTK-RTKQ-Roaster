import { FormEvent, useState } from "react"
import { useCreateRecipeMutation } from "../../store/api/recipeApi"
import styles from './createRecipe.module.css'
import { IRecipeData } from "../../types/recipeTypes"

export const CreateRecipe = () => {

    const [createRecipe] = useCreateRecipeMutation()

    const initialState: IRecipeData = {
        name: "",
        surname: "",
    }

    const [recipe, setRecipe] = useState<IRecipeData>(initialState)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createRecipe(recipe).then(() => {
            setRecipe(initialState)
        })
    }

    return (
        <main className={styles.main}>
            <form onSubmit={handleSubmit}>
                <label>
                    <input className={styles.input} type="text" placeholder="Name" value={recipe.name} onChange={e => setRecipe({ ...recipe, name: e.target.value })} />
                </label>
                <label>
                    <input type="text" placeholder="Surname" value={recipe.surname} onChange={e => setRecipe({ ...recipe, surname: e.target.value })} />
                </label>
                <button type="submit">Create Recipe</button>
            </form>
        </main>
    )
}
