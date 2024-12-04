import { Outlet } from "react-router";
import NavBar from "./components/items/Navbar.jsx";

function App() {
  return (
    <main className="grid justify-center gap-4">
      <div className="justify-self-center">
        <NavBar />
      </div>
      <Outlet />
    </main>
  );
}

export default App;
// a
