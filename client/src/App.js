import { Routes, Route } from "react-router-dom";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Payment from "./pages/Payment/Payment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay-thanks" element={<Payment />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
