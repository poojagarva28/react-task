import Users from "./Components/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Albums from "./Components/Albums";
import Photos from "./Components/Photos";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/albums/:id" element={<Albums />}></Route>
          <Route path="/photos/:id" element={<Photos />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
