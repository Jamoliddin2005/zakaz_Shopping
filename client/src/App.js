import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Auth from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Payment from "./pages/Payment/Payment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [admin, setAdmin] = useState(false);
  const GetAdmin = async (req, res) => {
    await fetch(`${process.env.REACT_APP_URL}/auth`, {
      headers: {
        authorization: window.sessionStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => setAdmin(res.data))
      .catch((err) => {
        console.log("");
      });
  };
  useEffect(() => {
    GetAdmin();
  }, []);
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<Home admin={admin} />} />
        <Route path="/pay-thanks" element={<Payment />} />
        <Route path="/auth" element={admin ? <Navigate to="/" /> : <Auth />} />
        <Route
          path="/admin"
          element={admin ? <Admin admin={admin} /> : <Error />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
