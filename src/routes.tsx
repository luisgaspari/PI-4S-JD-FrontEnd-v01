import { createBrowserRouter, Route, Router } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/404";
import Equipments from "./pages/equipments";
import Checklists from "./pages/checklists";
import ChecklistsItems from "./pages/checklistitems";
import Inspections from "./pages/inspections";
import Reports from "./pages/reports";
import About from "./pages/about";
import Login from "./pages/login";
import { Switch } from "@chakra-ui/react";


const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFound /> },
  { path: "/equipments", element: <Equipments /> },
  { path: "/checklists", element: <Checklists /> },
  { path: "/checklistitems", element: <ChecklistsItems /> },
  { path: "/inspections", element: <Inspections /> },
  { path: "/reports", element: <Reports /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
]);
/*
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" Component={Home} />
        <Route path="/equipments" Component={Equipments} />
        <Route path="/checklists" Component={Checklists} />
        <Route path="/checklistitems" Component={ChecklistsItems} />
        <Route path="/inspections" Component={Inspections} />
        <Route path="/reports" Component={Reports} />
        <Route path="/about" Component={About} />
        <Route path="/login" Component={Login} />
        <Route Component={NotFound} />
      </Switch>
    </Router>
  );
};*/


export default router
