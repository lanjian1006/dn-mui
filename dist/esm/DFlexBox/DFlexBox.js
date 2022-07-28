import Box from "@mui/material/Box";
export default function DFlexBox(props) {
    return React.createElement(Box, { sx: [
            {
                display: 'flex',
                justifyContent: props.justifyContent,
                alignItems: props.alignItems
            },
            ...(Array.isArray(props.sx) ? props.sx : [props.sx])
        ] }, props.children);
}
//# sourceMappingURL=DFlexBox.js.map