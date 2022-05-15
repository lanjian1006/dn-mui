import { List } from "@mui/material"
import {ReactNode, useState} from "react"
import DMenuItem from "./DMenuItem"
import { DSubMenu } from "./DSubMenu"

type MenuNode = {
    id: string | number
    name: string
    icon?: ReactNode
    children?: MenuNode[]
}

interface DMenuProps {
    dataSource: MenuNode[]
    onSelect?: (id: any) => void
}

export default function DMenu(props: DMenuProps) {
    const [selected, setSelected] = useState<string>('')

    const handleClick = (id: any) => {
        setSelected(id)
        props.onSelect?.(id)
    }

    function generateMenu(nodes: MenuNode[]) {
        return nodes.map(item => {
            if (item.children) {
                return <DSubMenu
                    prefixIcon={item.icon}
                    primary={item.name}
                    id={item.id}
                    handleClick={handleClick}
                    selected={selected === item.id}
                >
                    {generateMenu(item.children)}
                </DSubMenu>
            }
            return <DMenuItem
                prefixIcon={item.icon}
                primary={item.name}
                id={item.id}
                handleClick={handleClick}
                selected={selected === item.id}
            />
        })
    }

    return <List>
        {generateMenu(props.dataSource)}
    </List>
}

export type {
    MenuNode
}
