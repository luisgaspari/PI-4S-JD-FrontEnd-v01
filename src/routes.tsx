import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/404";
import Equipments from "./pages/equipments";
import Checklists from "./pages/checklists";
import ChecklistsItems from "./pages/checklistitems";
import Inspections from "./pages/inspections";
import Reports from "./pages/reports";
import About from "./pages/about";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFound /> },
  { path: "/equipments", element: <Equipments /> },
  { path: "/checklists", element: <Checklists /> },
  { path: "/checklistitems", element: <ChecklistsItems /> },
  { path: "/inspections", element: <Inspections /> },
  { path: "/reports", element: <Reports /> },
  { path: "/about", element: <About /> },
]);

export default router;
