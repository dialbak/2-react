import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

export const Box = () => {
    const theme = useContext(ThemeContext)
    return (
        <div>
            <span style={{color: theme.primary.main}}>Theme </span>
            <span style={{color: theme.secondary.main}}>context</span>
        </div>
    )
}
