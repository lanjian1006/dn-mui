import { List } from "@mui/material";
import { useEffect, useState } from "react";
import DMenuItem from "./DMenuItem";
import DSubMenu from "./DSubMenu";
import { _indexOf } from "../Utilities/ArrayAssistant";
export default function DMenu(props) {
    const [selected, setSelected] = useState('');
    const [openList, setOpenList] = useState([]);
    const menuMap = new Map();
    const handleClick = (id, submenu) => {
        var _a;
        setSelected(id);
        (_a = props.onSelect) === null || _a === void 0 ? void 0 : _a.call(props, id);
        if (submenu) {
            const _openMenuIndex = _indexOf(openList, id, 0);
            let newOpenList = [];
            _openMenuIndex === -1 ? openList.push(id) : openList.splice(_openMenuIndex, 1);
            newOpenList = newOpenList.concat(openList);
            setOpenList(newOpenList);
        }
    };
    const generateMenu = (nodes, parent) => {
        return nodes.map(item => {
            if (parent) {
                menuMap.set(item.id, parent);
            }
            if (item.children) {
                return React.createElement(DSubMenu, { prefixIcon: item.icon, primary: item.name, id: item.id, key: item.id, handleClick: (id) => handleClick(id, true), selected: selected === item.id, open: _indexOf(openList, item.id, 0) !== -1, hoverColor: props.hoverColor, selectColor: props.selectColor, color: props.color, sx: props.sx }, generateMenu(item.children, item.id));
            }
            return React.createElement(DMenuItem, { prefixIcon: item.icon, primary: item.name, id: item.id, key: item.id, handleClick: handleClick, selected: selected === item.id, hoverColor: props.hoverColor, selectColor: props.selectColor, color: props.color, sx: props.sx });
        });
    };
    const setPreselect = () => {
        let parent = menuMap.get(props.preselect);
        let newOpenList = [];
        while (parent !== undefined) {
            openList.push(parent);
            parent = menuMap.get(parent);
        }
        if (openList.length > 0) {
            newOpenList = newOpenList.concat(openList);
            setOpenList(newOpenList);
        }
    };
    useEffect(() => {
        props.preselect && openList.length === 0 && setPreselect();
    });
    return React.createElement(List, null, generateMenu(props.dataSource));
}
export { DSubMenu, DMenuItem };
//# sourceMappingURL=DMenu.js.map