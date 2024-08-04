import styled from "styled-components";
import { Grid } from "@mui/material";

export const StyledContainer = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
`;

export const StyledGrid = styled(Grid)`
  margin-top: 16px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;

export const LoadingMessage = styled.p`
  color: blue;
  font-weight: bold;
`;
