import {
  Typography,
  AppBar,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";

import { PhotoCamera } from "@mui/icons-material";
import MuiButtons from "./components/MuiButtons";
import MuiTextField from "./components/MuiTextField";
import MuiLayout from "./components/MuiLayout";

function App() {
  return (
    <div style={{textAlign: "center"}}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Hi
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              paragraph
            >
              Hello this is a testing and learning exercise for Material UI and
              I'm loving it as it is making my task simpler
            </Typography>
          </Container>
        </div>
        <Grid container spacing={15} justify="center">
          <Grid item>
            <MuiButtons />
          </Grid>
          <Grid item>
            <MuiTextField />
          </Grid>
          <Grid item>
            <MuiLayout />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default App;
