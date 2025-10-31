/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
import ProductList from './ProductList';
declare const meta: {
    title: string;
    component: ({ products }: import("./ProductList").ProductListProps) => import("react").JSX.Element;
    parameters: {
        layout: string;
    };
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof ProductList>;
export declare const Default: Story;
export declare const Empty: Story;
