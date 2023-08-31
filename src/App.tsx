import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from "react-router-dom";

import "./App.css";
import Home from "./layouts/Home";
import HomePage from "./pages/HomePage";
import ShowCase from "./pages/ShowCasePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Home />}>
        <Route index element={<HomePage />} />
        <Route path="things-happening" element={<ShowCase />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
