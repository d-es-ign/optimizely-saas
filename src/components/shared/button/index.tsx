import { type PropsWithChildren, type ComponentProps } from "react"
import Link from "next/link"

type ButtonTypes = typeof buttonTypes
type ButtonVariants = typeof buttonVariants
type ButtonColors = typeof buttonColors

export type ButtonProps = Readonly<PropsWithChildren<{
    url?: string | URL
    buttonType?: keyof ButtonTypes
    buttonVariant?: keyof ButtonVariants
    buttonColor?: keyof ButtonColors
}> & Omit<ComponentProps<typeof Link>, 'href'>>

const buttonTypes = {
    primary: "primary",
    secondary: "secondary",
};
const buttonVariants = {
    default: "default",
    cta: "cta",
};
const buttonColors = {
    default: "",
    dark: "dark",
    light: "light"
}
export function Button ({
    className = "",
    buttonType = "primary",
    buttonVariant = "default",
    buttonColor = "default",
    url = "#", 
    children, 
    ...props }: ButtonProps
) {
    const hrefValue = url ? (typeof url == 'string' ? url : url.href) : "#"
    const classNameValue = `${buttonTypes[buttonType]} ${ buttonVariants[buttonVariant] } ${ buttonColors[buttonColor] } ${className}`.trim()

    return <Link href={ hrefValue } className={ classNameValue } {...props}>
        <div className="btn__content">{children}</div>
    </Link> 
  }
  
  export default Button;