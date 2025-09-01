import type { ReactElement } from "react"

interface ButtonProps {
    variant: "primary" | "secondary",
    text: string,
    startIcon?: ReactElement,
    onClick?: () => void
}

const variantStyle = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "text-purple-400 bg-purple-200",
}

const defaultStyle = "px-4 py-2 rounded-md flex justify-center items-center gap-1 cursor-pointer"


const Button = (props: ButtonProps) => {
  return (
    <button className={`${defaultStyle} ${variantStyle[props.variant]}`} onClick={props.onClick}>
        {props.startIcon}
        {props.text}
    </button>
  )
}

export default Button;