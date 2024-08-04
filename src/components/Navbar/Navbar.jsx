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

const Navbar = ({ onSearch, setSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (query.trim()) {
      setSearch(query);
      onSearch();
      toast.success("Searching for movies...");
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
                value={query}
                onChange={handleInputChange}
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton onClick={handleSearchClick} aria-label="search">
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