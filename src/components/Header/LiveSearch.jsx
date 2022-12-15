import React from "react";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import IconSearch from "../../assets/headerComponent/icon-search";
const LiveSearch = () => {
  const [jsonResults, setJsonResults] = useState([]);

  useEffect(() => {
    fetch("https://www.balldontlie.io/api/v1/players")
      .then((response) => response.json())
      .then((json) => setJsonResults(json.data));
  }, []);
  console.log(jsonResults);
  return (
    <Stack sx={{ margin: "auto" }}>
      <Autocomplete
        size="small"
        style={{ width: 413 }}
        id="nba_player_demo"
        popupIcon={<IconSearch />}
        getOptionLabel={(jsonResults) =>
          `${jsonResults.first_name} ${jsonResults.last_name}`
        }
        options={jsonResults}
        sx={{ width: 300 }}
        isOptionEqualToValue={(option, value) =>
          option.first_name === value.first_name
        }
        noOptionsText={"No Theses Available Yet"}
        renderOption={(props, jsonResults) => (
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
            {...props}
            key={jsonResults.id}
          >
            {jsonResults.first_name}
            {jsonResults.last_name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField {...params} label=" Search a Thesis" />
        )}
      />
    </Stack>
  );
};

export default LiveSearch;