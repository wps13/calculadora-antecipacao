/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { SectionTitleUI } from "../ui";

export default {
  title: "UI/Section Title",
  component: SectionTitleUI,
  argTypes: {
    title: {
      control: {
        type: "text"
      },
      description: "Title for a section"
    }
  }
};

const Template = (args) => <SectionTitleUI {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Section Title"
};
