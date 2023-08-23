import { Grid } from "@mui/material";
import { Footer } from "./Components/Footer.Component";
import { Header } from "./Components/Header.Component";
import { } from "@mui/material/Grid";
import Message from "./Components/Messgae";
import Counter from "./Components/Counter";
import EventBinding from "./Components/EventBinding";

function App() {
  return (
    // <div>
    //     <Header />
    //     <Footer/>
    // </div>
    <Grid container>
      <Grid xs={8}>List view</Grid>
      <Grid xs={4}>
        {/* <Message/> */}
        {/* <Counter/> */}
        <EventBinding/>
      </Grid>
    </Grid>
  );
}

export default App;
