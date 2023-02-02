import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

export default function MuiButtons() {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https:google.com">
          Text
        </Button>
        <Button variant="contained"> Contained</Button>
        <Button variant="outlined"> Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Stack spacing={2} display="block" direction="row">
        {/** display by default is flex */}
        <Button variant="outlined" size="small" color="secondary">
          small
        </Button>
        <Button variant="outlined" size="medium" color="success">
          medium
        </Button>
        <Button variant="outlined" size="large" color="secondary">
          large
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label="send" color="primary">
          <SendIcon />
        </IconButton>
        <IconButton area-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={2} display="block">
        <ButtonGroup variant="contained" aria-label="horizontal button group">
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          color="secondary"
          size="large"
          aria-label="vertical button group"
        >
          <Button
            onClick={() => {
              alert("Clicked Left");
            }}
          >
            left
          </Button>
          <Button
            onClick={() => {
              alert("Clicked Center");
            }}
          >
            center
          </Button>
          <Button
            onClick={() => {
              alert("Clicked Right");
            }}
          >
            right
          </Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}

// stack for styling
// spacing--> like gap
// direction
