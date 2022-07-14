import Home from 'pages/Home';
import About from 'pages/About';
import TopTen from 'pages/TopTen';
import Header from 'components/Header';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router >
     <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkinda" element={<About />} />
          <Route path="/top10" element={<TopTen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
