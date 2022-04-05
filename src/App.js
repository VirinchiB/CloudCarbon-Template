import "./App.scss";
import Dashboard from "./Components/Dashboard/Dashboard";
import Headders from "./Components/Headder/Headder";

function App() {
  return (
    <div>
      <Headders></Headders>
      <div className="App">
        <Dashboard></Dashboard>
      </div>
    </div>
  );
}

export default App;
