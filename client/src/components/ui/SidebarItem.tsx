import type { ReactElement } from "react";


interface SidebarItemProps {
  title: string,
  icon: ReactElement
}



const SidebarItem = (props: SidebarItemProps) => {

  return (
    <div className="flex items-center px-3 py-2 gap-2 text-gray-700 hover:bg-gray-200 rounded cursor-pointer text-lg">
      <span>{props.icon}</span>
      <span>{props.title}</span>
    </div>
  )
}

export default SidebarItem;