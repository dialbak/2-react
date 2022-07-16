type HorizontalPosition = '' | '' | ''
type VerticalPosition = '' | '' | ''

type ToastProps = {
    position:
        | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
        | 'center'
}

/**
 * Position prop can not be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */
export const Toast = ({position}: ToastProps) => {
    return <div>Toast Notification Position - {position}</div>
}
