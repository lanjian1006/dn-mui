import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
export default function TableContainer(props) {
    return React.createElement(Box, null,
        React.createElement(Typography, { variant: 'h6' }, props.title),
        React.createElement(Typography, { variant: 'subtitle1' }, props.description),
        React.createElement(Box, { sx: { marginTop: 2 } }, props.children));
}
//# sourceMappingURL=TableContainer.js.map