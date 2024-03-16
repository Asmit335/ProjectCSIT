import "./App.css";
import Navbar from "./components/Navbar";

import Admin from "./components/Admin/Admin";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <>
      <Navbar />
      <Admin />
      <Sidebar />
    </>
  );
}

export default App;
