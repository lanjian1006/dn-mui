type MenuJson = {
    id?: string | number
    name?: string
    icon?: string
    children?: MenuJson[]
}

interface DMenuProps {
    dataSource?: MenuJson
}

export default function DMenu(props: DMenuProps) {
    
}

export type {
    MenuJson
}
