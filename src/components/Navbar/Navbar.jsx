/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavbarContainer } from "./Navbar.styles";
import { toast } from "react-toastify";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleSearchClick = () => {
    if (query.trim()) {
      toast.dismiss();
      toast.info("Searching for movies...");
      onSearch(query);
    } else {
      toast.warn("Please enter a search term.");
    }
  };

  return (
    <NavbarContainer>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Movie Search
          </Typography>
          <div className="search-container">
            <div className="search">
              <InputBase
                placeholder="Enter the movie title"
                className="search-input"
                value={query}
                onChange={handleInputChange}
              />
              <IconButton
                onClick={handleSearchClick}
                aria-label="search"
                className="search-icon"
              >
                <SearchIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </NavbarContainer>
  );
};

export default Navbar;
