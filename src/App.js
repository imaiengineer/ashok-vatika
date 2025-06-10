import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import UploadMedia from './components/UploadMedia';
import Gallery from './pages/Gallery';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Add a route for upload if you want */}
          <Route path="upload" element={<UploadMedia />} />
          <Route path = "gallery" element = {<Gallery />} /> {/* new gallery route*/}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
