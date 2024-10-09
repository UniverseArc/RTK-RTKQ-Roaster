export interface IRecipe {
    id: number
    name: string
    surname: string
}

export interface IRecipeData extends Omit<IRecipe, "id"> {} //Взять всё из интерфейса Recipe, только без id.