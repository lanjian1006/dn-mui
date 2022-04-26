import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DMenuItem from "../components/DMenu/DMenuItem";

export default {
    title: 'Example/DMenu',
    component: DMenuItem,
} as ComponentMeta<typeof DMenuItem>;

const Template: ComponentStory<typeof DMenuItem> = (args) => <DMenuItem {...args} />;


export const Primary = Template.bind({});
Primary.args = {

};
