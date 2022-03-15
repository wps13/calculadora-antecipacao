/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { TextBlockUI } from "../ui";

export default {
  title: "UI/Text Block",
  component: TextBlockUI,
  argTypes: {
    label: {
      description: "Label to describe the block",
      control: {
        type: "text"
      }
    },
    amount: {
      description: "Monetary value, in R$",
      control: {
        type: "text"
      }
    }
  }
};

const Template = (args) => <TextBlockUI {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Value",
  amount: "20.0"
};
