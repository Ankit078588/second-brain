import AddContentModal from "./AddContentModal";
import Button from "./ui/Button";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import { useState } from "react";


const DashboardHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
        <AddContentModal open={open} onCloseFunction={ () => {setOpen(false)} } />

        <div className="flex justify-end gap-2 py-3 px-6 bg-[#f7f7ff]">
            <Button startIcon={<PlusIcon />} variant="primary" text="Add Content" onClick={() => {setOpen(true)}} />
            <Button startIcon={<ShareIcon />} variant="secondary" text="Share Brain" />
        </div>
    </>
  )
}

export default DashboardHeader;