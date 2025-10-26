import type { Meta, StoryObj } from '@storybook/react';
import ProductList from './ProductList';


const meta = {
  title: 'Example/ProductList',
  component: ProductList,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof ProductList>;

export const Default: Story = {
  args: {
    products: [
      { id: '1', name: 'Product A', price: 10.99 },
      { id: '2', name: 'Product B', price: 20.50 },
      { id: '3', name: 'Product C', price: 5.75 },
    ],
  },
};

export const Empty: Story = {
  args: {
    products: [],
  },
};
