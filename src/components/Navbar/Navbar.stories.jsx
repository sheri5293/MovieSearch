/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSearch: (query) => console.log("Search query:", query),
};
