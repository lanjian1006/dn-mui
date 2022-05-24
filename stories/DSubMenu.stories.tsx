import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DSubMenu } from "components/DMenu/DSubMenu"
import BuildIcon from '@mui/icons-material/Build';
import DMenuItem from "components/DMenu/DMenuItem";
import EqualizerIcon from '@mui/icons-material/Equalizer';

export default {
    title: 'Example/DSubMenu',
    component: DSubMenu
} as ComponentMeta<typeof DSubMenu>;


const Template: ComponentStory<typeof DSubMenu> = (args) => <DSubMenu {...args} >
    <DMenuItem primary="Level Two" prefixIcon={<EqualizerIcon />}/>
</DSubMenu>


export const Primary = Template.bind({});
Primary.args = {
    prefixIcon: <BuildIcon />,
    primary: 'Level One',
};
