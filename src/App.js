import { ClassComponent } from "./Components/ClassComponent";
import FunctionalComponent from "./Components/FunctionalComponent";

function App() {
  return (
    <div>
      <h1>Welcome to Product</h1>
      <small>Product is part of billing application</small>
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
