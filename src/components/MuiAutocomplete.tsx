import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Flavor = {
  id: number;
  label: string;
};

const flavors = [
  "strawberry",
  "blueberry",
  "poisonberry",
  "boysenberry",
  "blackberry",
];

const flavorsOptions = flavors.map((flavor, index) => ({
  id: index + 1,
  label: flavor,
}));

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [flavor, setFlavor] = useState<Flavor | null>(null);

  console.log(flavor);

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={flavors}
        renderInput={(params) => <TextField {...params} label="Flavors" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={flavorsOptions}
        renderInput={(params) => <TextField {...params} label="Flavors" />}
        value={flavor}
        onChange={(event: any, newValue: Flavor | null) => setFlavor(newValue)}
      />
    </Stack>
  );
};
