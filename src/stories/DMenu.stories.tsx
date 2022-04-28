import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DMenuItem from "../components/DMenu/DMenuItem";
import BuildIcon from '@mui/icons-material/Build';

export default {
    title: 'Example/DMenu',
    component: DMenuItem,
} as ComponentMeta<typeof DMenuItem>;

const Template: ComponentStory<typeof DMenuItem> = (args) => <DMenuItem {...args} />;
const handleClick = (e: React.MouseEvent) => {
    console.log(e);
}

export const Primary = Template.bind({});
Primary.args = {
    prefixIcon: <BuildIcon />,
    primary: 'hello',
    handleClick: handleClick
};
