import {Box} from "@mui/material";
import React, {ReactNode} from "react";

interface DHeadCardProps {
    width?: string
    height?: string
    minHeight?: string
    headBackground?: string
    head?: ReactNode
    children?: ReactNode
}

export default function DHeadCard(props: DHeadCardProps) {

    return <Box sx={{
        width: props.width ?? '200px',
        height: props.height,
        minHeight: props.height ?? '250px',
        background: '#fff',
        borderRadius: '15px',
        boxShadow: '1px 1px 20px #888',
        pt: '1px'
    }}>
        <Box sx={{
            margin: `-20px auto 0`,
            width: '90%',
            minHeight: '50px',
            background: props.headBackground ?? 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
            borderRadius: '10px',
            boxShadow: '1px 1px 10px #888'
        }}>
            {
                props.head
            }
        </Box>
        {
            props.children
        }
    </Box>
}