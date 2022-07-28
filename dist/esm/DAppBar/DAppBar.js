import Box from "@mui/material/Box";
export default function DAppBar(props) {
    return React.createElement(Box, { sx: [
            {
                display: 'flex',
                position: 'sticky',
                padding: '4px 16px',
                marginRight: '16px'
            },
            ...(Array.isArray(props.sx) ? props.sx : [props.sx])
        ] }, props.children);
}
//# sourceMappingURL=DAppBar.js.map