import { HTMLAttributes } from 'react'
import './styles.css'

interface Avatarprops extends HTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}
export function Avatar({ hasBorder = true, ...props }: Avatarprops) {
    return(
            <img
                className={hasBorder ? "avatar-with-border" : "avatar"}
                { ...props }
            />
    )
}