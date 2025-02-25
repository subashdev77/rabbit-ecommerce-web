import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* ToastContainer to show notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
