import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/About";
import { HomePage } from "./pages/Home";
import { TodoPage } from "./pages/Todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/todo" Component={TodoPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
