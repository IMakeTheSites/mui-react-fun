import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState, ChangeEvent } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        error
      >
        <MenuItem value="IS">Israel</MenuItem>
        <MenuItem value="US">United States</MenuItem>
        <MenuItem value="IN">India</MenuItem>
      </TextField>
    </Box>
  );
};
