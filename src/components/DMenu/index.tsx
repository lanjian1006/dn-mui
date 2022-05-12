import { List } from "@mui/material"
import { ReactNode } from "react"
import DMenuItem from "./DMenuItem"
import { DSubMenu } from "./DSubMenu"

type MenuNode = {
    id?: string | number
    name?: string
    icon?: ReactNode
    children?: MenuNode[]
}

interface DMenuProps {
    dataSource: MenuNode[]
}

function generateMenu(nodes: MenuNode[]) {
    return nodes.map(item => {
        if (item.children) {
            return <DSubMenu
                prefixIcon={item.icon}
                primary={item.name}
            >
                {generateMenu(item.children)}
            </DSubMenu>
        }
        return <DMenuItem
            prefixIcon={item.icon}
            primary={item.name}
        />
    })
}

export default function DMenu(props: DMenuProps) {
    return <List>
        {generateMenu(props.dataSource)}
    </List>
}

export type {
    MenuNode
}
