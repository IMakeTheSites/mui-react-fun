import { InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export const MuiTextField = () => {
  const [viewer, setViewer] = useState(false);
  const [value, setValue] = useState("");

  const handleVisibility = () => {
    setViewer((prev) => !prev);
  };

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do not share your password"}
        />
        <TextField
          label="Form Input"
          helperText="Do not share your password"
          type="password"
          disabled
        />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">stone</InputAdornment>,
          }}
        />
        <TextField
          label="Password"
          type={viewer ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleVisibility}>
                {viewer ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};
