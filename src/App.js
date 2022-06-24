import Form from "./components/form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forms from "./components/form";
import Todolist from "./components/todolist";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Forms />} />
            <Route path="/todolist" element={<Todolist />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
