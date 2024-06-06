import Canvas from "./Canvas";
import Customiser from "./pages/Customiser";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app transition-all ease-in">
      <h1 className="head-text">My T-shirt</h1>
      <Home />
      <Canvas />
      <Customiser />
    </main>
  );
}

export default App;
