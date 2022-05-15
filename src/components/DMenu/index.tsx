import {List} from "@mui/material"
import {ReactNode, useState} from "react"
import DMenuItem from "./DMenuItem"
import {DSubMenu} from "./DSubMenu"
import {_indexOf} from "../Utilities/ArrayAssistant";

type MenuNode = {
    id: string | number
    name: string
    icon?: ReactNode
    children?: MenuNode[]
}

interface DMenuProps {
    dataSource: MenuNode[]
    onSelect?: (id: any) => void
    focusMode?: boolean
}

export default function DMenu(props: DMenuProps) {
    const [selected, setSelected] = useState<string>('')
    const [openList, setOpenList] = useState<any[]>([])
    const menuMap: Map<any, any> = new Map<any, any>()

    const handleClick = (id: any, submenu?: boolean) => {
        setSelected(id)
        props.onSelect?.(id)
        if (submenu) {
            const _openMenuIndex = _indexOf(openList, id, 0)
            let newOpenList: any[] = []
            _openMenuIndex === -1 ? openList.push(id) : openList.splice(_openMenuIndex, 1)
            newOpenList = newOpenList.concat(openList)
            setOpenList(newOpenList)
        }
    }

    function generateMenu(nodes: MenuNode[], parent?: any) {
        return nodes.map(item => {
            if (parent) {
                menuMap.set(item.id, parent)
            }
            if (item.children) {
                return <DSubMenu
                    prefixIcon={item.icon}
                    primary={item.name}
                    id={item.id}
                    handleClick={(id) => handleClick(id, true)}
                    selected={selected === item.id}
                    open={_indexOf(openList, item.id, 0) !== -1}
                >
                    {generateMenu(item.children, item.id)}
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
