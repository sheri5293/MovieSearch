/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button as MUIButton } from "@mui/material";

const Button = ({ onClick, children }) => (
  <MUIButton variant="contained" onClick={onClick}>
    {children}
  </MUIButton>
);

export default Button;
