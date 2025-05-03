// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ServicesFooter from './components/ServicesFooter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* You can later add these: */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route index element={<ServicesFooter/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
