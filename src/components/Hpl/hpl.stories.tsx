import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Hpl from './hpl';


const meta: Meta<typeof Hpl> = {
    title: 'Components/Hpl',
    component: Hpl,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'secondary'],
        },
        disabled: { control: 'boolean' },
        onClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof Hpl>;

export const Default: Story = {
    args: {
        children: 'Default Hpl',
        variant: 'default',
        disabled: false,
    },
};

export const Primary: Story = {
    args: {
        children: 'Primary Hpl',
        variant: 'primary',
    },
};
