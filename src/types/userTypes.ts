export interface IUser {
    id: number,
    name: string
}

export interface IInitialStateType{
    user: IUser,
    isLoading: boolean,
    error: string | null,
}