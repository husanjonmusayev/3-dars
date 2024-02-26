import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./App.css";
import Registar from "./components/Login/Registar";
import Home from "./components/Home/Home";
import { useEffect, useState } from "react";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import RoutesLayout from "./Layout/RoutesLayout";

function App() {
  const [home, setHome] = useState(true);

  function Gohome() {
    setHome(false);
  }
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RoutesLayout />}>
        {home ? (
          <Route path="/" element={<Registar call={Gohome} />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
