/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { RequestErrorUI } from "../ui";

export default {
  title: "UI/Request Error",
  component: RequestErrorUI
};

const Template = (args) => <RequestErrorUI {...args} />;

export const Default = Template.bind({});

Default.args = {
  message: "Error requesting data",
  onRetry: null
};

export const WithRetry = (args) => (
  <RequestErrorUI
    {...args}
    message="Error requesting data, want to retry?"
    onRetry={() => alert("Retry Request")}
  />
);
