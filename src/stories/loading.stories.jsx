/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { LoadingUI } from "../ui";

export default {
  title: "UI/Loading",
  component: LoadingUI
};

const Template = (args) => <LoadingUI {...args} />;

export const Default = Template.bind({});

export const WithShortMessage = (args) => (
  <LoadingUI {...args} message="Loading data" />
);

export const WithLongMessage = (args) => (
  <LoadingUI
    {...args}
    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit porttitor diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae"
  />
);
