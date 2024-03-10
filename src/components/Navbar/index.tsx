import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Search, StyledInputBase } from "./styles";
import { Grid } from "@mui/material";
import Alert from "@mui/material/Alert";
import CategoriesDropdown from "../CategoriesDropdown";
import { NavbarInterface } from "../../interfaces";
import SearchIcon from "@mui/icons-material/Search";
import SortAlphabetical from "../SortAlphabetical";

const Navbar = ({
  handleSearch,
  podcasts,
  createHandleMenuClick,
  categories,
  handleClickImage,
  searchPodcast,
  setSearchPodcast,
  click,
  handleClick,
}: NavbarInterface) => {
  const [noResults, setNoResults] = useState<boolean>(false);

  const handleChange = (e: any) => {
    const newSearch = e.target.value;
    setSearchPodcast(newSearch);
  };

  useEffect(() => {
    podcasts.length === 0 ? setNoResults(true) : setNoResults(false);
  }, [podcasts]);

  return (
    <Grid container spacing={1} direction="row">
      <AppBar position="static" sx={{ backgroundColor: "#9896f0" }}>
        <Toolbar>
          <Grid container item spacing={0}  mt={1}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                width: "100%",
              }}
              onClick={handleClickImage}
            >
              <img
                srcSet={
                  "https://ossacollective.com/wp-content/uploads/2022/07/Ossa-Logo-Final-White.png"
                }
                src={
                  "https://ossacollective.com/wp-content/uploads/2022/07/Ossa-Logo-Final-White.png"
                }
                alt={"prueba"}
                loading="lazy"
                style={{
                  height: "27px",
                }}
              />
            </Box>
          </Grid>
          <Grid container item spacing={0}  mt={1}>
            <Search>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchPodcast}
                onChange={handleChange}
              />
              <IconButton onClick={() => handleSearch(searchPodcast)}>
                <SearchIcon sx={{ color: "white" }} />
              </IconButton>
            </Search>
          </Grid>
          <Grid container item spacing={0} display={'flex'} justifyContent={'flex-end'} mt={1}>
            <IconButton color="inherit" aria-label="open drawer">
              <CategoriesDropdown
                podcasts={podcasts}
                createHandleMenuClick={createHandleMenuClick}
                categories={categories}
              />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <SortAlphabetical handleClick={handleClick} click={click} />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      {noResults ? (
        <Box sx={{ display: "block", margin: "auto", width: "25%", mt: 1 }}>
          <Alert severity="error">
            Opps Sorry. No results for {searchPodcast}
          </Alert>
        </Box>
      ) : null}
    </Grid>
  );
};

export default Navbar;
