import styled from "styled-components";
import { AppBar } from "@mui/material";

export const NavbarContainer = styled.div`
  .search-container {
    display: flex;
    justify-content: center;

    align-items: center;
    width: 100%;
  }

  .search {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: white;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 4px 8px;
    margin-left: auto;
  }

  .search-input {
    flex-grow: 1;
    padding: 10px 16px;
    border: 1px solid #ddd;
    border-radius: 25px;
    font-size: 16px;
    color: #333;
    background-color: #f9f9f9;
    transition: all 0.3s ease;
    margin-left: 8px;
  }

  .search-icon {
    background-color: #1976d2;
    color: white;
    margin-left: 8px;
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
