import "./App.css";

// Router
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";

import Root from "./layouts/Root";
import AboutHoi from "./Pages/AboutHoi";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutHoi />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
