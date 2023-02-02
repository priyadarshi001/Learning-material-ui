import { Stack } from "@mui/system"
import {TextField, InputAdornment} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";


export default function MuiTextField() {
 const [value, setValue] = useState("");
 
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="name" />
        {/** default is outlined */}
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Form Required" required size="small" />
        <TextField
          label="Password"
          type="password"
          required
          helperText="Do not share your password with anyone"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField label="Disabled" size="small" disabled />
        <TextField
          label="Read Only"
          InputProps={{ readOnly: true }}
          size="small"
        />
        <TextField label="Error props" size="small" required value={value} onChange = {e => setValue(e.target.value)} error = {!value} helperText = {!value ? "Required" : "Do not share this information"} />
      </Stack>
      {/** Prefix or suffix to a form */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"> $</InputAdornment>
            ),
          }}
        />
        <TextField
          label="Weight"
          color="success"
          InputProps={{
            endAdornment: <InputAdornment position="end"> kg </InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

// Learning:
    // TextField (label = "<name>")
    // required
    // disabled
    // InputProps = {{ readOnly: true }}
    // InputAdornment
    // error--> toggles error state
    
