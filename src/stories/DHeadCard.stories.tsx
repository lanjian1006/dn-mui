import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Box} from "@mui/material";
import {DHeadCard} from "index";

export default {
    title: 'Example/DHeadCard',
    component: DHeadCard,
} as ComponentMeta<typeof DHeadCard>;

const Template: ComponentStory<typeof DHeadCard> = (args) => <Box sx={{
    pt: '100px'
}}>
    <DHeadCard {...args} />
</Box>;

export const Primary = Template.bind({});
Primary.args = {};
