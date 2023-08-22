import { Grid } from "@mui/material";
import { Footer } from "./Components/Footer.Component";
import { Header } from "./Components/Header.Component";
import { } from "@mui/material/Grid";
import Message from "./Components/Messgae";
import Counter from "./Components/Counter";

function App() {
  return (
    // <div>
    //     <Header />
    //     <Footer/>
    // </div>
    <Grid container>
        <Grid xs={8}>List view</Grid>
        <Grid xs={4}>
          <Message/>
          <Counter/>
        </Grid>
    </Grid>
  );
}
  
export default App;
