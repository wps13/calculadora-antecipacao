/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { MainTitleUI } from "../ui";

export default {
  title: "UI/Main Title",
  component: MainTitleUI,
  argTypes: {
    title: {
      control: {
        type: "text"
      },
      description: "Main Title for a page"
    }
  }
};

const Template = (args) => <MainTitleUI {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Home Page"
};
