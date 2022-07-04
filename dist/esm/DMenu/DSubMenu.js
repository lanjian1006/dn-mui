import Collapse from "@mui/material/Collapse";
import DMenuItem from "./DMenuItem";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box } from "@mui/material";
import React from "react";
export default function DSubMenu(props) {
    const handleClick = () => {
        var _a, _b;
        (_a = props.handleClick) === null || _a === void 0 ? void 0 : _a.call(props, (_b = props.id) !== null && _b !== void 0 ? _b : props.primary);
    };
    const postIcons = props.open ? React.createElement(ExpandLess, null) : React.createElement(ExpandMore, null);
    return React.createElement(React.Fragment, null,
        React.createElement(DMenuItem, { handleClick: handleClick, prefixIcon: props.prefixIcon, primary: props.primary, postIcon: postIcons, selected: props.selected, hoverColor: props.hoverColor, backgroundColor: props.open ? props.openColor : '', selectColor: props.selectColor, color: props.color, sx: props.sx }),
        React.createElement(Collapse, { in: props.open },
            React.createElement(Box, { sx: { pl: 2 } }, props.children)));
}
//# sourceMappingURL=DSubMenu.js.map