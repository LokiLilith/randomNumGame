type ButtonProps = {
    click(): void
    text: string
    style: string
    dsb?:boolean
    
}

const Button: React.FC<ButtonProps> = ({click,text,style,dsb}) => {

    return (
        <button disabled={dsb} onClick={click} className={style}>{text}</button>
    )
}

export default Button