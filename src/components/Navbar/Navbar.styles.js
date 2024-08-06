import styled from "styled-components";
import { AppBar } from "@mui/material";

export const NavbarContainer = styled.div`
  .search-container {
    flex-grow: 2;
    display: flex;
    justify-content: center;
    padding: 0, 40px;
  }

  .search {
    display: flex;
    align-items: center;
    width: 50%;
    background-color: #f5f5f5;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    padding: 2px 2px;
    transition: box-shadow 0.3s ease;
  }

  .search:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  .search-input {
    flex-grow: 1;
    padding: 5px 5px;
    border: 1px solid #ddd;
    border-radius: 50px;
    font-size: 16px;
    color: #333;
    background-color: #f9f9f9;
    transition: all 0.3s ease;
    margin-left: 8px;
  }

  .search-input:focus {
    border-color: #1976d2;
    background-color: #ffffff;
    outline: none;
  }

  .search-icon {
    background-color: #1976d2;
    color: white;
    border-radius: 50%;
    padding: 8px;
    transition: background-color 0.3s;
    margin-left: 50%;

    transition:
      background-color 0.3s ease,
      transform 0.3s ease;
  }

  .search-icon:hover {
    background-color: #1565c0;
  }
`;

export const NavbarAppBar = styled(AppBar)`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e0e0e0;
  padding: 0 24px;
`;
