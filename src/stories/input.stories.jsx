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
  label: "Valor",
  onChanged: () => {},
  placeholder: "Digite um texto",
  value: "",
  required: false,
  type: "text",
  helperText: "Minimo: R$ 1,00"
};
