import {TableColumn} from 'components/DNTable'
import DNTable from "components/DNTable";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from "react";

export default {
    title: 'DNTable',
    component: DNTable,
} as ComponentMeta<typeof DNTable>

const Template: ComponentStory<typeof DNTable> = (args) => <DNTable {...args} />;

export const Primary = Template.bind({});
const columns: TableColumn[] = [
    {
        headerName: 'ID',
        field: 'id',
    },
    {
        field: 'name',
        headerName: 'Name'
    },
    {
        field: 'gender',
        headerName: 'Gender'
    }
]
const src: Array<any> = [
    {
        id: '1',
        name: 'Tom',
        gender: 'Male'

    },
    {
        id: '2',
        name: 'Jerry',
        gender: 'Male'
    }
]
Primary.args = {
    columns: columns,
    dataSource: src
};
