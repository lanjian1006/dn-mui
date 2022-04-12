import React from "react";
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

interface TableColumn {
    /**
     * Id
     */
    id?: string | number
    /**
     * 字段
     */
    field: string | any
    /**
     * 表头显示的名字
     */
    headerName: string
    /**
     * 宽度
     */
    width?: string | number
    /**
     * 对齐方式
     */
    align?: "inherit" | "left" | "center" | "right" | "justify" | undefined
}

interface DNTableProps {
    /**
     * 定义表的列
     */
    columns?: TableColumn[];
    /**
     * 定义表的数据
     */
    dataSource?: Array<{[key: string]: any}>[];
}

/**
 * 简易列表
 */
const DNTable = (props: DNTableProps) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {
                            props.columns?.map((column) => (
                                <TableCell align={column.align}>{column.headerName}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.dataSource?.map((row, rowIndex) => (
                        <TableRow
                            key={rowIndex}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            {
                                props.columns?.map(column => (
                                    <TableCell>
                                        {
                                            props.dataSource?.[rowIndex][column.field]
                                        }
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DNTable

export type {
    DNTableProps,
    TableColumn
}