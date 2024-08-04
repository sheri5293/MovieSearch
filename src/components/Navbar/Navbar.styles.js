import styled from "styled-components";
import { AppBar } from "@mui/material";

export const NavbarContainer = styled.div`
  .search-container {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }

  .search {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: white;
    border-radius: 24px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 4px 8px;
    margin-top: 8px;
  }

  input {
    flex-grow: 1;
    padding: 12px 16px;
    border: none;
    border-radius: 24px;
    font-size: 16px;
    color: #333;
    background-color: transparent;
    transition: background-color 0.3s;
  }

  input:focus {
    background-color: #f0f0f0;
    outline: none;
  }

  .search-icon {
    background-color: #1976d2;
    color: white;
    border-radius: 50%;
    padding: 8px;
    transition: background-color 0.3s;
  }

  .search-icon:hover {
    background-color: black;
  }
`;

export const NavbarAppBar = styled(AppBar)`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e0e0e0;
`;
