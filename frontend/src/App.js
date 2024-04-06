import Home from "./pages/Home";
import MeetPage from "./pages/MeetPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/meet/:meetId" exact element={<MeetPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
