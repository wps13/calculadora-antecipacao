/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { InputUI } from "../ui";

export default {
  title: "UI/Input",
  component: InputUI
};

const Template = (args) => <InputUI {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Value",
  onChanged: () => {},
  placeholder: "R$ 10",
  value: "",
  required: false,
  type: "text",
  helperText: "Minimum: R$ 1,00"
};

export const Invalid = (args) => <InputUI {...args} classname="invalid" />;

Invalid.args = {
  label: "Mensagem",
  onChanged: () => {},
  placeholder: "Hello, world",
  value: "",
  required: true,
  type: "text",
  helperText: "Field can't be empty"
};
