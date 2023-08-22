import { Grid } from "@mui/material";
import { Footer } from "./Components/Footer.Component";
import { Header } from "./Components/Header.Component";
import { } from "@mui/material/Grid";

function App() {
  return (
    // <div>
    //     <Header />
    //     <Footer/>
    // </div>
    <Grid container>
        <Grid xs={8}>List view</Grid>
        <Grid xs={4}>Form view</Grid>
    </Grid>
  );
}
  
export default App;
