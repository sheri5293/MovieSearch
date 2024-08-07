import styled from "styled-components";
import { Grid } from "@mui/material";

export const StyledContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const StyledGrid = styled(Grid)`
  margin-top: 40px;
  flex: 1;
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
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000;
`;
export const NoMoviesMessage = styled.p`
  color: #444;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-top: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  border: 2px solid #ddd;
`;
