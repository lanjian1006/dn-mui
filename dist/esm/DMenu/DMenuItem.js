import { ListItemText } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import React from "react";
export default function DMenuItem(props) {
    var _a;
    const handleClick = () => {
        var _a, _b;
        (_a = props.handleClick) === null || _a === void 0 ? void 0 : _a.call(props, (_b = props.id) !== null && _b !== void 0 ? _b : props.primary);
    };
    return React.createElement(ListItem, { sx: [
            {
                padding: '2px 0px',
                backgroundColor: `${props.selected !== undefined ? props.selected ? props.selectColor : props.backgroundColor : props.backgroundColor}`,
                color: props.color,
                fontSize: '12px',
                '&:hover': {
                    backgroundColor: props.selected ? '' : (_a = props.hoverColor) !== null && _a !== void 0 ? _a : props.backgroundColor // hoverColor > backgroundColor
                }
            },
            ...(Array.isArray(props.sx) ? props.sx : [props.sx])
        ] },
        React.createElement(ListItemButton, { onClick: handleClick, selected: props.selected },
            React.createElement(ListItemIcon, { color: props.color }, props.prefixIcon),
            React.createElement(ListItemText, { primary: props.primary }),
            props.postIcon));
}
//# sourceMappingURL=DMenuItem.js.map