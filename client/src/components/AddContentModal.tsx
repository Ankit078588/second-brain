import { IoCloseCircleSharp } from "react-icons/io5";
import InputBox from "./ui/InputBox";
import Button from "./ui/Button";


interface ModalProps {
    open: boolean,
    onCloseFunction: () => void
}


const AddContentModal = (props: ModalProps) => {
  return (
    props.open === true && 
        <div className="w-screen h-screen fixed top-0 left-0 bg-black/75 flex justify-center items-center">
            <div className="w-80 h-fit p-4 bg-white rounded">
                <div className="flex justify-end">
                    <IoCloseCircleSharp size={22} className="cursor-pointer" onClick={props.onCloseFunction}/>
                </div>
                <div className="flex flex-col gap-2 pt-4">
                    <InputBox placeholder={'Title'} value={'abcd'} />
                    <InputBox placeholder={'Link'} value={'efgh'} />
                </div>
                <div className="flex items-center justify-center p-3">
                    <Button variant="primary" text="Submit" />
                </div>
            </div>
        </div> 
  )
}

export default AddContentModal;






