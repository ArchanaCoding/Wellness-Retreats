import React, { useState } from "react";
import "./App.css";
import Discover from "./components/Discover";
import Filter from "./components/Filter";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RetreatList from "./components/RetreatList";

function App() {
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="app">
      <Header />
      <Discover />

      <div className="controls">
        <div className="con1">
          <Filter filters={filters} setFilters={setFilters} />
        </div>

        <div className="con2">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>

      <RetreatList filters={filters} searchQuery={searchQuery} />
      
    </div>
  );
}

export default App;
