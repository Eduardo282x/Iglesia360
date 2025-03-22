import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home/Home";
import { User } from "./pages/User/User";
import { Assistens } from "./pages/Assistens/Assistens";
import { Login } from "./pages/Login/Login";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usuario" element={<User />} />
          <Route path="/asistencia" element={<Assistens />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
