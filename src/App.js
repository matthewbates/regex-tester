import "./App.css";

import { useState, useContext } from "react";

import { ThemeContext } from "./components/Provider";
import { Routes, Route } from "react-router-dom";

import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { RegexSearch } from "./components/RegexSearch";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        toggleSidebar={toggleSidebar}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {/* <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} theme={theme} /> */}
      <RegexSearch theme={theme} />
    </div>
  );
}

export default App;
