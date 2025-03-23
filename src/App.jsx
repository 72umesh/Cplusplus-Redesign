import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tutorials from "./components/Tutorials";
import Reference from "./components/Reference";
import Articles from "./components/Articles";
import Forum from "./components/Forum";
import Home from "./components/Home";
import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <div>
      <Navbar />

      <main className="main-content">
        <div className="main-content-left">
          <SideBar />
        </div>
        <div className="main-content-right">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/reference" element={<Reference />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
