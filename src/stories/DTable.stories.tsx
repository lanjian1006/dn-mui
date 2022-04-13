import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DTable from "components/DTable";
import {DTableColumn} from "../components/DTable";

export default {
    title: 'Example/DTable',
    component: DTable,
} as ComponentMeta<typeof DTable>;

const Template: ComponentStory<typeof DTable> = (args) => <DTable {...args} />;

const columns: DTableColumn[] = [
    {
        field: 'id',
        headerName: 'ID'
    },
    {
        field: 'name',
        headerName: 'Name'
    },
    {
        field: 'gender',
        headerName: 'Gender'
    },
    {
        field: 'age',
        headerName: 'Age'
    }
]
const src = [
    {
        id: '1',
        name: 'Daniel',
        gender: 'Male',
        age: '31'
    },
    {
        id: '2',
        name: 'Tiger',
        gender: 'Male',
        age: '28'
    },
    {
        id: '3',
        name: 'Jack',
        gender: 'Female',
        age: '28'
    }
]
export const Primary = Template.bind({});
Primary.args = {
    columns: columns,
    src: src
};
