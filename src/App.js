import { Grid } from "@mui/material";
import { Footer } from "./Components/Footer.Component";
import { Header } from "./Components/Header.Component";
import { } from "@mui/material/Grid";
import Message from "./Components/Messgae";
import Counter from "./Components/Counter";
import EventBinding from "./Components/EventBinding";
import Parent from "./Components/Parent";

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
        {/* <EventBinding/> */}
        <Parent />
      </Grid>
    </Grid>
  );
}

export default App;
