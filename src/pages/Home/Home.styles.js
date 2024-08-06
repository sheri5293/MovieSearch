import styled from "styled-components";
import { Grid } from "@mui/material";

export const StyledContainer = styled.div`
  background-color: #f5f5f5;
`;

export const StyledGrid = styled(Grid)`
  margin-top: 20px;
  padding: 20px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 20px;
`;

export const LoadingMessage = styled.p`
  color: blue;
  font-weight: bold;
`;
