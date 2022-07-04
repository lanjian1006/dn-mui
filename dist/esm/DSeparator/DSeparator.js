import { Box } from "@mui/material";
import React from "react";
export default function DSeparator(props) {
    var _a;
    return React.createElement(Box, { sx: Object.assign({ display: 'flex', justifyContent: props.position, alignItems: 'center' }, props.sx) }, (_a = props.children) === null || _a === void 0 ? void 0 : _a.map((child, index) => {
        var _a, _b;
        return React.createElement(Box, { key: index, sx: {
                marginLeft: `${(_a = props.gutter) !== null && _a !== void 0 ? _a : 0 / 2}px`,
                marginRight: `${(_b = props.gutter) !== null && _b !== void 0 ? _b : 0 / 2}px`
            } }, child);
    }));
}
//# sourceMappingURL=DSeparator.js.map