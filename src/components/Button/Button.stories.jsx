/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  onClick: () => alert("Button clicked!"),
};
