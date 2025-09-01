interface InputBoxProps {
    placeholder: string,
    value: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const InputBox = function(props: InputBoxProps) {
    return (
        <input type="text" className="border-1 border-gray-400 p-2 w-full rounded outline-none" placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
    )
}


export default InputBox;