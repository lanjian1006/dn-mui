import { Box } from "@mui/material";
export default function HeadCard(props) {
    return (React.createElement(Box, { sx: {
            display: 'inline-block',
            minWidth: '200px',
            width: props.width,
            minHeight: '200px',
            height: props.height,
            background: 'white',
            marginTop: '24px',
            borderRadius: '0.75rem',
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
        } },
        React.createElement(Box, { sx: {
                background: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
                borderRadius: '0.5rem',
                minHeight: '50px',
                height: props.headHeight,
                width: '90%',
                margin: "-24px auto 0 auto",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                padding: '0.5rem 0'
            } }, props.head),
        React.createElement(Box, null, props.children)));
}
//# sourceMappingURL=HeadCard.js.map