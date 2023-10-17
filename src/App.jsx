import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Financials from "./components/financials/Financials";
import SearchBar from "./components/searchBar/SearchBar";
import Overview from "./components/overview/Overview";
import Sales from "./components/sales/Sales";
function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchBar />
        <Dashboard />
        <div className="bodyContent">
          <Financials />
          <Overview />
          <Sales />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
