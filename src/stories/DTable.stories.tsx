import { ComponentMeta, ComponentStory } from "@storybook/react";
import DTable from "../components/DTable";
import {Column} from "../components/DTable/DTableRow";

export default {
    title: 'Example/DTable',
    component: DTable
} as ComponentMeta<typeof DTable>;

const Template: ComponentStory<typeof DTable> = (args) => <DTable {...args} />

const Columns: Column[] = [
    {
        fieldName: 'ID'
    },
    {
        fieldName: 'First Name'
    },
    {
        fieldName: 'Last Name'
    }
]
export const Primary = Template.bind({});
Primary.args = {
    columns: Columns
};
