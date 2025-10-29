import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/AuthProvider";
import { AlertProvider } from "./context/AlertContext";
import { AlertContainer } from "./components/AlertContainer";
import Home from "./pages/Home";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";

function App() {
  return (
    <AuthProvider>
      <AlertProvider>
        <Router basename="/professor">
          <Routes>
            <Route path="/" element={<UserLogin />} />
            <Route
              path="/home"
              element={
                <PrivateRoute
                  allowedTypes={["admin", "aluno"]}
                  elementByType={{
                    professor: <Home />,
                  }}
                />
              }
            />
            <Route path="/user/cadastro" element={<UserRegister />} />
          </Routes>
          <AlertContainer />
        </Router>
      </AlertProvider>
    </AuthProvider>
  );
}

export default App;