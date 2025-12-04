import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { AuthProvider } from "./components/AuthProvider";
import { AlertProvider } from "./context/AlertContext";
import { AlertContainer } from "./components/AlertContainer";
import Home from "./pages/Home";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";
import ClassViewProf from "./pages/ClassViewProf";
import OneClassViewProf from "./pages/OneClassViewProf"
import AvisosPage from "./pages/AvisosPage";
import EscreverAvisos from "./pages/EscreverAvisos";

function App() {
  return (
    <AuthProvider>
      <AlertProvider>
        <Router basename="/professor">
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <UserLogin />
                </PublicRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute
                  allowedTypes={["professor"]}
                  elementByType={{
                    professor: <Home />,
                  }}
                />
              }
            />
            <Route
              path="/turmas"
              element={
                <PrivateRoute
                  allowedTypes={["professor"]}
                  elementByType={{
                    professor: <ClassViewProf />,
                  }}
                />
              }
            />
            <Route
              path="/turma"
              element={
                <PrivateRoute
                  allowedTypes={["professor"]}
                  elementByType={{
                    professor: <OneClassViewProf />,
                  }}
                />
              }
            />
            <Route
              path="/avisos"
              element={
                <PrivateRoute
                  allowedTypes={["professor"]}
                  elementByType={{
                    professor: <AvisosPage />,
                  }}
                />
              }
            />
            <Route
              path="/escreverAviso"
              element={
                <PrivateRoute
                  allowedTypes={["professor"]}
                  elementByType={{
                    professor: <EscreverAvisos />,
                  }}
                />
              }
            />

            <Route
              path="/user/cadastro"
              element={
                <PublicRoute>
                  <UserRegister />
                </PublicRoute>
              }
            />
          </Routes>
          <AlertContainer />
        </Router>
      </AlertProvider>
    </AuthProvider>
  );
}

export default App;