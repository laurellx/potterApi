import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import NavigationComponent from "./components/NavigationComponent/NavigationComponent";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import { useSelector } from "react-redux";
import Books from "./pages/Books";

function App() {
  const { user } = useSelector((state) => state.AuthReducer);

  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route
          exact
          path="/profile"
          element={
            user && user.id ? <Profile /> : <Navigate to="/login" replace />
          }
        ></Route>
        <Route exact path="/books" element={<Books />}></Route>
        <Route exact path="/characters" element={<Characters />}></Route>
        <Route exact path="/characters/:id" element={<Character />}></Route>
      </Routes>
    </div>
  );
}

export default App;
