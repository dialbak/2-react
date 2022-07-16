import React, {createContext, useState} from "react"

type AuthUser = {
    name: string
    email: string
}
type UserContextProviderProps = {
    children: React.ReactNode
}
type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
// je cree un context de type UserContextType
export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return (
        // je provide directement le context ici avec les types de données
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
